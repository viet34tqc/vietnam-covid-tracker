import { motion } from 'framer-motion';
import React from 'react';
import Title from '../../components/Title/Title';
import { MOTION_VARIANTS } from '../../constant';
import Summary from './Summary/Summary';
import VaccineChart from './VaccineChart/VaccineChart';
import VaccineTable from './VaccineTable/VaccineTable';

const Vaccine = () => {
	// Summary
	// TwoDosesPercentage
	// VaccineDistributionTable
	return (
		<motion.div
			variants={MOTION_VARIANTS}
			initial="hidden"
			animate="enter"
			exit="exit"
		>
			<Title title="Số liệu Vắc xin tại Việt Nam" subTitle="" />
			<Summary />
			<VaccineChart />
			<VaccineTable />
		</motion.div>
	);
};

export default Vaccine;
