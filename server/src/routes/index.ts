import { Router, Request, Response } from "express";

const router = Router();

router.get("/sample", (req: Request, res: Response) => {
  console.log("sample")
  res.json({ message: "Neighbour Helper Backend is running 🚀" });
});
router.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello hello" });
});

export default router;
