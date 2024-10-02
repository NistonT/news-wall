import Router, { Request, Response } from "express";
import { authMiddleware } from "./../auto.middleware";
import { createNewsDto } from "./news.dto";
import { NewsService } from "./news.service";

const router = Router();
const newsService = new NewsService();

// get query
router.get("/", async (req: Request, res: Response) => {
	try {
		const news = await newsService.getNewsService();
		res.status(202).json(news);
	} catch (error) {
		res.status(404).json({ message: `${error}` });
	}
});

// post query
router.post("/", authMiddleware, async (req: Request, res: Response) => {
	try {
		const validation = createNewsDto.safeParse(req.body);

		if (!validation.success) {
			res.status(400).json({ message: validation.error.errors[0].message });
		} else {
			const news = await newsService.postNewsService(req.body);
			res.status(201).json(news);
		}
	} catch (error) {
		res.status(404).json({ message: `${error}` });
	}
});

// post update query
router.post(
	"/update/:id",
	authMiddleware,
	async (req: Request, res: Response) => {
		try {
			const id_news: number | undefined = Number(req.params.id);
			const news = newsService.updateNewsService(req.body, id_news);
			res.status(200).json(news);
		} catch (error) {
			res.status(400).json({ message: `${error}` });
		}
	}
);

router.post(
	"/delete/:id",
	authMiddleware,
	async (req: Request, res: Response) => {
		try {
			const id_news: number | undefined = Number(req.params.id);
			const news = newsService.deleteNewsService(id_news);
			res.status(202).json(news);
		} catch (error) {
			res.status(400).json({ message: `${error}` });
		}
	}
);

export const newsRouter = router;
