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

const FunctionalChart = ({ totalCases, range }) => {
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
		</>
	);
};

export default FunctionalChart;
