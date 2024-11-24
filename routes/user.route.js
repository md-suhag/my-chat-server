import express from "express";
import {
  getMyProfile,
  login,
  logout,
  newUser,
  searchUser,
} from "../controllers/user.controller.js";
import { singleAvatar } from "../middlewares/multer.js";
import { isAuthenticated } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/new", singleAvatar, newUser);
userRouter.post("/login", login);

// After here user must be logged in to access the routes
userRouter.use(isAuthenticated);
userRouter.get("/me", getMyProfile);
userRouter.get("/logout", logout);
userRouter.get("/search", searchUser);

export default userRouter;
