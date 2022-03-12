import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { COVID_VACCINE_PROVINCE } from '../../../constant';

const VaccineTable = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		(async function () {
			const response = await axios.get(COVID_VACCINE_PROVINCE);
			const data = response.data.data;
			setData(data);
		})();
	}, []);
	if (!data.length) return <>Đang xử lý</>;
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>STT</th>
						<th>Tỉnh/Thành phố</th>
						<th>Đã tiêm mũi 1</th>
						<th>Đã tiêm đủ liều</th>
						<th>Đã tiêm mũi 3</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.provinceName}</td>
							<td>
								{(
									(item.totalOnceInjected / item.popOverEighteen) *
									100
								).toFixed(2) + '%'}
							</td>
							<td>
								{(
									(item.totalTwiceInjected / item.popOverEighteen) *
									100
								).toFixed(2) + '%'}
							</td>
							<td>
								{(
									(item.totalThriceInjected / item.popOverEighteen) *
									100
								).toFixed(2) + '%'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default VaccineTable;
