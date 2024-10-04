import { useEffect } from "react";
import { useMainGetQuery } from "../../hooks/hooks";
import style from "./Main.module.scss";
import { NotNews } from "./NotNews/NotNews";
import { Post } from "./Post/Post";
import { PostHidden } from "./PostHidden/PostHidden";

export const Main = () => {
	useEffect(() => {
		document.title = `${import.meta.env.VITE_NAME_WEB_APP} Главная страница`;
	}, []);

	const { data, isLoading } = useMainGetQuery();

	return (
		<>
			<section>
				<div className={style.wrapper}>
					<div className={style.main}>
						<div
							className={`${style.posts} grid grid-cols-2 gap-4 grid-auto-flow-dense`}
						>
							{isLoading ? (
								<button type='button' className='' disabled>
									<svg
										className='animate-spin h-5 w-5 mr-3 ...'
										viewBox='0 0 24 24'
									></svg>
									Обработка...
								</button>
							) : data && data.length > 0 ? (
								data.map((post: any) => (
									<>
										{post.isPublished ? (
											<Post
												id={post.id}
												title={post.title}
												description={post.description}
											/>
										) : (
											<PostHidden id={post.id} />
										)}
									</>
								))
							) : (
								<NotNews />
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
