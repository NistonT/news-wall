import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import style from "./AddNews.module.scss";
import { Form } from "./Form/Form";

export const AddNews = () => {
	useEffect(() => {
		AOS.init();
		document.title = `${import.meta.env.VITE_NAME_WEB_APP} Добавить новость`;
	}, []);

	return (
		<>
			<div className={style.panel} data-aos='fade-up'>
				<div className={style.wrapper}>
					<Form />
				</div>
			</div>
		</>
	);
};
