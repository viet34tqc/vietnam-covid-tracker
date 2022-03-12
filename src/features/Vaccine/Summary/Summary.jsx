import axios from 'axios';
import { useEffect, useState } from 'react';
import { COVID_VACCINE_VIETNAM } from '../../../constant';

const Summary = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		(async function () {
			try {
				const response = await axios(COVID_VACCINE_VIETNAM);
				const data = response.data.data.data;
				const lastElement = data[data.length - 1];
				setData({
					first: Number(lastElement['1Dose']),
					second: Number(lastElement['2Dose']),
					third: Number(lastElement['3Dose']),
					secondRatio: response.data.data.secondRatio,
				});
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	if (!data) return <>Đang lấy dữ liệu</>;
	return (
		<>
			<div>
				<div>Tổng số người đã tiêm: {data.first.toLocaleString()}</div>
				<div>Đã tiêm đủ : {data.second.toLocaleString()}</div>
				<div>Đã tiêm đủ : {data.third.toLocaleString()}</div>
			</div>

			<p>
				Ít nhất {(data.first / 1000000).toFixed(2)} triệu người đã nhận được từ
				một liều vaccine ở Việt Nam. Con số này bao gồm hơn{' '}
				{(data.second / 1000000).toFixed(2)} triệu người đã được tiêm chủng đầy
				đủ.
			</p>

			<div
				className="bar-wrapper"
				style={{
					marginTop: '20px',
				}}
			>
				<div
					className="bar-chart"
					style={{
						position: 'relative',
						height: '20px',
						background: '#ccc',
					}}
				>
					<div
						className="bar-progress"
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							bottom: 0,
							background: '#111',
							width: data.secondRatio.toFixed(2) + '%',
						}}
					></div>
				</div>
				<div
					className="bar-note"
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div>
						<span
							style={{
								background: '#111',
								width: '10px',
								height: '10px',
								borderRadius: '50%',
								display: 'inline-block',
								marginRight: '8px',
							}}
						></span>
						Tỷ lệ dân số đã tiêm 2 mũi ({data.secondRatio.toFixed(2) + '%'})
					</div>

					<p>
						(*) Tương đương khoảng 150 triệu liều vaccine.
						<br /> Nguồn: Bộ Y Tế Việt Nam. Cập nhật lúc 18:30 08/03
					</p>
				</div>
			</div>
		</>
	);
};

export default Summary;
