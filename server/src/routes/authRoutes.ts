import { Request, Response, Router } from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Example protected route: GET /api/me
router.get("/me", protect, (req, res) => {
  // req.userDoc set in middleware
  res.json({ user: (req as any).userDoc });
});

export default router;
