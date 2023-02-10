import React from "react";
import { Route, Routes } from "react-router-dom";
import { Block } from "./style";
import Web from "./components/web";
import SignUp from "./components/sign-up";
import SignIn from "./components/sign-in";
import Editor from "./components/editor";
import BlogEditor from "./components/blog-editor";
import Create from "./components/create";

function App() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/blog-editor" element={<BlogEditor />} />
        <Route path="/create" element={<Create />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Block>
  );
}

export default App;
