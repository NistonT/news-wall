import { News, PrismaClient } from "@prisma/client";
import { IPostNews } from "./news.type";

export class NewsService {
	private prisma = new PrismaClient();

	async getNewsService(): Promise<News[]> {
		return await this.prisma.news.findMany();
	}

	async postNewsService(news: IPostNews): Promise<News> {
		if (!news.title) {
			throw new Error("Название обязательное");
		}

		if (!news.description) {
			throw new Error("Описание обязательное");
		}

		if (news.isPublished === undefined) {
			throw new Error("Тип Опубликованности обязательно");
		}

		return await this.prisma.news.create({
			data: {
				title: news.title.toString(),
				description: news.description.toString() ?? "",
				isPublished: Boolean(news.isPublished),
			},
		});
	}
}
