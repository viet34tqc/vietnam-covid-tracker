import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
const Home = lazy(() => import('./features/Home/Home'));
const News = lazy(() => import('./features/News/News'));
const Vaccine = lazy(() => import('./features/Vaccine/Vaccine'));

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<>...</>}>
							<Home />
						</Suspense>
					}
				/>
				<Route
					path="/vaccine"
					element={
						<Suspense fallback={<>...</>}>
							<Vaccine />
						</Suspense>
					}
				/>
				<Route
					path="/news"
					element={
						<Suspense fallback={<>...</>}>
							<News />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
