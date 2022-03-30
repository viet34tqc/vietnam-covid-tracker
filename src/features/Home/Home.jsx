import { motion } from 'framer-motion';
import React from 'react';
import Title from '../../components/Title/Title';
import { MOTION_VARIANTS } from '../../constant';
import DailyCasesChart from './components/DailyCasesChart/DailyCasesChart';
import ProvinceCases from './components/ProvincesCases/ProvinceCases';
import Summary from './components/Summary/Summary';
import TotalCasesChart from './components/TotalCasesChart/TotalCasesChart';

const Home = () => {
	return (
		<motion.div
			variants={MOTION_VARIANTS}
			initial="hidden"
			animate="enter"
			exit="exit"
		>
			<Title
				title="Số liệu Vắc xin tại Việt Nam"
				subTitle="Đợt dịch lần thứ 4, từ ngày 27/4/2021"
			/>
			<Summary />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<TotalCasesChart />
				<DailyCasesChart />
			</div>
			<ProvinceCases />
		</motion.div>
	);
};

export default Home;
