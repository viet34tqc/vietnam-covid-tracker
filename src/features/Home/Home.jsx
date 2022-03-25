import React from 'react';
import Title from '../../components/Title/Title';
import DailyCasesChart from './components/DailyCasesChart/DailyCasesChart';
import ProvinceCases from './components/ProvincesCases/ProvinceCases';
import Summary from './components/Summary/Summary';
import TotalCasesChart from './components/TotalCasesChart/TotalCasesChart';

const Home = () => {
	return (
		<main className="container py-8">
			<Title />
			<Summary />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<TotalCasesChart />
				<DailyCasesChart />
			</div>
			<ProvinceCases />
		</main>
	);
};

export default Home;
