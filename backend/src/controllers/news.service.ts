import { News, PrismaClient } from "@prisma/client";
import { IPostNews, IUpdateNews } from "./news.type";

export class NewsService {
	private prisma = new PrismaClient();

	// get news
	async getNewsService(): Promise<News[]> {
		return await this.prisma.news.findMany();
	}

	// add news
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

	// update news
	async updateNewsService(news: IUpdateNews, id_news: number): Promise<News> {
		return this.prisma.news.update({
			where: {
				id: id_news,
			},
			data: {
				title: news.title?.toString(),
				description: news.description?.toString(),
				isPublished: Boolean(news.isPublished),
			},
		});
	}

	// delete news
	async deleteNewsService(id_news: number): Promise<News | null> {
		const existingNews = await this.prisma.news.findUnique({
			where: { id: id_news },
		});

		if (existingNews) {
			return this.prisma.news.delete({
				where: { id: id_news },
			});
		} else {
			return null;
		}
	}
}
