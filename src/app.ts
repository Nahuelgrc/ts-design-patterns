import express from "express";

import healthChecker from "./routes/healt";
import patterns from "./routes/patterns";

const app = express();

app.get("/status", async (_, res) => {
  return res.send("I am working!");
});

app.use("/health", healthChecker);
app.use("/patterns", patterns);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
