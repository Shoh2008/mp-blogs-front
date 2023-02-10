import { configureStore } from "@reduxjs/toolkit";
import users from "../redux/reducer/users";
import blogs from "../redux/reducer/blogs";
import api from "./middleware/api";

export default configureStore({
  reducer: { users, blogs },
  middleware: [api],
});
