import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.json({ message: "Welcome to Service Express.JS" })
);

export default router;
