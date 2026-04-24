import type { Job } from "bullmq";
import { Worker } from "bullmq";

import redisConnection from "../config/redisConfig.js";
import SampleJob from "../jobs/SampleJob.js";

export default function SampleWorker(queueName: string) {
  new Worker(
    queueName,
    async (job: Job) => {
      console.log("Sample job worker kicking", job);
      if (job.name === "SampleJob") {
        const sampleJobInstance = new SampleJob(job.data);
        sampleJobInstance.handle(job);
        return true;
      }
    },
    {
      connection: redisConnection,
    },
  );
}
