import express from "express";
import {
  acceptFriendRequest,
  getMyFriends,
  getMyNotifications,
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
  sendFriendRequest,
} from "../controllers/user.controller.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  acceptRequestValidator,
  loginValidator,
  registerValidator,
  sendRequestValidator,
  validateHandler,
} from "../lib/validators.js";

const userRouter = express.Router();

userRouter.post(
  "/new",
  singleAvatar,
  registerValidator(),
  validateHandler,
  newUser
);
userRouter.post("/login", loginValidator(), validateHandler, login);

// After here user must be logged in to access the routes
userRouter.use(isAuthenticated);

userRouter.get("/me", getMyProfile);
userRouter.get("/logout", logout);
userRouter.get("/search", searchUser);

userRouter.put(
  "/sendrequest",
  sendRequestValidator(),
  validateHandler,
  sendFriendRequest
);
userRouter.put(
  "/acceptrequest",
  acceptRequestValidator(),
  validateHandler,
  acceptFriendRequest
);

userRouter.get("/notifications", getMyNotifications);
userRouter.get("/friends", getMyFriends);
export default userRouter;
