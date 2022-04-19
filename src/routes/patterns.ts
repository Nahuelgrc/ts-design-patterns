import express from "express";
import PatternService from "../services/PatternService";

const patterns = express.Router();

patterns.get("/facade", async (_, res) => {
  const patternService = new PatternService();
  await patternService.facade();
  res.send("Facade pattern - Done");
});

patterns.get("/adapter", async (_, res) => {
  const patternService = new PatternService();
  await patternService.adapter();
  res.send("Adapter pattern - Done");
});

export default patterns;
