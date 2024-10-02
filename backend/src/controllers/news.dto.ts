import { z } from "zod";

export const createNewsDto = z.object({
	title: z
		.string()
		.min(1, "Название обязательно")
		.max(128, "Превыщен лимит символов"),
	description: z.string().min(1, "Описание обязательно"),
});
