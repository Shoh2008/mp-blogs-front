import React, { useState } from "react";
import { Button, Input } from "../../style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { editUser, getUsers, setKeyUser } from "../../redux/reducer/users";
import axios from "axios";

function Editor() {
  const [img, setimg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    users: { olduser }
  } = useSelector((state) => state);

  function submit() {
    if (olduser.username && olduser.lastname && olduser.password) {
      if (img !== "") {
        const formData = new FormData()

        Object.keys(img).forEach(key => {
          formData.append(img.item(key).name, img.item(key))
        })

        axios.post("https://mp-blogs-api.onrender.com/files", formData).then((res => dispatch(editUser({ ...olduser, image: res.data }))))
      } else {
        dispatch(editUser(olduser))
      }
      dispatch(getUsers())
      navigate("/");
    }
  }

  function edit(data) {
    dispatch(setKeyUser(data));
  };

  return (
    <Block>
      <Box>
        <h2>Editor</h2>
        <div className="image">
          <label className="img" htmlFor="file">
            {img !== "" ?
              <img src={URL.createObjectURL(img[0])} />
              : <img src={"https://mp-blogs-api.onrender.com/files/" + olduser.image} />}
          </label>
          {img !== "" ? <Button onClick={() => setimg("")}>Delete</Button> : ""}
        </div>
        <input
          type="file"
          id="file"
          className="file_inp"
          onChange={(e) => setimg(e.target.files)}
        />
        <Input
          placeholder="Name"
          value={olduser.username}
          onChange={(e) => edit({ username: e.target.value })}
        />
        <Input
          placeholder="Last Name"
          value={olduser.lastname}
          onChange={(e) => edit({ lastname: e.target.value })}
        />
        <Input
          placeholder="Password"
          value={olduser.password}
          onChange={(e) => edit({ password: e.target.value })}
        />
        <div>
          <Button onClick={() => navigate("/sign-in")} className="signinbtn">
            Sign In
          </Button>
          <Button onClick={submit}>Edit</Button>
        </div>
      </Box>
    </Block>
  );
}

export default Editor;
