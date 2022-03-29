import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import Skeleton from '../../../../components/Skeleton/Skeleton';
import { COVID_CASES_PROVINCE } from '../../../../constant';

const Row = ({ index, c }) => {
	return (
		<tr key={index}>
			<td className="text-left font-semibold py-1">{index + 1}</td>
			<td className="text-left font-semibold py-1">{c.x}</td>
			<td className="text-right text-red-400 py-1">
				{'+' + c.y.toLocaleString()}
			</td>
			<td className="text-right py-1">{c.z.toLocaleString()}</td>
		</tr>
	);
};

const ProvinceCases = () => {
	const [isReveal, setIsReveal] = useState(false);

	const ref = useRef(null);

	const {
		isLoading,
		isError,
		error,
		data: response,
	} = useQuery(['provinceCases'], () => axios.get(COVID_CASES_PROVINCE), {
		staleTime: 5 * 60 * 1000,
	});

	if (isLoading) {
		return <Skeleton />;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}
	const provincesCases = response.data.data.cases;
	const sortedCases = provincesCases.sort((a, b) => b.y - a.y);
	const firstFour = sortedCases
		.slice(0, 4)
		.map((c, index) => <Row key={index} index={index} c={c} />);

	return (
		<div ref={ref} className="v-block md:w-[80%] m-auto">
			<h3 className="text-center">Tình hình COVID-19 tại các tỉnh thành</h3>
			<table className="table-fixed w-full text-[14px] mb-4">
				<colgroup>
					<col className="w-2/12" />
					<col className="w-2/12" />
					<col className="w-3/12" />
					<col className="w-3/12" />
				</colgroup>
				<thead>
					<tr>
						<th className="text-left">#</th>
						<th className="text-left">Tỉnh</th>
						<th className="text-right">Hôm nay</th>
						<th className="text-right">Tổng</th>
					</tr>
				</thead>
				<tbody>
					{firstFour}

					{isReveal &&
						sortedCases
							.slice(4, sortedCases.length)
							.map((c, index) => (
								<Row key={index + 5} index={index + 5} c={c} />
							))}
				</tbody>
			</table>

			{!isReveal ? (
				<button
					className="btn--primary w-full"
					onClick={() => setIsReveal(true)}
				>
					Xem thêm
				</button>
			) : (
				<button
					className="btn--primary w-full"
					onClick={() => {
						window.scrollTo({
							top: ref.current.offsetTop,
							behavior: 'smooth',
						});
						setIsReveal(false);
					}}
				>
					Rút gọn
				</button>
			)}
		</div>
	);
};

export default ProvinceCases;
