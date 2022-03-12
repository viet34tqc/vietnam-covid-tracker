import React from 'react';
import DailyCasesChart from './components/DailyCasesChart/DailyCasesChart';
import ProvinceCases from './components/ProvincesCases/ProvinceCases';
import Summary from './components/Summary/Summary';
import TotalCasesChart from './components/TotalCasesChart/TotalCasesChart';

const Home = () => {
	return (
		<>
			<Summary />
			<TotalCasesChart />
			<DailyCasesChart />
			<ProvinceCases />
		</>
	);
};

export default Home;
