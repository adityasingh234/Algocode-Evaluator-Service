import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT ?? 3000);
const redisPort = Number(process.env.REDIS_PORT ?? 6379);

export default {
  PORT: port,
  REDIS_PORT: redisPort,
  REDIS_HOST: process.env.REDIS_HOST || "127.0.0.1",
};
