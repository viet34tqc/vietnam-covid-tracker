import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '../../../constant';
import { timeSince } from '../../../utils';

const Post = ({ post }) => {
	const { title, lead, publish_time, share_url: url, thumbnail_url } = post;
	return (
		<motion.a
			variants={MOTION_VARIANTS}
			initial="hidden"
			animate="enter"
			exit="exit"
			href={url}
			className="p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all grid gap-4 items-start grid-cols-[40%_1fr] md:grid-cols-[15%_1fr] mb-2"
		>
			<div className="relative">
				<img
					src={thumbnail_url}
					alt={title}
					className="bg-gray-100 dark:bg-gray-700 rounded-md w-full object-cover object-center h-full absolute top-0 left-0 "
				/>
				<div className="pb-[100%]"></div>
			</div>
			<div>
				<h3 className="text-[18px]">{title}</h3>
				<div className="text-[14px] text-gray-400 mb-2">
					{timeSince(publish_time)}
				</div>
				<p className="hidden md:block">{lead}</p>
			</div>
		</motion.a>
	);
};

export default Post;
