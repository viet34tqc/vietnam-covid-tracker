import axios from 'axios';
import { useEffect, useState } from 'react';
import { SUMMARY_DATA_API } from '../../../../constant';
import Statistics from './components/Statistics/Statistics';
import SummaryChart from './components/SummaryChart/SummaryChart';

const Summary = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(SUMMARY_DATA_API);
				const { totalConfirmed, totalDeaths, totalRecovered } =
					response.data[0];
				setData({
					totalConfirmed,
					totalDeaths,
					totalRecovered,
				});
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);
	if (isLoading) return <>Đang xử lý</>;
	const { totalConfirmed, totalDeaths, totalRecovered } = data;
	return (
		<div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[2fr_1fr_1fr] gap-4 mb-10">
			<div className="col-span-full md:col-span-1 block">
				<Statistics data={data} />
			</div>
			<div className="block md:flex">
				<SummaryChart
					data={[totalConfirmed, totalDeaths]}
					title="Tỉ lệ tử vong"
				/>
			</div>
			<div className="block md:flex">
				<SummaryChart
					data={[totalConfirmed, totalRecovered]}
					title="Tỉ lệ hồi phục"
				/>
			</div>
		</div>
	);
};

export default Summary;
