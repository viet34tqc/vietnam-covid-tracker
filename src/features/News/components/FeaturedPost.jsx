import React from 'react';
import { timeSince } from '../../../utils';

const FeaturedPost = ({ post }) => {
	const { title, lead, publish_time, share_url: url, thumbnail_url } = post;

	return (
		<article>
			<img src={thumbnail_url} alt={title} />
			<div>
				<h3>
					<a href={url}>{title}</a>
				</h3>
                <span>{timeSince(publish_time)}</span>
				<p>{lead}</p>
			</div>
		</article>
	);
};

export default FeaturedPost;
