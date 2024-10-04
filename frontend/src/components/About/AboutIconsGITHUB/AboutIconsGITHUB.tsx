import style from "./../About.module.scss";
import imgCSS from "/images/icons/css.png";
import imgExpress from "/images/icons/express.png";
import imgHTML from "/images/icons/html.png";
import imgJS from "/images/icons/js.png";
import imgNode from "/images/icons/node.png";
import imgPrisma from "/images/icons/prisma.png";
import imgPython from "/images/icons/python.png";
import imgReact from "/images/icons/react.png";
import imgSASS from "/images/icons/sass.png";
import imgTailwind from "/images/icons/tailwind.png";
import imgTS from "/images/icons/ts.png";

export const AboutIconsGITHUB = () => {
	return (
		<>
			<div className={style.icons_GITHUB}>
				<div className={style.icon}>
					<img src={imgHTML} alt='html' />
				</div>
				<div className={style.icon}>
					<img src={imgCSS} alt='css' />
				</div>
				<div className={style.icon}>
					<img src={imgJS} alt='js' />
				</div>
				<div className={style.icon}>
					<img src={imgTS} alt='ts' />
				</div>
				<div className={style.icon}>
					<img src={imgReact} alt='react' />
				</div>
				<div className={style.icon}>
					<img src={imgExpress} alt='express' />
				</div>
				<div className={style.icon}>
					<img src={imgSASS} alt='sass' />
				</div>
				<div className={style.icon}>
					<img src={imgTailwind} alt='tailwind' />
				</div>
				<div className={style.icon}>
					<img src={imgPython} alt='python' />
				</div>
				<div className={style.icon}>
					<img src={imgPrisma} alt='prisma' />
				</div>
				<div className={style.icon}>
					<img src={imgNode} alt='node' />
				</div>
			</div>
		</>
	);
};
