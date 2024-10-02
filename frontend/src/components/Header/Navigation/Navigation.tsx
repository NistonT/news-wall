import { NavLink } from "react-router-dom";

export const Navigation = () => {
	const navLink = [
		{ to: "/", name: "Главная страница" },
		{ to: "/addNews", name: "Добавить новость" },
		{ to: "/about", name: "О разработке" },
	];

	return (
		<>
			<nav>
				{navLink.map(link => (
					<NavLink
						to={link.to}
						className={({ isActive }) =>
							isActive ? "text-red-500 font-bold underline" : undefined
						}
					>
						{link.name}
					</NavLink>
				))}
			</nav>
		</>
	);
};
