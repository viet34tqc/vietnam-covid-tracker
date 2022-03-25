import React from 'react';

const ProvinceSelectButton = ({ province, setProvince, name }) => {
	return (
		<button className="btn" type="button" onClick={() => setProvince(province)}>
			{name}
		</button>
	);
};

export default ProvinceSelectButton;
