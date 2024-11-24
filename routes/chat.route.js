import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  addMembers,
  deleteChat,
  getChatDetails,
  getMessages,
  getMyChats,
  getMyGroups,
  leaveGroup,
  newGroupChat,
  removeMembers,
  renameGroup,
  sendAttachments,
} from "../controllers/chat.controller.js";
import { attachmentMulter } from "../middlewares/multer.js";

const chatRouter = express.Router();

// After here user must be logged in to access the routes
chatRouter.use(isAuthenticated);
chatRouter.post("/new", newGroupChat);
chatRouter.get("/my", getMyChats);
chatRouter.get("/my/groups", getMyGroups);
chatRouter.put("/addmembers", addMembers);
chatRouter.put("/removemember", removeMembers);
chatRouter.delete("/leave/:id", leaveGroup);
chatRouter.post("/message", attachmentMulter, sendAttachments);

// Get Messages
chatRouter.get("/message/:id", getMessages);

// Get Chat Details, rename,delete
chatRouter
  .route("/:id")
  .get(getChatDetails)
  .put(renameGroup)
  .delete(deleteChat);

export default chatRouter;
