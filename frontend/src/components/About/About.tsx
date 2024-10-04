import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./About.module.scss";
import { AboutIconsGITHUB } from "./AboutIconsGITHUB/AboutIconsGITHUB";

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
		AOS.init();
		getUserInfo();
		document.title = `${import.meta.env.VITE_NAME_WEB_APP} О разработке`;
	}, []);

	return (
		<>
			<div className={style.about} data-aos='fade-up'>
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
						<AboutIconsGITHUB />
					</div>
				</div>
			</div>
		</>
	);
};
