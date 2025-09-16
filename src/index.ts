import express from "express";
import ratingRouter from "./routes/rating";
import cors from "cors";
import userRoutes from "./routes/userRoutes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.use("/v1/users", userRoutes);
app.use("/v1/movies", ratingRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
