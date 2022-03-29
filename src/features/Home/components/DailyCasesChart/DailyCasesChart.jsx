import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Select from '../../../../components/Select/Select';
import Skeleton from '../../../../components/Skeleton/Skeleton';
import { COVID_CASES_VIETNAM, PROVINCES, RANGES } from '../../../../constant';
import FunctionalChart from '../TotalCasesChart/components/FunctionalChart';

// We need to format because the data from 'vn' is different from the data from 'hn' and 'hcm.
function formatCaseData(data, province) {
	// Use item instead of case because `case` is a keyword in JS
	const cases = data.map(item => {
		const date = province !== 'vn' ? item.date : item.x;
		return {
			date: date.slice(8) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4),
			case: province !== 'vn' ? item.daily : item.y,
		};
	});
	return cases;
}

const DailyCasesChart = () => {
	const [province, setProvince] = useState('vn');
	const [range, setRange] = useState('all');

	const {
		isLoading,
		isError,
		error,
		data: response,
	} = useQuery(
		['cases', province],
		() => {
			const url =
				province === 'vn'
					? COVID_CASES_VIETNAM
					: `${COVID_CASES_VIETNAM}?loc=${province}`;
			return axios.get(url);
		},
		{ staleTime: 5 * 60 * 1000 }
	);

	if (isLoading) {
		return <Skeleton />;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	const data =
		province === 'vn'
			? response.data.data.vnSeason4Daily.cases
			: response.data.data.data;
	const totalCases = formatCaseData(data, province);

	return (
		<div className="v-block">
			<h3 className="mb-4 text-center">
				Số ca hàng ngày tại {PROVINCES[province]}
			</h3>
			<div className="flex justify-between items-end mb-4">
				<Select
					options={PROVINCES}
					setOption={setProvince}
					selected={province}
				/>
				<Select options={RANGES} setOption={setRange} selected={range} />
			</div>

			<FunctionalChart totalCases={totalCases} range={range} />
		</div>
	);
};

export default DailyCasesChart;
