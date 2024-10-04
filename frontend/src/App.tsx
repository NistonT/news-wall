import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { AddNews } from "./components/AddNews/AddNews";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export default function App() {
	const routes = [
		{ id: 0, path: "/", element: <Main /> },
		{ id: 1, path: "/addNews", element: <AddNews /> },
		{ id: 2, path: "/about", element: <About /> },
	];

	return (
		<div className='box-border min-h-screen pb-24'>
			<Header />
			<Routes>
				{routes.map(route => (
					<Route key={route.id} path={route.path} element={route.element} />
				))}
			</Routes>
		</div>
	);
}
