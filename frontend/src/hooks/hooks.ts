import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

let renderApp = () => {};

export const useMainGetQuery = () => {
	const getDataNews = async () => {
		return axios.get("http://localhost:5555/api");
	};

	const { data, isLoading } = useQuery({
		queryKey: ["news"],
		queryFn: getDataNews,
		select: data => data.data,
	});

	return { data, isLoading };
};

export const usePostQuery = (id: number) => {
	const postQueryIsPublishedFalse = () => {
		axios
			.post(`http://localhost:5555/api/update/${id}`, {
				isPublished: false,
			})
			.then(res => {
				renderApp();
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const postQueryIsPublishedTrue = () => {
		axios
			.post(`http://localhost:5555/api/update/${id}`, {
				isPublished: true,
			})
			.then(res => {
				renderApp();
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const postQueryDelete = () => {
		axios
			.post(`http://localhost:5555/api/delete/${id}`, {})
			.then(res => {
				renderApp();
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return {
		postQueryIsPublishedFalse,
		postQueryIsPublishedTrue,
		postQueryDelete,
	};
};

export const useAddPost = () => {
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
				renderApp();
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

	return { postQueryAddNews, handlerTitle, handlerDescription };
};

export let renderServer = (observer: any) => {
	renderApp = observer;
};
