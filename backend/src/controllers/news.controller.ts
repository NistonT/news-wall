import Router from "express";
import { NewsService } from "./news.service";

const router = Router();
const newsService = new NewsService();
