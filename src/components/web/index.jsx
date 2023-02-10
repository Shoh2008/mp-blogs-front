import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Block, Navbar, Blogs } from "./style";
import { getUsers, setUser } from "../../redux/reducer/users";
import { Button } from "../../style";
import { useNavigate } from "react-router-dom";
import { deleteBlog, getBlogs, setBlog } from "../../redux/reducer/blogs";

function Web() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    users: { user },
    blogs: { blogs },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getBlogs());
    if (!localStorage.getItem("mp_blog")) {
      navigate("/sign-up");
    }
  }, []);

  function edit() {
    dispatch(setUser(user));
    navigate("/editor");
  }

  function signIn() {
    navigate("/sign-in")
    localStorage.clear()
  }

  function editBlog(blog) {
    dispatch(setBlog(blog))
    navigate("/blog-editor")
  }

  function removeBlog(id) {
    dispatch(deleteBlog(id))
  }

  return (
    <Block>
      <Navbar>
        <div>
          <div className="image">
            <div className="img">
              {
                user.image ? <img src={"http://localhost:3500/files/" + user.image} /> : user?.username?.charAt(0)?.toUpperCase()
              }
            </div>
          </div>
          <h3>{user.username}</h3>
          <Button onClick={edit}><i className="bi bi-pen" /></Button>
        </div>
        <Button onClick={signIn}>Sign In</Button>
      </Navbar>
      <Blogs>
        {blogs?.map((item, index) => <div className="blog" key={index}>
          <div className="user">
            <div className="image">
              <div className="img">
                {
                  item.author_image ? <img src={"http://localhost:3500/files/" + item.author_image} /> : item?.author?.charAt(0)?.toUpperCase()
                }
              </div>
            </div>
            <h3>{item.author}</h3>
          </div>
          <div className="blog-img">
            {
              item.image ? <img src={"http://localhost:3500/files/" + item.image} /> : "🎃"
            }
          </div>
          <h3 className="title">{item.title}</h3>
          <div>
            <audio src={"http://localhost:3500/files/" + item.audio} controls></audio>
          </div>
          {
            item.author === user.username ? <div className="actions">
              <Button onClick={() => removeBlog(item.id)}>Delete</Button>
              <Button onClick={() => editBlog(item)}>Edit</Button>
            </div> : <div className="anime">
              <div>🎸</div>
            </div>
          }
        </div>)}

        <div className="creater-blog" onClick={() => navigate("/create")}>
          <i class="bi bi-patch-plus"></i>
        </div>
      </Blogs>
    </Block>
  );
}

export default Web;
