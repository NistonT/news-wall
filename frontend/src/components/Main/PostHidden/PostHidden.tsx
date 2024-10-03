import { usePostQuery } from "../../../hooks/hooks";
import style from "./../Main.module.scss";

interface IPostHidden {
	id: number;
}

export const PostHidden = ({ id }: IPostHidden) => {
	const { postQueryIsPublishedTrue, postQueryDelete } = usePostQuery(id);

	return (
		<>
			<div className={style.postHidden}>
				<div className={style.buttons}>
					<div className={`${style.button} ${style.buttonHidden}`}>
						<button onClick={postQueryIsPublishedTrue}>показать</button>
					</div>
					<div className={`${style.button} ${style.buttonDelete}`}>
						<button onClick={postQueryDelete}>удалить</button>
					</div>
				</div>
			</div>
		</>
	);
};
