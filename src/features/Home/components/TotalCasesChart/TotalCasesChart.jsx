import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Select from '../../../../components/Select/Select';
import Skeleton from '../../../../components/Skeleton/Skeleton';
import { COVID_CASES_VIETNAM, PROVINCES, RANGES } from '../../../../constant';
import FunctionalChart from './components/FunctionalChart';

function formatCaseData(data, province) {
	// Use item instead of case because `case` is a keyword in JS
	return data.map(item => {
		const date = province !== 'vn' ? item.date : item.x;
		return {
			// The date format get from zing.vn is yyyy-mm-dd.
			date: date.slice(8) + '/' + date.slice(5, 7) + '/' + date.slice(0, 4),
			case: province !== 'vn' ? item.total : item.y,
		};
	});
}

const TotalCasesChart = () => {
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
			? response.data.data.vnSeason4.cases
			: response.data.data.data;
	const totalCases = formatCaseData(data, province);

	return (
		<div className="v-block">
			<h3 className="mb-4 text-center">Tổng số ca tại {PROVINCES[province]}</h3>
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

export default TotalCasesChart;
