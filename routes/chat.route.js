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
import {
  addMemberValidator,
  chatIdValidator,
  newGroupValidator,
  removeMemberValidator,
  renameValidator,
  sendAttachmentsValidator,
  validateHandler,
} from "../lib/validators.js";

const chatRouter = express.Router();

// After here user must be logged in to access the routes
chatRouter.use(isAuthenticated);

chatRouter.post("/new", newGroupValidator, validateHandler, newGroupChat);
chatRouter.get("/my", getMyChats);
chatRouter.get("/my/groups", getMyGroups);
chatRouter.put("/addmembers", addMemberValidator, validateHandler, addMembers);
chatRouter.put(
  "/removemember",
  removeMemberValidator,
  validateHandler,
  removeMembers
);
chatRouter.delete("/leave/:id", chatIdValidator(), validateHandler, leaveGroup);
chatRouter.post(
  "/message",
  attachmentMulter,
  sendAttachmentsValidator(),
  validateHandler,
  sendAttachments
);

// Get Messages
chatRouter.get("/message/:id", chatIdValidator(), validateHandler, getMessages);

// Get Chat Details, rename,delete
chatRouter
  .route("/:id")
  .get(chatIdValidator(), validateHandler, getChatDetails)
  .put(renameValidator(), validateHandler, renameGroup)
  .delete(chatIdValidator(), validateHandler, deleteChat);

export default chatRouter;
