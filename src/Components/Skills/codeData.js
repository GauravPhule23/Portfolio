const codeFiles = [
  {
    file: "server.js",
    language: "javascript",
    code: `import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    developer: "Gaurav Phule",
    stack: ["React","Node","MongoDB"]
  });
});

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(5000));
`
  },

  {
    file: "auth.js",
    language: "javascript",
    code: `import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );
};`
  },

  {
    file: "queue.js",
    language: "javascript",
    code: `import { Queue } from "bullmq";

export const emailQueue =
new Queue("emails",{
 connection:{
   host:"localhost",
   port:6379
 }
});`
  },

  {
    file: "redis.js",
    language: "javascript",
    code: `import Redis from "ioredis";

export const redis =
new Redis({
 host:"localhost",
 port:6379
});`
  },

  {
    file: "docker-compose.yml",
    language: "yaml",
    code: `version: "3"

services:
  redis:
    image: redis:latest

  api:
    build: .
    ports:
      - "5000:5000"
`
  }
];

export default codeFiles;