// import { z } from "zod"; //possibilidade
import * as dotenv from "dotenv";

dotenv.config();


dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "3000",
  DATABASE_URL: process.env.DATABASE_URL || "",
  POSTGRES_USER: process.env.POSTGRES_USER || "",
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "",
  POSTGRES_DB: process.env.POSTGRES_DB || ""
};