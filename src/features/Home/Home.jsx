import React from 'react';
import Title from '../../components/Title/Title';
import DailyCasesChart from './components/DailyCasesChart/DailyCasesChart';
import ProvinceCases from './components/ProvincesCases/ProvinceCases';
import Summary from './components/Summary/Summary';
import TotalCasesChart from './components/TotalCasesChart/TotalCasesChart';

const Home = () => {
	return (
		<>
			<Title />
			<Summary />
			<TotalCasesChart />
			<DailyCasesChart />
			<ProvinceCases />
		</>
	);
};

export default Home;
