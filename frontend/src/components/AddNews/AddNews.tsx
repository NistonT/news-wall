import axios from "axios";
import React, { useState } from "react";
import { render } from "../../render";

export const AddNews = () => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const postQueryAddNews = async () => {
		return await axios
			.post(`http://localhost:5555/api`, {
				title: title,
				description: description,
				isPublished: true,
			})
			.then(res => {
				console.log(res);
				render();
			})
			.catch(error => {
				console.log(error);
			});
	};

	const handlerTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};
	const handlerDescription = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setDescription(event.target.value);
	};

	return (
		<>
			<div className='panel'>
				<form action='' method='post'>
					<input onChange={handlerTitle} type='text' placeholder='title' />{" "}
					<br />
					<textarea
						onChange={handlerDescription}
						name=''
						id=''
						placeholder='description'
					></textarea>{" "}
					<br />
					<button type='button' onClick={postQueryAddNews}>
						Добавить
					</button>
				</form>
			</div>
		</>
	);
};
