import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    user: {},
    olduser: {},
  },
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
      action.payload.map((item) => {
        if (item.id === localStorage.getItem("mp_blog")) {
          state.user = item;
        }
      });
    },
    addUser: (state, action) => {
      localStorage.setItem("mp_blog", action.payload.id);
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      state.users.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
      });
    },
    setUser: (state, action) => {
      state.olduser = action.payload;
    },
    setKeyUser: (state, action) => {
      state.olduser = { ...state.olduser, ...action.payload };
    },
  },
});

export const getUsers = () =>
  apiCall({
    url: "/users",
    method: "get",
    onSuccess: "users/getUsers",
  });

export const addUser = (data) =>
  apiCall({
    url: "/users",
    method: "post",
    onSuccess: "users/addUser",
    data,
  });

export const editUser = (data) =>
  apiCall({
    url: "/users/" + data.id,
    method: "put",
    onSuccess: "users/editUser",
    data,
  });

export const { setUser, setKeyUser } = users.actions;
export default users.reducer;
