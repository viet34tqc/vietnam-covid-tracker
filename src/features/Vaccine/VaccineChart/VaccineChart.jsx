import axios from 'axios';
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import SelectButtons from '../../../components/SelectButtons/SelectButtons';
import { COVID_VACCINE_VIETNAM, RANGES } from '../../../constant';
import { formatDataByRange } from '../../Home/components/TotalCasesChart/components/FunctionalChart';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const formatVaccineData = data => {
	return data.map(item => {
		return {
			date:
				item.date.slice(8) +
				'/' +
				item.date.slice(5, 7) +
				'/' +
				item.date.slice(0, 4),
			dose2: item['2Dose'],
			dose3: item['3Dose'],
		};
	});
};

const VaccineChart = () => {
	const [range, setRange] = useState('all'); // This range wont be reset if this component re-render

	const {
		isLoading,
		isError,
		error,
		data: response,
	} = useQuery(['vaccine'], () => axios.get(COVID_VACCINE_VIETNAM), {
		staleTime: 5 * 60 * 1000,
	});

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	const data = formatVaccineData(response.data.data.data);
	const dataByRange = formatDataByRange(range, data)

	const chartData = {
		labels: dataByRange.map(c => c.date),
		datasets: [
			{
				label: 'Đã tiêm mũi 2',
				data: dataByRange.map(c => c.dose2.toString().replace('.', '')), // We need to remove . because the returned data includes a dot in the number
				borderWidth: 1,
				fill: {
					target: 'start',
					above: '#ff000089',
				},
			},
			{
				label: 'Đã tiêm mũi 3',
				data: dataByRange.map(c => c.dose3.toString().replace('.', '')),
				borderWidth: 1,
				fill: {
					target: 'start',
					above: '#ff0000a5',
				},
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			x: {
				ticks: {
					maxTicksLimit: 8,
					// For a category axis (xAxis), the val is the index so the lookup via getLabelForValue is needed
					callback: function (val, index) {
						return this.getLabelForValue(val).slice(0, 5);
					},
				},
				grid: {
					display: false,
				},
			},
			y: {
				ticks: {
					maxTicksLimit: 6,
					// This callback will override the default format
					callback: function (label, index, labels) {
						if (!label) return 0;
						if (Number(label) < 1000000) {
							return label / 1000 + 'K';
						}
						return label / 1000000 + 'M';
					},
					font: {
						weight: 700,
					},
				},
			},
		},
		elements: {
			point: {
				radius: 0,
			},
			line: {
				tension: 0.4,
			},
		},
		interaction: {
			mode: 'index',
			intersect: false,
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				displayColors: false,
				padding: 10,
				callbacks: {
					title: function (context) {
						return 'Ngày ' + context[0].label;
					},
				},
			},
		},
	};

	return (
		<div className="mb-8 v-block">
			<h3 className="text-center mb-4">Số lượng người đã tiêm vaccine</h3>
			<div className="flex gap-3 justify-center mb-4">
				<SelectButtons options={RANGES} setOption={setRange} selected={range} />
			</div>
			<Line data={chartData} options={options} />
		</div>
	);
};

export default VaccineChart;
