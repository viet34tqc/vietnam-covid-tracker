import React from 'react';
import Summary from './Summary/Summary';
import VaccineChart from './VaccineChart/VaccineChart';
import VaccineTable from './VaccineTable/VaccineTable';

const Vaccine = () => {
	// Summary
	// TwoDosesPercentage
	// VaccineDistributionTable
	return (
		<div>
			<Summary />
			<VaccineChart />
			<VaccineTable />
		</div>
	);
};

export default Vaccine;
