// Import Swiper styles
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import FeaturedPost from './FeaturedPost';
const Slider = ({ posts }) => {
	return (
		<div className="v-block">
			<Splide
				options={{
					pagination: false,
					lazyLoad: true,
					rewind: true,
					type: 'fade',
				}}
			>
				{posts.map(post => (
					<SplideSlide key={post.title}>
						<FeaturedPost post={post} />
					</SplideSlide>
				))}
			</Splide>
		</div>
	);
};

export default Slider;
