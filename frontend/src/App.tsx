import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { AddNews } from "./components/AddNews/AddNews";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

export default function App() {
	const routes = [
		{ path: "/", element: <Main /> },
		{ path: "/addNews", element: <AddNews /> },
		{ path: "/about", element: <About /> },
	];

	return (
		<div>
			<Header />
			<Routes>
				{routes.map(route => (
					<Route path={route.path} element={route.element} />
				))}
			</Routes>
			<footer>footer</footer>
		</div>
	);
}
