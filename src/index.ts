import type { Express } from "express";
import express from "express";

import serverConfig from "./config/serverConfig.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import apiRouter from "./routes/index.js";
import SampleWorker from "./workers/SampleWorker.js";

const app: Express = express();

app.use("/api", apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at port ${String(serverConfig.PORT)}`);

  SampleWorker("SampleQueue");

  void sampleQueueProducer("SampleJob", {
    name: "Sanket",
    company: "Microsoft",
    position: "SDE 2 L61",
    location: "Remote | BLR | Noida",
  });
});
