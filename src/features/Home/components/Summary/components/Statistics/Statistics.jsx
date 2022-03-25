const Statistics = ({ data }) => {
	const { totalConfirmed, totalDeaths, totalRecovered } = data;
	return (
		<>
			<h3 className="font-bold mb-4 text-center text-[22px]">
				Số liệu tổng quan
			</h3>
			<div className="grid grid-cols-3 gap-4">
				<div className="text-center">
					<div className="text-2xl font-bold text-red-400">
						{totalConfirmed}
					</div>
					<div className="text-l font-bold text-gray-600">Tổng số ca</div>
				</div>
				<div className="text-center">
					<div className="text-2xl font-bold text-red-600">{totalDeaths}</div>
					<div className="text-l font-bold text-gray-600">Số ca tử vong</div>
				</div>
				<div className="text-center">
					<div className="text-2xl font-bold text-green-600">
						{totalRecovered}
					</div>
					<div className="text-l font-bold text-gray-600">Số ca hồi phục</div>
				</div>
			</div>
		</>
	);
};

export default Statistics;
