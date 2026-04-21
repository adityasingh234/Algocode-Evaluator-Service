import type { Express } from "express";
import express from "express";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at port ${String(serverConfig.PORT)}`);
});
