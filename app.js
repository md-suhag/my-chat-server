import express from "express";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./config/db.js";

import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import adminRouter from "./routes/admin.route.js";

import { createUser } from "./seeders/user.js";
import {
  createGroupChats,
  createMessages,
  createMessagesInAChat,
  createSingleChats,
} from "./seeders/chat.js";

dotenv.config({
  path: "./.env",
});
connectDB();
// createUser(10);

// createSingleChats(10);
// createGroupChats(10);
// createMessagesInAChat("6743416ac45bb6ce86169c36", 50);
const port = process.env.PORT || 3000;
const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";
const adminSecretKey = process.env.ADMIN_SECRET_KEY || "DKJFDJFdjf";

const app = express();

// parser
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

// api endpoint
app.use("/user", userRouter);
app.use("/chat", chatRouter);
app.use("/admin", adminRouter);

// error handler
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export { envMode, adminSecretKey };
