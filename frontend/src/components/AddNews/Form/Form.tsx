import { useAddPost } from "../../../hooks/hooks";
import style from "./../AddNews.module.scss";

export const Form = () => {
	const { handlerTitle, handlerDescription, postQueryAddNews } = useAddPost();
	return (
		<>
			<form action='' method='post' className={style.form}>
				<h1>Добавить новость</h1>
				<div className={style.titleDevInput}>
					<input
						className={style.titleInput}
						onChange={handlerTitle}
						type='text'
						placeholder='Название'
					/>
				</div>
				<div className={style.descriptionDevTextarea}>
					<textarea
						className={style.descriptionTextarea}
						onChange={handlerDescription}
						name=''
						id=''
						placeholder='Описание'
					></textarea>
				</div>
				<div className={style.clickDevButton}>
					<button
						className={style.clickButton}
						type='button'
						onClick={postQueryAddNews}
					>
						Добавить
					</button>
				</div>
			</form>
		</>
	);
};
