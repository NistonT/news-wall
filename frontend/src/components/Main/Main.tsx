import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import style from "./Main.module.scss";

export const Main = () => {
	const getDataNews = async () => {
		return axios.get("http://localhost:5555/api");
	};

	const { data, isLoading } = useQuery({
		queryKey: ["news"],
		queryFn: getDataNews,
		select: data => data.data,
	});

	return (
		<>
			<section>
				<div className={style.wrapper}>
					<div className={style.main}>
						<div className={style.posts}>
							{isLoading
								? "Loading..."
								: undefined
								? `Error: ${undefined}`
								: data
								? data.map((post: any) => (
										<div className={style.post} key={post.id}>
											<div className={style.title}>{post.title}</div>
											<div className={style.description}>
												{post.description}
											</div>
											<div className={style.buttons}>
												<div
													className={`${style.button} ${style.buttonHidden}`}
												>
													<button>скрыть</button>
												</div>
												<div
													className={`${style.button} ${style.buttonDelete}`}
												>
													<button>удалить</button>
												</div>
											</div>
										</div>
								  ))
								: "not found"}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
