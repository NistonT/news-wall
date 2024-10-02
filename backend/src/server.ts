import { PrismaClient } from "@prisma/client"
import dotenv from "dotenv"
import express, { Request, Response } from "express"

// active
dotenv.config();

// PORT SERVER
const PORT = process.env.PORT;
const app = express();
const prisma = new PrismaClient();

// main function
async function main() {
	app.use(express.json());

	app.use("/api", (req: Request, res: Response) => {
		res.status(202).json({ message: "success" });
	});

	app.listen(PORT || 5555, () => {
		console.log(`Server online is port - ${PORT}`);
	});
}

// activate main + active prisma
main()
	.then(async () => {
		await prisma.$connect();
	})
	.catch(async error => {
		console.error(error);
		await prisma.$disconnect();
		process.exit(1);
	});
