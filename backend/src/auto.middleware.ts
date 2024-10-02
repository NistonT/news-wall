import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<void> => {
	const authHeader = req.headers.authorization;

	if (authHeader) {
		next();
	} else {
		res.status(401).json({
			message: "Доступ запрещен",
		});
	}
};
