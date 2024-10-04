import axios from "axios";
import { useEffect, useState } from "react";
import style from "./About.module.scss";
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

export const About = () => {
	const gitnubUsername = import.meta.env.VITE_GITHUB_USERNAME;
	const personalToken = import.meta.env.VITE_PERSONAL_TOKEN_GITHUB;

	const [avatarUrl, setAvatarUrl] = useState<string>("");
	const [login, setLogin] = useState<string>("");
	const [url, setUrl] = useState<string>("");
	const [name, setName] = useState<string>("");

	const getUserInfo = async () => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${gitnubUsername}`,
				{
					headers: {
						Authorization: `token ${personalToken}`,
					},
				}
			);
			setAvatarUrl(response.data.avatar_url);
			setLogin(response.data.login);
			setUrl(response.data.html_url);
			setName(response.data.name);
		} catch (error) {
			console.error("Error fetching user info:", error);
		}
	};

	useEffect(() => {
		getUserInfo();
		document.title = `${import.meta.env.VITE_NAME_WEB_APP} О разработке`;
	}, []);

	return (
		<>
			<div className={style.about}>
				<div className={style.wrapper}>
					<div className={style.personal}>
						<div className={style.img}>
							<img src={avatarUrl} alt='img' />
						</div>
						<div className={style.data_GITHUB}>
							<div className={style.name_GITHUB}>{name}</div>
							<div className={style.login_link_GITHUB}>
								<a href={url} target='__blank__'>
									{login}
								</a>
							</div>
						</div>
						<div className={style.info_GITHUB}>
							<p>
								I am a junior full-stack developer with experience in HTML/CSS,
								JavaScript, TypeScript, React.js, Express.js, SASS, Tailwind,
								Python, Prisma, Node.js.
							</p>
						</div>
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
					</div>
				</div>
			</div>
		</>
	);
};
