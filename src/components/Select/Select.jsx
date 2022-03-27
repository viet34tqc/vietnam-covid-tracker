const RangeSelect = ({ options, setOption, selected }) => {
	return (
		<select
			className="select"
			defaultValue={selected}
			onChange={e => {
				setOption(e.target.value);
			}}
		>
			{Object.entries(options).map(([key, name]) => (
				<option key={key} value={key}>
					{name}
				</option>
			))}
		</select>
	);
};

export default RangeSelect;
