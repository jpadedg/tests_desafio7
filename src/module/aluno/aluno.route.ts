import express, { Request, Response } from "express";
import { getAll, store } from "./aluno.model";

const router = express.Router();

router.get("/", async (_: Request, res: Response) => {
  const data = await getAll();
  return res.status(200).json({ data });
});

router.post("/", async (req: Request, res: Response) => {
  const data = await store(req.body);
  return res.status(200).json({ data });
});

export default router;