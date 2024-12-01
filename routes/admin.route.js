import express from "express";
import { adminLoginValidator, validateHandler } from "../lib/validators.js";
import {
  adminLogin,
  adminLogout,
  allChats,
  allMessages,
  allUsers,
  getAdminData,
  getDashboardStats,
} from "../controllers/admin.controller.js";
import { adminOnly } from "../middlewares/auth.js";

const adminRouter = express.Router();

adminRouter.post("/verify", adminLoginValidator(), validateHandler, adminLogin);

adminRouter.get("/logout", adminLogout);

// Only Admin can access these routes

adminRouter.use(adminOnly);

adminRouter.get("/", getAdminData);

adminRouter.get("/users", allUsers);
adminRouter.get("/chats", allChats);
adminRouter.get("/messages", allMessages);

adminRouter.get("/stats", getDashboardStats);

export default adminRouter;
