import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePostQuery } from "../../../hooks/hooks";
import style from "./../Main.module.scss";
import { IPost } from "./Post.type";

export const Post = ({ id, title, description }: IPost) => {
	const { postQueryIsPublishedFalse, postQueryDelete } = usePostQuery(id);

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<div className={style.post} key={id} data-aos='fade-up'>
				<div className={style.title}>{title}</div>
				<div className={style.description}>{description}</div>
				<div className={style.buttons}>
					<div className={`${style.button} ${style.buttonHidden}`}>
						<button onClick={postQueryIsPublishedFalse}>скрыть</button>
					</div>
					<div className={`${style.button} ${style.buttonDelete}`}>
						<button onClick={postQueryDelete}>удалить</button>
					</div>
				</div>
			</div>
		</>
	);
};
