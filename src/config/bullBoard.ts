import { createBullBoard } from "@bull-board/api";
import { BullMQAdapter } from "@bull-board/api/bullMQAdapter";
import { ExpressAdapter } from "@bull-board/express";

import sampleQueue from "../queues/sampleQueue.js";

const BASE_PATH = "/admin/queues";

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath(BASE_PATH);

createBullBoard({
  queues: [new BullMQAdapter(sampleQueue)],
  serverAdapter,
});

export { BASE_PATH as bullBoardBasePath, serverAdapter as bullBoardServerAdapter };

 