const Post = ({ post }) => {
	const { title, lead, publish_time, share_url: url, thumbnail_url } = post;
	return (
		<article
			style={{
				display: 'grid',
				gridTemplateColumns: '20% 1fr',
			}}
		>
			<img src={thumbnail_url} alt={title} />
			<div>
				<h3>
					<a href={url}>{title}</a>
				</h3>
				<p>{lead}</p>
			</div>
		</article>
	);
};

export default Post;
