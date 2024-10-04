import { useState } from "react";
import style from "./Header.module.scss";
import { Navigation } from "./Navigation/Navigation";

export const Header = () => {
	const [click, setClick] = useState<boolean>(false);

	const handlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		console.log(click);
		setClick(!click);
	};

	return (
		<>
			<header>
				<div className={style.wrapper}>
					<div className={style.header}>
						<div className={style.logo}>
							{click ? <span>NEWS-WALL</span> : <div>NEWS-WALL</div>}
						</div>
						<section>
							<Navigation />
							<div className={style.button}>
								<button onClick={handlerClick}>Кнопка</button>
							</div>
						</section>
					</div>
				</div>
			</header>
		</>
	);
};
