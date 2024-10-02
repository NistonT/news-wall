import style from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
	return (
		<>
			<header>
				<div className={style.wrapper}>
					<div className={style.header}>
						<div className={style.logo}>
							<span>NEWS-WALL</span>
						</div>
						<section>
							<Navigation />
							<div className={style.button}>
								<button>Кнопка</button>
							</div>
						</section>
					</div>
				</div>
			</header>
		</>
	);
};
