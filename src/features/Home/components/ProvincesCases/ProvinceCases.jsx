import axios from 'axios';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { COVID_CASES_PROVINCE } from '../../../../constant';

const ProvinceCases = () => {
	const [provincesCases, setProvincesCases] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isReveal, setIsReveal] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		(async function () {
			try {
				setIsLoading(true);
				const response = await axios.get(COVID_CASES_PROVINCE);
				const data = response.data.data.cases;
				setProvincesCases(data);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	const sortedCases = useMemo(
		() => provincesCases.sort((a, b) => b.y - a.y),
		[provincesCases]
	);

	const firstFour = useMemo(() => {
		return sortedCases.slice(0, 4).map((c, index) => (
			<tr key={index}>
				<td>{index + 1}</td>
				<td>{c.x}</td>
				<td>{'+' + c.y}</td>
				<td>{c.z}</td>
			</tr>
		));
	}, [sortedCases]);

	if (isLoading) return <>Đang xử lý...</>;

	return (
		<div ref={ref}>
			<h2>Tình hình COVID-19 tại các tỉnh thành</h2>
			<table>
				<thead>
					<tr>
						<td>#</td>
						<td>Tỉnh</td>
						<td>Hôm nay</td>
						<td>Tổng</td>
					</tr>
				</thead>
				<tbody>
					{firstFour}

					{isReveal &&
						sortedCases.slice(4, sortedCases.length).map((c, index) => (
							<tr key={index}>
								<td>{index + 5}</td>
								<td>{c.x}</td>
								<td>{'+' + c.y}</td>
								<td>{c.z}</td>
							</tr>
						))}
				</tbody>
			</table>

			{!isReveal ? (
				<button onClick={() => setIsReveal(true)}>Xem thêm</button>
			) : (
				<button
					onClick={() => {
						window.scrollTo({
							top:ref.current.offsetTop,
							behavior: 'smooth'
						} )
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
