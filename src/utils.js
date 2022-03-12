export const timeSince = time => {
	let seconds = Math.floor((Number(Date.now()) - Number(time) * 1000) / 1000);
	let interval = seconds / 31536000; // second per year

	if (interval > 1) {
		return Math.floor(interval) + ' năm trước';
	}
	interval = seconds / 2592000; // second per month
	if (interval > 1) {
		return Math.floor(interval) + ' tháng trước';
	}
	interval = seconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' ngày trước';
	}
	interval = seconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' giờ trước';
	}
	interval = seconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + ' phút trước';
	}
	return Math.floor(seconds) + ' giây trước';
};
