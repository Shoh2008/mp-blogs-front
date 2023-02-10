import React, { useState } from "react";
import { Button, Input } from "../../style";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/reducer/users";

function SignIn() {
  const [user, setuser] = useState({});
  const {
    users: { users },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function submit() {
    if (user.username && user.password) {
      users.map((item) => {
        if (item.username === user.username || item.password === user.password) {
          localStorage.setItem("mp_blog", item.id);
          navigate("/");
        }
      });
    }
  }

  return (
    <Block>
      <Box>
        <h2>Sign In</h2>
        <Input
          placeholder="Name"
          onChange={(e) => setuser((p) => ({ ...p, username: e.target.value }))}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setuser((p) => ({ ...p, password: e.target.value }))}
        />
        <Button onClick={submit}>Sign In</Button>
      </Box>
    </Block>
  );
}

export default SignIn;
