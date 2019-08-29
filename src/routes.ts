import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) =>
  res.json({
    code: 200,
    data: "Welcome to Service Express.JS",
    message: `response in host ${process.env.APP_HOST} successfully`
  })
);

export default router;
