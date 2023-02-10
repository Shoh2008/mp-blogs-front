import React, { useEffect, useState } from "react";
import { Button, Input } from "../../style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Block, Box } from "./style";
import axios from "axios";
import { editBlog, getBlogs, setKeyBlog } from "../../redux/reducer/blogs";
import { getUsers } from "../../redux/reducer/users";

function BlogEditor() {
  const [img, setimg] = useState("");
  const [audio, setaudio] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    blogs: { blog },
    users: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getBlogs())
    dispatch(getUsers())
  }, [])

  function submit() {
    if (audio !== "") {
      const audioData = new FormData()
      Object.keys(audio).forEach(key => {
        audioData.append(audio.item(key).name, audio.item(key))
      })
      axios.post("https://mp-blogs-api-production.up.railway.app/files", audioData).then((audioname => {
        dispatch(editBlog({ ...blog, title: blog.title, audio: audioname.data, author: user.username, author_image: user.image }))
        setaudio("")
        setimg("")
      }))
      navigate("/")
    }
    if (img !== "") {
      const imgData = new FormData()
      Object.keys(img).forEach(key => {
        imgData.append(img.item(key).name, img.item(key))
      })
      axios.post("https://mp-blogs-api-production.up.railway.app/files", imgData).then((imgname => {
        dispatch(editBlog({ ...blog, title: blog.title, image: imgname.data, author: user.username, author_image: user.image }))
        setaudio("")
        setimg("")
      }))
      navigate("/")
    }
    if (img !== "" || audio !== "") {
      const imgData = new FormData()
      Object.keys(img).forEach(key => {
        imgData.append(img.item(key).name, img.item(key))
      })
      axios.post("https://mp-blogs-api-production.up.railway.app/files", imgData).then((imgname => {
        const audioData = new FormData()
        Object.keys(audio).forEach(key => {
          audioData.append(audio.item(key).name, audio.item(key))
        })
        axios.post("https://mp-blogs-api-production.up.railway.app/files", audioData).then((audioname => {
          dispatch(editBlog({ ...blog, title: blog.title, image: imgname.data, audio: audioname.data, author: user.username, author_image: user.image }))
          setaudio("")
          setimg("")
        }))
      }))
      navigate("/")
    }
    if (img === "" || audio === "") {
      dispatch(editBlog({ ...blog, author: user.username, author_image: user.image }))
      navigate("/")
    }
  }

  function edit(data) {
    dispatch(setKeyBlog(data));
  };

  return (
    <Block>
      <Box>
        <div className="creater-blog">
          <label htmlFor="img" className="img">
            {
              img !== "" ? <img src={img ? URL.createObjectURL(img[0]) : ""} /> :
                blog.image ? <img src={"https://mp-blogs-api-production.up.railway.app/files/" + blog.image} /> : blog?.title?.charAt(0)?.toUpperCase()
            }
            <input type="file" className="img_inp" id="img" onChange={(e) => setimg((p) => e.target.files)} />
          </label>
          <div className="line">
            {audio !== "" ? <audio src={audio ? URL.createObjectURL(audio[0]) : ""} controls></audio> :
              <audio src={"https://mp-blogs-api-production.up.railway.app/files/" + blog.audio} controls></audio>}
            <Input type="file" onChange={(e) => setaudio((p) => e.target.files)} placeholder="Upload Audio" />
          </div>
          <Input placeholder="Title" onChange={(e) => edit({ title: e.target.value })} value={blog.title} />
          <Button onClick={submit}>Edit Blog</Button>
        </div>
      </Box>
    </Block>
  );
}

export default BlogEditor;
