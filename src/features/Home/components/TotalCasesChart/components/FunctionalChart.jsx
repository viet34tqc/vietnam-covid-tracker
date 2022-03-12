import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import { useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ranges } from '../../../../../constant';

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

export const RangeSelectButton = ({ name, range, setRange }) => {
	return (
		<button type="button" onClick={() => setRange(range)}>
			{name}
		</button>
	);
};

export const formatDataByRange = (range, totalCases) => {
	const length = totalCases.length;
	if (!length) return [];
	switch (range) {
		case 'week':
			return totalCases.slice(length - 7, length);
		case 'month':
			return totalCases.slice(length - 31, length);
		default:
			return totalCases;
	}
};

const FunctionalChart = ({ totalCases }) => {
	const [range, setRange] = useState('all'); // This range wont be reset if this component re-render
	const casesByRange = useMemo(
		() => formatDataByRange(range, totalCases),
		[range, totalCases]
	);
	const data = {
		labels: casesByRange.map(c => c.date),
		datasets: [
			{
				data: casesByRange.map(c => c.case.toString().replace('.', '')), // We need to remove . because the returned data includes a dot in the number
				borderWidth: 1,
				fill: {
					target: 'start',
					above: '#ff000042',
				},
			},
		],
	};

	const options = {
		scales: {
			x: {
				ticks: {
					maxTicksLimit: 8,
				},
				grid: {
					display: false,
				},
			},
			y: {
				ticks: {
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
					label: function (context) {
						return (
							'Số ca nhiễm: ' + new Intl.NumberFormat().format(context.parsed.y)
						);
					},
				},
			},
		},
	};

	return (
		<>
			<Line data={data} options={options} />
			{Object.entries(ranges).map(([key, name]) => (
				<RangeSelectButton
					key={key}
					range={key}
					setRange={setRange}
					name={name}
				/>
			))}
		</>
	);
};

export default FunctionalChart;
