import { Request, Response } from "express";
import * as reviewService from "../services/reviewService";
import * as userService from "../services/userService";

export async function addReview(req: Request, res: Response) {
  const { anonymousId, movieId, rating, comment } = req.body;

  const user = await userService.findUserById(anonymousId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  await reviewService.createReview(user.id, movieId, rating, comment);
  res.json({ success: true });
}

export async function getReviews(req: Request, res: Response) {
  const { movieId } = req.params;
  const movieReviews = await reviewService.getMovieReviews(movieId ?? "");
  res.json(movieReviews);
}
