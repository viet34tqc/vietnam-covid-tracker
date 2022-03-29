const Skeleton = () => {
	return (
		<div className="flex items-center justify-center p-4 flex-col w-full space-y-4">
			<div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800  rounded-xl animate-pulse h-72" />{' '}
			<div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse h-16" />
			<div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-full animate-pulse h-12" />
			<div className="w-full md:w-6/12 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse h-56" />
		</div>
	);
};

export default Skeleton
