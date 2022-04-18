import express from "express";
import { Movie, TV, Lights, BluRay } from "../classes/Movie";

const patterns = express.Router();

patterns.get("/facade", async (_, res) => {
  const bluray = new BluRay();
  const lights = new Lights();
  const tv = new TV();

  const movie = new Movie(tv, lights, bluray);

  movie.start();

  movie.stop();

  res.send("Facade pattern - Done");
});

export default patterns;
