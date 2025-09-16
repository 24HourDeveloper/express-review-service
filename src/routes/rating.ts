import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { PrismaClient } from "@prisma/client";

const router = Router();

const prisma = new PrismaClient();

router.post("/register", async (reg: Request, res: Response) => {
  const anonymousId = uuidv4();
  const user = await prisma.user.create({ data: {
    id: anonymousId
  } });
  res.json({ id: user.id });
});

router.post("/reviews", async (req, res) => {
  const { anonymousId, movieId, rating, comment } = req.body;

  const user = await prisma.user.findUnique({ where:{
    id: anonymousId
  }});

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  await prisma.review.create({
    data: {
      comment,
      movieId,
      userId: user.id,
      rating
    }
  });

  res.json({ success: true });
});

router.get("/reviews/:movieId", async (req, res) => {
  const { movieId } = req.params;

  const movieReviews = await prisma.review.findMany({
    where: {
      movieId
    }
  });

  res.json({
    movieId: movieReviews[0]?.movieId,
    count: movieReviews.length,
    averageScore: movieReviews.reduce((review, currentReview) => {
      return review + currentReview.rating
    },0) / movieReviews.length,
    reviews: movieReviews
  });
});

export default router;
