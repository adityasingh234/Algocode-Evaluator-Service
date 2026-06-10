import express, { type Express } from "express";
import bodyParser from "body-parser";

import {
  bullBoardBasePath,
  bullBoardServerAdapter,
} from "./config/bullBoard.js";
import serverConfig from "./config/serverConfig.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import apiRouter from "./routes/index.js";
import SampleWorker from "./workers/SampleWorker.js";

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);
app.use(bullBoardBasePath, bullBoardServerAdapter.getRouter());

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at port ${String(serverConfig.PORT)}`);

  SampleWorker("SampleQueue");

  void sampleQueueProducer("SampleJob", {
    name: "Sanket",
    company: "Microsoft",
    position: "SDE 2 L61",
    location: "Remote | BLR | Noida",
  });

  void sampleQueueProducer("SampleJob", {
    name: "Rajat",
    company: "Google",
    position: "SDE 3 L71",
    location: "Remote | NYC | SF",
  });
});
