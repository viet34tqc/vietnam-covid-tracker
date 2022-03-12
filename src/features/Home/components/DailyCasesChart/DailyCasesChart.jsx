import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { COVID_CASES_VIETNAM, provinces } from '../../../../constant';
import FunctionalChart from '../TotalCasesChart/components/FunctionalChart';
import ProvinceSelectButton from '../TotalCasesChart/components/ProvinceSelectButton';

// We need to format because the data from 'vn' is different from the data from 'hn' and 'hcm.
function formatCaseData(data, province) {
	// Use item instead of case because `case` is a keyword in JS
	const cases = data.map(item => {
		if (province !== 'vn') {
			return {
				date:
					item.date.toString().slice(8, 10) +
					'/' +
					item.date.toString().slice(5, 7),
				case: Number(item.daily),
			};
		}
		return {
			date:
				item.x.toString().slice(8, 10) + '/' + item.x.toString().slice(5, 7),
			case: Number(item.y),
		};
	});
	return cases;
}

const DailyCasesChart = () => {
	const [province, setProvince] = useState('vn');
	const [totalCases, setTotalCases] = useState([]);

	// Load data to send to Chart
	useEffect(() => {
		(async function () {
			try {
				const url =
					province === 'vn'
						? `${COVID_CASES_VIETNAM}`
						: `${COVID_CASES_VIETNAM}?loc=${province}`;
				const response = await axios.get(url);
				const data =
					province === 'vn'
						? response.data.data.vnSeason4Daily.cases
						: response.data.data.data;
				setTotalCases(formatCaseData(data, province));
			} catch (error) {
				console.log(error);
			} 
		})();
	}, [province]);

	return (
		<>
			<h2>Số ca hàng ngày tại {provinces[province]}</h2>
			<div className="">
				{Object.entries(provinces).map(([code, name]) => (
					<ProvinceSelectButton
						key={code}
						province={code}
						setProvince={setProvince}
						name={name}
					/>
				))}
			</div>

			<FunctionalChart totalCases={totalCases} />
		</>
	);
};

export default DailyCasesChart;
