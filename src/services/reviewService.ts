import { prisma } from "../prisma";

export async function createReview(userId: string, movieId: string, rating: number, comment: string) {
  return prisma.review.create({
    data: { userId, movieId, rating, comment },
  });
}

export async function getMovieReviews(movieId: string) {
  const reviews = await prisma.review.findMany({ where: { movieId } });
  const count = reviews.length;

  const averageScore = count
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / count
    : 0;

  return {
    movieId,
    count,
    averageScore,
    reviews,
  };
}
