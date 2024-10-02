import Router, { Request, Response } from "express";
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
router.post("/", async (req: Request, res: Response) => {
	try {
		const news = await newsService.postNewsService(req.body);
		res.status(201).json(news);
	} catch (error) {
		res.status(404).json({ message: `${error}` });
	}
});

export const newsRouter = router;
