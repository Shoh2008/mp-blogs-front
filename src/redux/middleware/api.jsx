import axios from "axios";

const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type !== "api/apiCall") {
      next(action);
      return;
    }
    const { url, method, data, onSuccess } = action.payload;
    axios({
      baseURL: "https://mp-blogs-api-production.up.railway.app",
      url,
      method,
      data,
    }).then((res) => {
      dispatch({
        type: onSuccess,
        payload: res.data,
      });
    });
  };

export default api;
