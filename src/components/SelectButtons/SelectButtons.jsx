const SelectButtons = ({ options, setOption, selected }) => {
	const activeClass =
		'btn bg-red-500 text-white border-red-400 dark:bg-red-500 dark:text-white dark:border-red-400';
	return (
		<>
			{Object.entries(options).map(([option, name]) => (
				<button
					key={option}
					className={selected === option ? activeClass : 'btn'}
					type="button"
					onClick={() => setOption(option)}
				>
					{name}
				</button>
			))}
		</>
	);
};

export default SelectButtons;
