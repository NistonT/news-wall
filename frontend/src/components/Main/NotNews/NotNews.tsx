import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from "./../Main.module.scss";

export const NotNews = () => {
	useEffect(() => {
		AOS.init({});
	}, []);

	return (
		<>
			<div className={style.notNews} data-aos='fade-up'>
				<div className={style.text}>Новостей нет!</div>
				<div className={style.linkRedirect}>
					<span>Но вы можете добавить их!</span>
					<NavLink to='/addNews'>Добавить</NavLink>
				</div>
			</div>
		</>
	);
};
