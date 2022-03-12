import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { COVID_CASES_VIETNAM, provinces } from '../../../../constant';
import FunctionalChart from './components/FunctionalChart';
import ProvinceSelectButton from './components/ProvinceSelectButton';

// We need to format because the data from 'vn' is different from the data from 'hn' and 'hcm.
function formatCaseData(data, province) {
	// Use item instead of case because `case` is a keyword in JS
	return data.map(item => {
		const date =
			item.x.slice(8) + '/' + item.x.slice(5, 7) + '/' + item.x.slice(0, 4);
		return {
			date,
			case: province !== 'vn' ? item.total : item.y,
		};
	});
}

const TotalCasesChart = () => {
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
						? response.data.data.vnSeason4.cases
						: response.data.data.data;
				setTotalCases(formatCaseData(data, province));
			} catch (error) {
				console.log(error);
			}
		})();
	}, [province]);

	return (
		<>
			<h2>Tổng số ca tại {provinces[province]}</h2>
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

export default TotalCasesChart;
