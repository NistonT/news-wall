import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const navLink = [
		{ id: 0, to: "/", name: "Главная страница" },
		{ id: 1, to: "/addNews", name: "Добавить новость" },
		{ id: 2, to: "/about", name: "О разработке" },
	];

	return (
		<>
			<nav>
				{navLink.map(link => (
					<NavLink
						key={link.id}
						to={link.to}
						className={({ isActive }) => (isActive ? `underline` : undefined)}
					>
						{link.name}
					</NavLink>
				))}
			</nav>
		</>
	);
};
