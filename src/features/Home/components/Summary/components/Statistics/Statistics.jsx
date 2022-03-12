const Statistics = ({ data }) => {
	const { totalConfirmed, totalDeaths, totalRecovered } = data;
	const recovering = totalConfirmed - totalDeaths - totalRecovered;
	return (
		<div>
			Tổng số ca: {totalConfirmed}
			Số ca tử vong: {totalDeaths}
			Số ca hồi phục: {totalRecovered}
			Đang điều trị: {recovering}
		</div>
	);
};

export default Statistics;
