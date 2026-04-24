import type { Job } from "bullmq";

import type { IJob } from "../types/bullMqJobDefinition.js";

export default class SampleJob implements IJob {
  name: string;
  payload?: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle = (job?: Job): void => {
    console.log("Handler of the job called");
    console.log(this.payload);
    if (job) {
      console.log(job.name, job.id, job.data);
    }
  };

  failed = (job?: Job): void => {
    console.log("Job failed", job?.id);
    if (job) {
      console.log(job.id);
    }
  };
}

// You create a todo item → that’s a job
// You put it in a queue (list)
// A worker picks it up and does it
