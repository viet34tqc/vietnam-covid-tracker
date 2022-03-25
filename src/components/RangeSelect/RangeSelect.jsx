import { RANGES } from '../../constant';

const RangeSelect = ({ setRange }) => {
	return (
		<select
			className="select"
			onChange={e => {
				setRange(e.target.value);
			}}
		>
			{Object.entries(RANGES).map(([key, name]) => (
				<option key={key} value={key}>
					{name}
				</option>
			))}
		</select>
	);
};

export default RangeSelect;
