// This context is used to save the post when you navigate to another link with react router.

import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { COVID_NEWS } from '../constant';

export const PostsContext = createContext(null);

const PostsContextProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const value = { posts, setPosts, page, setPage };

	useEffect(() => {
		(async function () {
			const response = await axios.get(COVID_NEWS + `&page=${page}`);
			const data = response.data.data[1004765].data; // 1004765 is the category_id
			setPosts(prevPosts => [...prevPosts, ...data]);
		})();
	}, [page]);
	return (
		<PostsContext.Provider value={value}>{children}</PostsContext.Provider>
	);
};
export default PostsContextProvider;
export const usePosts = () => {
	const context = useContext(PostsContext);
	if (context === undefined) {
		throw new Error('useSomething must be used within a SomethingProvider');
	}
	return context;
};
