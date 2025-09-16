import { Router } from "express";
import * as reviewController from "../controllers/reviewController";

const router = Router();
router.post("/", reviewController.addReview);
router.get("/:movieId", reviewController.getReviews);

export default router;
