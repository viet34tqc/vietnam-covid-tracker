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
		<div className="v-block md:w-[80%] m-auto">
			<h3 className="text-center mb-4">
				Tỷ lệ tiêm so với dân số từ 18 tuổi trở lên
			</h3>
			<div className="overflow-auto h-[300px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
				<table className="table-fixed w-full text-[14px] mb-4">
					<thead>
						<tr>
							<th className="sticky top-0 bg-red-100 dark:bg-gray-700 dark:border-gray-700 px-1 py-3 border-b text-left">
								STT
							</th>
							<th className="sticky top-0 bg-red-100 dark:bg-gray-700 dark:border-gray-700 p-1 border-b text-left">
								Tỉnh/Thành phố
							</th>
							<th className="sticky top-0 bg-red-100 dark:bg-gray-700 dark:border-gray-700 p-1 border-b text-right">
								Đã tiêm mũi 1
							</th>
							<th className="sticky top-0 bg-red-100 dark:bg-gray-700 dark:border-gray-700 p-1 border-b text-right">
								Đã tiêm đủ liều
							</th>
							<th className="sticky top-0 border-b bg-red-100 dark:bg-gray-700 dark:border-gray-700 p-1 pr-4 text-right">
								Đã tiêm mũi 3
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<td className="text-left p-1 font-semibold">{index + 1}</td>
								<td className="text-left p-1 font-semibold">
									{item.provinceName}
								</td>
								<td className="text-right p-1 text-red-600">
									{(
										(item.totalOnceInjected / item.popOverEighteen) *
										100
									).toFixed(2) + '%'}
								</td>
								<td className="text-right p-1 text-red-600">
									{(
										(item.totalTwiceInjected / item.popOverEighteen) *
										100
									).toFixed(2) + '%'}
								</td>
								<td className="text-right p-1 pr-4 text-red-600">
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
		</div>
	);
};

export default VaccineTable;
