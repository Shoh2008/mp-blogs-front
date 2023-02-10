import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../api-call";

const blogs = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    blog: {},
  },
  reducers: {
    getBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    postBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
    setKeyBlog: (state, action) => {
      state.blog = { ...state.blog, ...action.payload };
    },
    editBlog: (state, action) => {
      state.blogs.map((item) => {
        if (item.id === action.payload.id) {
          item = action.payload;
        }
      });
    },
    deleteBlog: (state, action) => {
      state.blogs.map((item, index) => {
        if (item.id === action.payload.id) {
          state.blogs.splice(index, 1);
        }
      });
    },
  },
});

export const getBlogs = () =>
  apiCall({
    url: "/blogs",
    method: "get",
    onSuccess: "blogs/getBlogs",
  });

export const postBlog = (data) =>
  apiCall({
    url: "/blogs",
    method: "post",
    onSuccess: "blogs/postBlog",
    data,
  });

export const editBlog = (data) =>
  apiCall({
    url: "/blogs/" + data.id,
    method: "put",
    onSuccess: "users/editBlog",
    data,
  });

export const deleteBlog = (data) =>
  apiCall({
    url: "/blogs/" + data,
    method: "delete",
    onSuccess: "blogs/deleteBlog",
    data,
  });

export const { setBlog, setKeyBlog } = blogs.actions
export default blogs.reducer;
