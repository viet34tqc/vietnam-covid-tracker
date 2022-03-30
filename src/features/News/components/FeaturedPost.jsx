import { motion } from 'framer-motion';
import React from 'react';
import { MOTION_VARIANTS } from '../../../constant';
import { timeSince } from '../../../utils';

const FeaturedPost = ({ post }) => {
	const { title, lead, publish_time, share_url: url, thumbnail_url } = post;

	return (
		<motion.article
			variants={MOTION_VARIANTS}
			initial="hidden"
			animate="enter"
			exit="exit"
		>
			<img
				className="w-full dark:bg-gray-700 bg-gray-100 h-60 md:w-full md:h-80 my-2 object-cover object-center rounded-lg"
				src={thumbnail_url}
				alt={title}
			/>
			<div>
				<h3>
					<a href={url}>{title}</a>
				</h3>
				<div className="text-[14px] text-gray-400 mb-2">
					{timeSince(publish_time)}
				</div>
				<p className="mt-4">{lead}</p>
			</div>
		</motion.article>
	);
};

export default FeaturedPost;
