import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SummaryChart = ({ data, title }) => {
	let percentage = (data[1] / data[0]) * 100;
	percentage = Number(percentage.toFixed(2));
	return (
		<>
			<h2>{title}</h2>
			<Doughnut
				data={{
					datasets: [
						{
							data: [data[1], data[0]],
							backgroundColor: [
								'rgba(255, 99, 132, 0.2)',
								'rgba(54, 162, 235, 0.2)',
							],
							borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
							borderWidth: 1,
						},
					],
				}}
				options={{
					cutout: '90%',
				}}
				plugins={[
					{
						id: 'text',
						beforeDraw: function (chart, a, b) {
							var width = chart.width,
								height = chart.height,
								ctx = chart.ctx;

							ctx.restore();
							var fontSize = (height / 114).toFixed(2);
							ctx.font = fontSize + 'em sans-serif';
							ctx.textBaseline = 'middle';

							var text = `${percentage}%`,
								textX = Math.round((width - ctx.measureText(text).width) / 2),
								textY = height / 2;

							ctx.fillText(text, textX, textY);
							ctx.save();
						},
					},
				]}
			/>
		</>
	);
};

export default SummaryChart;
