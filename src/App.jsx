import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skeleton from './components/Skeleton/Skeleton';
import PostsContextProvider from './context/PostsContext';
import ThemeContextProvider from './context/ThemeContext';
const Home = lazy(() => import('./features/Home/Home'));
const News = lazy(() => import('./features/News/News'));
const Vaccine = lazy(() => import('./features/Vaccine/Vaccine'));

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<BrowserRouter>
					<PostsContextProvider>
						<Header />
						<main className="container py-8">
							<Routes>
								<Route
									path="/"
									element={
										<Suspense fallback={<Skeleton />}>
											<Home />
										</Suspense>
									}
								/>
								<Route
									path="/vaccine"
									element={
										<Suspense fallback={<Skeleton />}>
											<Vaccine />
										</Suspense>
									}
								/>
								<Route
									path="/news"
									element={
										<Suspense fallback={<Skeleton />}>
											<News />
										</Suspense>
									}
								/>
							</Routes>
						</main>
						<Footer />
					</PostsContextProvider>
				</BrowserRouter>
			</ThemeContextProvider>
		</QueryClientProvider>
	);
}

export default App;
