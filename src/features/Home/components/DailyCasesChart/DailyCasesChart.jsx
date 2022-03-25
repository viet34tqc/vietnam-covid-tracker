import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProvinceSelect from '../../../../components/ProvinceSelect/ProvinceSelect';
import RangeSelect from '../../../../components/RangeSelect/RangeSelect';
import { COVID_CASES_VIETNAM, PROVINCES } from '../../../../constant';
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
		<div className="block">
			<h3 className="mb-4 text-center">
				Số ca hàng ngày tại {PROVINCES[province]}
			</h3>
			<div className="flex justify-between items-end mb-4">
				<ProvinceSelect setProvince={setProvince} />
				<RangeSelect setRange={setRange} />
			</div>

			<FunctionalChart totalCases={totalCases} range={range} />
		</div>
	);
};

export default DailyCasesChart;
