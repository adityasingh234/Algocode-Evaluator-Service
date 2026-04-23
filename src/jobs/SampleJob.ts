import type { Job } from "bullmq";

import type { IJob } from "../types/bullMqJobDefinition.js";

class SampleJob implements IJob {
  name: string;
  payload?: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle = (): void => {
    console.log("Handler of the job called");
  };

  failed = (job?: Job): void => {
    console.log("Job failed", job?.id);
    if (job) {
      console.log(job.id);
    }
  };
}
