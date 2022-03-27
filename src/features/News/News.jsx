import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { COVID_NEWS } from '../../constant';
import Post from './components/Post';
import Slider from './components/Slider';

const News = () => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		(async function () {
			const response = await axios.get(COVID_NEWS + `&page=${page}`);
			const data = response.data.data[1004765].data; // 1004765 is the category_id
			setPosts(prevPosts => [...prevPosts, ...data]);
		})();
	}, [page]);

	const handleFetch = () => {
		setPage(page + 1);
	};

	const first4News = useMemo(() => posts.slice(0, 4), [posts]);
	const normalPosts = posts.slice(5); // The posts below post slider
	return (
		<div className="grid gap-8 w-full md:w-9/12">
			{first4News.length > 0 && <Slider posts={first4News} />}
			{normalPosts.length > 0 && (
				<div className="v-block">
					<h3 className="text-lg md:text-2xl font-bold bg-gray-100 text-center mb-8 p-2 md:p-4 rounded-md">
						Tin mới nhất
					</h3>
					{normalPosts.map(post => (
						<Post post={post} key={post.article_id} />
					))}

					<button
						className="btn--primary w-full block text-[16px]"
						onClick={handleFetch}
					>
						Xem thêm
					</button>
				</div>
			)}
		</div>
	);
};

export default News;
