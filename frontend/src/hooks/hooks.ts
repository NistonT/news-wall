import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { render } from "../render";

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
				render();
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
				render();
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
				render();
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
