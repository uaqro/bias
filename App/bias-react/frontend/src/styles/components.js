import styled, { createGlobalStyle } from "styled-components";
import { animated } from "react-spring";

export const colors = {
  primary: "black",
  accent: "orange",
  secondary: "#303030",
  gray: "#fff"
};

export const toggle = {
  width: "1em",
  height: "1em",
  marginRight: 10,
  cursor: "pointer",
  verticalAlign: "middle"
};
export const GlobalStyles = createGlobalStyle`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    box-sizing:border-box;
  }`;

export const Myh3 = styled.h3`
  font-family: "Old Standard TT", serif;
  margin: 6px 0;
`;

export const Myhr = styled.hr`
  border-color: ${colors.gray};
  width: 80%;
  opacity: 60%;
`;

export const FeedDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 5vh 5vw;
  h1 {
    padding-top: 3vh;
    padding-bottom: 0.5vh;
    border-bottom: 1px solid black;
  }
  input {
    border-style: none;
    border-bottom: 1px solid ${colors.secondary};
    &:focus {
      outline: none;
    }
    font-size: 1.1em;
    margin-bottom: 5%;
  }
`;
export const ArticleLayout = styled.article`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 0 5%;
  img{
    padding-top: 10%;
    width: 25px;
    height: 25px;
  }
  .article-head {
    display: flex;
    flex-direction: row;
    wrap: no-wrap;
    & > h1 {
      padding-top: 1vh;
      padding-bottom: 0;
      width: 90%;
      border-bottom: none;
      text-decoration: underline;
    }
  }
  input {
    margin-right: 2%;
  }
  .fonts-wrapper{
    padding-bottom: 5%;
    box-sizing:border-box;
    border-bottom: 1px solid black;
    width: 50%;
  }
  button {
    padding: 1% 3%;
    border: 1px solid black;
    &:hover {
      color:white;
      background-color: black;
  }
  
`;
export const SavedArticles = styled.div``;
export const MediaCard = styled.div`
  border: 1px solid ${colors.primary};
  padding: 0 10vw;
  text-align: left;
  .media-card-header {
    display: flex;
    flex-direction: row;
    img {
      width: 25%;
      height: 50px;
      margin-left: 5%;
    }
    h1 {
      margin: 0;
    }
  }
`;
export const LogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10vh 10vw 0 10vw;
  text-align: left;
  h1 {
    border-bottom: 1px solid black;
    padding-bottom: 1vh;
  }
  p {
    display: flex;
    text-align: center;
    align-self: center;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    text-align: left;
    tag {
      opacity: 50%;
      margin-bottom: 2%;
      font-size: 0.9em;
    }
    input {
      border-style: none;
      border-bottom: 1px solid ${colors.secondary};
      &:focus {
        outline: none;
      }
      font-size: 1.1em;
      margin-bottom: 5%;
    }
  }
`;

export const NavBarBox = styled.div`
  width: 100vw;
  height: 60px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const NavBarLayout = styled.div`
  padding: 0 6%;
  height: 90%;
  .nav-aligment{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .logo p{
    color: white;
    font-size: 2rem;
  }
  img{
    width: 25px;
    height: 25px;
  }
  .navlinks {
    position:relative;
    top: 0%;
    left: 50%;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    text-align: left;
    transition: 1s;
    background-color: white;
    h1{
      margin-left:5%;
      text-decoration: underline;
      color:${colors.primary};
    }
  }

  .hamburgerMenuContainer {
    margin: 0;
    position: relative;
    width: 35px;
    height: 35px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .hamburger,
  .hamburger::after,
  .hamburger::before {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    z-index: 5;
    content: '';
    transition: 0.45s;
    display: flex;
    flex-direction: column;
  }

  .hamburger {
    top: 45%;
  }

  .hamburger::before {
    top: -200%;
  }

  .hamburger::after {
    top: 200%;
  }

  .hamburger.animate {
    background-color: rgba(0, 0, 0, 0);
  }

  .hamburger.animate::before {
    transform: rotate(-45deg);
    transform-origin: 29px;
  }

  .hamburger.animate::after {
    transform: rotate(45deg);
    transform-origin: 29px;
  }

  .hide {
    visibility: hidden;
  }
  .top-items{
    display:flex;
    flex-direction:column;
    width:100%;
  }
  .navbar-item {
    margin-left: 5%;
    a{
      text-decoration:none;
      color:${colors.secondary}
      display:flex;
      flex-direction:row;
      flex-wrap: no-wrap;
    }
    img{
      padding-top: 3%;
      margin-right: 5%;
    }

}
`;

export const H2styled = styled.h2`
  font-size: 1rem;
  color: white;
  background-color: black;
  padding: 4px 10px;
  text-align: left;
  display: inline-block;
  text-transform: uppercase;
`;

export const H2styledInversed = styled.h2`
  font-size: 1rem;
  color: black;
  background-color: white;
  border: 2px black solid;
  padding: 4px 10px;
  text-align: left;
  display: inline-block;
  text-transform: uppercase;
`;

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    margin-top: 20%;
  }
  .home-sections {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 20px 0 50px 0;
      width: 64%;
      color: ${colors.secondary};
    }
  }
  .stats-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    p {
      margin: 0;
      width: 80%;
    }
  }

  .why-box {
    margin-top: 40px !important;
  }

  .sub-stats-box {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    p {
      width: 80%;
    }
    img {
      width: 75px;
    }
  }
  h1:first-of-type {
    padding-top: 10vh;
    font-size: 4em;
    color: ${colors.primary};
  }
  h3 {
    color: ${colors.secondary};
  }
  h1 {
    font-size: 2.5em;
  }
  h1: first-of-type {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid orange; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.1em; /* Adjust as needed */
    animation: typing 3s steps(10, end), blink-caret 0.75s step-end infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 40%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: black;
    }
  }

  h3 {
    font-size: 2em;
  }
  .register {
    padding-top: 3vh;
  }
`;

export const PrimaryButton = styled.button`
  border: 2px solid black;
  padding: 6% 8%;
  font-size: 1em;
  color: white;
  background-color: black;
  width: 100%;
  &:hover {
    color: black;
    background-color: white;
  }
`;

export const SignUpTag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 10vw 0 10vw;
  
  h1 {
    text-align: left;
    align-items: flex-start;
  }
  hr {
    border: 3px solid black:
  }
  .both-sides {
    display: flex;
    flex-direction: column;
  }
  .privacy-alert {
    width: 80%;
    text-align: left;
  }
  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align:left;
    form {
      display: flex;
      width: 100%;
      flex-direction: column;
      text-align: left;
      tag{
          opacity: 50%;
          margin-bottom: 2%;
          font-size: 0.9em;
      }
      input{
        border-style:none;
        border-bottom: 1px solid ${colors.secondary};
        &:focus{
          outline:none;
        }
        font-size: 1.1em;
        margin-bottom: 5%;
      }
    }
  
  }

  tag {
    padding-bottom: 2vh;
  }
  input {
    border-radius: ;
  }
`;

export const btncustom = {
  btnWidth: "250px !default",
  btnHeight: "80px !default",
  btnFull: "btnHeight+$btnWidth !default",
  btnHalf: "btnFull/2 !default",
  bgColor: "#eeeeee !default",
  btncolordark: "shade(${btnColor}, 40%)"
};

export const MainButton = styled.button`
  border: 2px solid black;
  padding: 5% 10%;
  font-size: 1em;
  ${btncustom.bgColor}: random-color(
    $max: 200
  );
  color: tint(${btncustom.btnColor};

  &:before,
  &:after {
    content: "";
    @include absolute(0, 0, 0, 0);
  }

  &:before {
    right: -50px;
    border-right: 50px solid transparent;
    border-bottom: ${btncustom.btnHeight} solid ${btncustom.btncolordark};
    transform: translateX(-100%);
  }

  &:after {
    left: -50px;
    border-left: 50px solid transparent;
    border-top: ${btncustom.btnHeight} solid ${btncustom.btncolordark};
    transform: translateX(100%);
  }

  &:hover {
    color: tint(${btncustom.btnColor}, 75%);

    &:before {
      transform: translateX(-49%);
    }
    &:after {
      transform: translateX(49%);
    }
  }
`;
export const Frame = styled("div")`
  position: relative;
  padding: 4px 0px 0px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  vertical-align: middle;
  color: ${colors.secondary};
  fill: ${colors.secondary};
  p {
    color: ${colors.secondary} important!;
  }
    a {
      border: 1px solid white;
      color: ${colors.secondary};
      text-decoration: none;
      display: block;
    }
  }
`;
export const Title = styled("span")`
  vertical-align: middle;
`;

export const Content = styled(animated.div)`
  will-change: transform, opacity, height;
  margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden;
`;
