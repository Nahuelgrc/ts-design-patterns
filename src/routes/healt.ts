import express from "express";

const healthChecker = express.Router();

healthChecker.get("/", async (_, res) => {
  return res.send("It's working!");
});

export default healthChecker;
