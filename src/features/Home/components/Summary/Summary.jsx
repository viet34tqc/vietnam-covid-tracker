import axios from 'axios';
import { useQuery } from 'react-query';
import Skeleton from '../../../../components/Skeleton/Skeleton';
import { SUMMARY_DATA_API } from '../../../../constant';
import Statistics from './components/Statistics/Statistics';
import SummaryChart from './components/SummaryChart/SummaryChart';

const Summary = () => {
	const {
		isLoading,
		isError,
		error,
		data: response,
	} = useQuery('summary', () => axios.get(SUMMARY_DATA_API), {
		staleTime: 5 * 60 * 1000,
	}); // The duration until a query transitions from fresh to stale. As long as the query is fresh, data will always be read from the cache only - no network request will happen. For more infomation: https://react-query.tanstack.com/guides/caching

	if (isLoading) {
		return <Skeleton />;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	const { totalConfirmed, totalDeaths, totalRecovered } = response.data[0];

	return (
		<div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:grid-cols-[2fr_1fr_1fr] gap-4 mb-10">
			{isLoading ? (
				<Skeleton />
			) : (
				<>
					<div className="col-span-full md:col-span-1 v-block">
						<Statistics
							data={{ totalConfirmed, totalDeaths, totalRecovered }}
						/>
					</div>
					<div className="v-block md:flex">
						<SummaryChart
							data={[totalConfirmed, totalDeaths]}
							title="Tỉ lệ tử vong"
						/>
					</div>
					<div className="v-block md:flex">
						<SummaryChart
							data={[totalConfirmed, totalRecovered]}
							title="Tỉ lệ hồi phục"
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Summary;
