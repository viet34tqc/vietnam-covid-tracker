export const SUMMARY_DATA_API =
	'https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=VN';
export const COVID_CASES_VIETNAM =
	'https://api.zingnews.vn/public/v2/corona/getChart';
export const COVID_CASES_PROVINCE =
	'https://api.zingnews.vn/public/v2/corona/getChart?type=province';
export const COVID_VACCINE_VIETNAM =
	'https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination_v2';
export const COVID_VACCINE_PROVINCE =
	'https://api.zingnews.vn/public/v2/corona/getChart?type=vaccination2';
export const COVID_NEWS =
	'https://gw.vnexpress.net/ar/get_rule_2?category_id=1004765&limit=10&data_select=title,share_url,thumbnail_url,lead,publish_time';

export const PROVINCES = {
	vn: 'Việt Nam',
	hanoi: 'Hà Nội',
	hochiminh: 'TP Hồ Chí Minh',
};

export const RANGES = {
	all: 'Tất cả',
	week: 'Tuần',
	month: 'Tháng',
};

export const MOTION_VARIANTS = {
	hidden: { opacity: 0, x: -100, y: 0 },
	enter: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { duration: 0.3 },
	},
	exit: {
		y: 0,
		opacity: 0.4,
		transition: { duration: 0.3 },
	},
};
