import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeContextProvider from './context/ThemeContext';
const Home = lazy(() => import('./features/Home/Home'));
const News = lazy(() => import('./features/News/News'));
const Vaccine = lazy(() => import('./features/Vaccine/Vaccine'));

function App() {
	return (
		<ThemeContextProvider>
			<BrowserRouter>
				<Header />
				<main className="container py-8">
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
				</main>
				<Footer />
			</BrowserRouter>
		</ThemeContextProvider>
	);
}

export default App;
