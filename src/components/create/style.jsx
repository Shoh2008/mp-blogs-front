import styled from "styled-components";
import { theme } from "../../theme";

export const Block = styled.div`
  background: ${theme.black};
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .creater-blog {
    width: 300px;
    height: 480px !important;
    background: ${theme.dark};
    border-radius: 10px;
    padding: 20px;
    height: auto;
    border: ${theme.border};
    margin: 20px 0;
    .img {
      width: 100%;
      height: 150px;
      border-radius: 10px;
      border: ${theme.hr};
      margin-bottom: 20px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
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
    button, input {
      width: 100%;
      margin: 10px auto;
    }
    audio {
      width:255px;
    }
    .img_inp {
      display: none;
    }
  }
`;