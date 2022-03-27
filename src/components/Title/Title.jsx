import React from 'react';

const Title = ({title, subTitle}) => {
	return (
		<div className="text-center mb-9">
			<h1 className="font-bold text-[32px]">{title}</h1>
			<div className="text-[20px]">{subTitle}</div>
		</div>
	);
};

export default Title;
