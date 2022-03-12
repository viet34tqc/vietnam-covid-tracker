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
		<>
			<Statistics data={data} />
			<SummaryChart
				data={[totalConfirmed, totalDeaths]}
				title="Tỉ lệ tử vong"
			/>
			<SummaryChart
				data={[totalConfirmed, totalRecovered]}
				title="Tỉ lệ hồi phục"
			/>
		</>
	);
};

export default Summary;
