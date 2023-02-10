import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  background: ${theme.black};
  height: 100vh;
  width: 100%;
  display: block;
`;

export const Navbar = styled.div`
  height: 80px;
  width: 100%;
  background: ${theme.dark};
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  border-bottom: ${theme.hr};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      height: 40px;
      width: 40px;
      padding: 5px 10px;
      margin-left: 10px;
      border-radius: 50%;
    }
  }
  .image {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 50px;
    .img {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      border: ${theme.border};
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        width: auto;
        height: 70px;
      }
    }
  }
  h3 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-left: 10px;
  }
  @media screen and (max-width: 650px) {}
`;

export const Blogs = styled.div`
  height: calc(100vh - 70px);
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  scroll-behavior: smooth;
  overflow: scroll;
  &::-webkit-scrollbar {
    height: 0;
    width: 5px;
    background: ${theme.scrollTrack};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${theme.scrollThumb};
  }
  .creater-blog {
    width: 300px;
    height: 480px !important;
    background: ${theme.dark};
    border-radius: 10px;
    padding: 20px;
    height: auto;
    border: ${theme.border};
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 100px;
    }
  }
  .blog {
    width: 300px;
    height: 480px !important;
    background: ${theme.dark};
    border-radius: 10px;
    padding: 20px;
    height: auto;
    border: ${theme.border};
    margin: 20px 0;
    .user {
      display: flex;
      align-items: center;
      border-radius: 10px;
      margin-bottom: 20px;
      .image {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 50px;
        .img {
          height: 70px;
          width: 70px;
          border-radius: 50%;
          border: ${theme.border};
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          img {
            width: auto;
            height: 70px;
          }
        }
      }
      h3 {
        margin-left: 10px;
      }
    }
    h3 {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title {
      margin: 20px 0;
    }
    .blog-img {
      width: 100%;
      height: 150px;
      border-radius: 10px;
      border: ${theme.hr};
      margin-bottom: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      img {
        max-width: 100%;
        max-height: 150px;
      }
    }
    .audio {
      width: 100%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    audio {
      width: 255px;
    }
    .img_inp {
      display: none;
    }
    .actions {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 45%;
      }
    }
    .anime {
      margin-top: 30px;
      width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      div {
        height: 50px;
        width: 50px;
        border-radius: 5px;
        animation: box 3s infinite linear;
        transition: 1s;
        position: absolute;
        font-size: 30px;
        @keyframes box {
          0% {
            left: 0;
          }
          50% {
            left: 100%;
            transform: rotate(360deg);
            border-radius: 50%;
          }
          100% {
            left: 0;
          }
        }
      }
    }
  }
`;

