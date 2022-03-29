import axios from 'axios';
import { useQuery } from 'react-query';
import { COVID_VACCINE_VIETNAM } from '../../../constant';

const Summary = () => {
	const {
		isLoading,
		isError,
		error,
		data: response,
	} = useQuery(['vaccine'], () => axios.get(COVID_VACCINE_VIETNAM), {staleTime: 5 * 60 * 1000 });

	if (isLoading) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	const responseData = response.data.data.data;
	const lastElement = responseData[responseData.length - 1];
	const data = {
		first: Number(lastElement['1Dose']),
		second: Number(lastElement['2Dose']),
		third: Number(lastElement['3Dose']),
		secondRatio: response.data.data.secondRatio,
	};

	return (
		<div className="mb-10">
			<div className="grid gap-8 md:grid-cols-3 md:w-[80%] m-auto mb-8">
				<div className="v-block text-center">
					<div>Tổng số người đã tiêm</div>
					<div className="font-bold text-[32px] text-red-400">
						{data.first.toLocaleString()}
					</div>
				</div>
				<div className="v-block text-center">
					<div>Đã tiêm đủ liều</div>
					<div className="font-bold text-[32px] text-red-400">
						{data.second.toLocaleString()}
					</div>
				</div>
				<div className="v-block text-center">
					<div>Đã tiêm mũi 3</div>
					<div className="font-bold text-[32px] text-gray-400">
						{data.third.toLocaleString()}
					</div>
				</div>
			</div>

			<p className="mb-8 m-auto md:w-[60%] text-center">
				Ít nhất{' '}
				<span className="text-red-400 font-bold">
					{(data.first / 1000000).toFixed(2)} triệu
				</span>{' '}
				người đã nhận được từ một liều vaccine ở Việt Nam. Con số này bao gồm
				hơn{' '}
				<span className="text-gray-400 font-bold">
					{(data.second / 1000000).toFixed(2)} triệu
				</span>{' '}
				người đã được tiêm chủng đầy đủ.
			</p>

			<div className="md:w-[60%] m-auto">
				<div className="relative h-5 bg-gray-300">
					<div
						className="absolute top-0 left-0 bottom-0 bg-red-400"
						style={{
							width: data.secondRatio.toFixed(2) + '%',
						}}
					></div>
				</div>
				<div className="flex justify-between items-center mt-2">
					<div>
						<span className="bg-red-400 w-[10px] h-[10px] rounded-[50%] inline-block mr-2"></span>
						Tỷ lệ dân số đã tiêm 2 mũi ({data.secondRatio.toFixed(2) + '%'})
					</div>

					<p>Nguồn: Bộ Y Tế Việt Nam. Cập nhật lúc 18:30 08/03</p>
				</div>
			</div>
		</div>
	);
};

export default Summary;
