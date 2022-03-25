import React from 'react';
import { PROVINCES } from '../../constant';

const ProvinceSelect = ({ setProvince }) => {
	return (
		<select className="select" onChange={e => setProvince(e.target.value)}>
			{Object.entries(PROVINCES).map(([code, name]) => (
				<option value={code} key={code}>
					{name}
				</option>
			))}
		</select>
	);
};

export default ProvinceSelect;
