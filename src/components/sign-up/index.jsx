import React, { useState, useEffect } from "react";
import { Button, Input } from "../../style";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { addUser } from "../../redux/reducer/users";
import axios from "axios";

function SignUp() {
  const [user, setUser] = useState({});
  const [img, setimg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function submit() {
    if (user.username && user.lastname && user.password) {
      if (img !== "") {
        const formData = new FormData()
        Object.keys(img).forEach(key => {
          formData.append(img.item(key).name, img.item(key))
        })
        axios.post("http://localhost:3500/files", formData).then((res => {
          localStorage.setItem("mp_blog", "")
          dispatch(addUser({ ...user, image: res.data }))
          navigate("/");
          setUser({})
        }))
      } else {
        localStorage.setItem("mp_blog", "")
        dispatch(addUser(user))
        navigate("/");
        setUser({})
      }
    }
  }

  useEffect(() => {
    if (localStorage.getItem("mp_blog")) {
      navigate("/");
    }
  }, []);

  return (
    <Block>
      <Box>
        <h2>Sign Up</h2>
        <div className="image">
          <label className="img" htmlFor="file">
            {img !== "" ?
              <img src={URL.createObjectURL(img[0])} />
              : ""}
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
          value={user.username}
          onChange={(e) => setUser((p) => ({ ...p, username: e.target.value }))}
        />
        <Input
          placeholder="Last Name"
          value={user.lastname}
          onChange={(e) => setUser((p) => ({ ...p, lastname: e.target.value }))}
        />
        <Input
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser((p) => ({ ...p, password: e.target.value }))}
        />
        <div>
          <Button onClick={() => navigate("/sign-in")} className="signinbtn">
            Sign In
          </Button>
          <Button onClick={submit}>Sign Up</Button>
        </div>
      </Box>
    </Block>
  );
}

export default SignUp;
