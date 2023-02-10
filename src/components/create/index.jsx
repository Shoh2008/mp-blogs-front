import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Block } from "./style";
import { getUsers } from "../../redux/reducer/users";
import { Button, Input } from "../../style";
import { useNavigate } from "react-router-dom";
import { postBlog } from "../../redux/reducer/blogs";
import axios from "axios";

function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [img, setimg] = useState("");
  const [audio, setaudio] = useState("");
  const [title, settitle] = useState("");
  const {
    users: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  function createBlog() {
    if (audio !== "") {
      if (audio !== "" && img === "") {
        const audioData = new FormData()
        Object.keys(audio).forEach(key => {
          audioData.append(audio.item(key).name, audio.item(key))
        })
        axios.post("http://localhost:3500/files", audioData).then((audioname => {
          dispatch(postBlog({ title: title, author: user.username, author_image: user.image, audio: audioname.data }))
          setaudio("")
          settitle("")
        }))
        navigate("/")
      }
      if (img !== "" && audio === "") {
        const imgData = new FormData()
        Object.keys(img).forEach(key => {
          imgData.append(img.item(key).name, img.item(key))
        })
        axios.post("http://localhost:3500/files", imgData).then((imgname => {
          dispatch(postBlog({ title: title, author: user.username, author_image: user.image, image: imgname.data }))
          setimg("")
          settitle("")
        }))
        navigate("/")
      }
      if (img !== "" && audio !== "") {
        const audioData = new FormData()
        Object.keys(audio).forEach(key => {
          audioData.append(audio.item(key).name, audio.item(key))
        })
        axios.post("http://localhost:3500/files", audioData).then((audioname => {
          const imgData = new FormData()
          Object.keys(img).forEach(key => {
            imgData.append(img.item(key).name, img.item(key))
          })
          axios.post("http://localhost:3500/files", imgData).then((imgname => {
            dispatch(postBlog({ title: title, author: user.username, author_image: user.image, image: imgname.data, audio: audioname.data }))
            setimg("")
            setaudio("")
            settitle("")
          }))
        }))
        navigate("/")
      }
      if (img === "" && audio === "") {
        dispatch(postBlog({ title: title, author: user.username, author_image: user.image }))
        navigate("/")
      }
    }
  }

  return (
    <Block>
      <div className="creater-blog">
        <label htmlFor="img" className="img">
          <img src={img ? URL.createObjectURL(img[0]) : ""} />
          <input type="file" className="img_inp" id="img" onChange={(e) => setimg((p) => e.target.files)} />
        </label>
        <div className="line">
          <audio src={audio ? URL.createObjectURL(audio[0]) : ""} controls></audio>
          <Input type="file" onChange={(e) => setaudio((p) => e.target.files)} placeholder="Upload Audio" />
        </div>
        <Input placeholder="Title" onChange={(e) => settitle((p) => e.target.value)} value={title} />
        <Button onClick={createBlog}>Create</Button>
      </div>
    </Block>
  );
}

export default Create;
