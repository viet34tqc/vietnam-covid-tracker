import React from 'react';
import Title from '../../components/Title/Title';
import Summary from './Summary/Summary';
import VaccineChart from './VaccineChart/VaccineChart';
import VaccineTable from './VaccineTable/VaccineTable';

const Vaccine = () => {
	// Summary
	// TwoDosesPercentage
	// VaccineDistributionTable
	return (
		<div>
			<Title />
			<Summary />
			<VaccineChart />
			<VaccineTable />
		</div>
	);
};

export default Vaccine;
