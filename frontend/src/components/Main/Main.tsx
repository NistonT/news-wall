import { useMainGetQuery } from "../../hooks/hooks";
import style from "./Main.module.scss";
import { Post } from "./Post/Post";
import { PostHidden } from "./PostHidden/PostHidden";

export const Main = () => {
	const { data, isLoading } = useMainGetQuery();

	return (
		<>
			<section>
				<div className={style.wrapper}>
					<div className={style.main}>
						<div className={style.posts}>
							{isLoading
								? "Loading..."
								: data && data.length > 0
								? data.map((post: any) => (
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
								: "Новостей нет!"}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
