import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "black",
  accent: "orange",
  secondary: "#303030"
};
export const GlobalStyles = createGlobalStyle`
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    box-sizing:border-box;
  }`;
export const FeedDiv = styled.div``;
export const ArticleLayout = styled.article``;
export const SavedArticles = styled.div``;
export const MediaCard = styled.div``;
export const LogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 10vw 0 10vw;
  text-align: left;
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
export const NavBarLayout = styled.div`
  position: fixed;
  margin-left: 85%;
  box-sizing: border-box;
  font-size: 0.7em;
  background-color: white;
  text-align: left;


  .navlinks {
    position: relative;
    top: 0%;
    left: 50%;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    text-align: left;
    transition: 1s;
    background-color: white;
  }

  .hamburgerMenuContainer {
      margin-top:10%;
    position: relative;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  .hamburger,
  .hamburger::after,
  .hamburger::before {
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: black;
    z-index: 10;
    content: "";
    transition: 0.45s;
  }

//   .hamburger {
//     top: 45%;
//   }

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
  .navbar-elements-wrapper {
    width: 0%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .navbar-item {
        padding:0
      display: flex;
      flex-direction: row;
      flex-wrap: no-wrap;
      border: 1px solid black;
      a {
        display: flex;
        flex-direction: row;
        flex-wrap: no-wrap;

        img {
          width: 25px;
          height: 25px;
          margin-right: 10%;
        }
      }
    }
  }
`;
export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  p {
    width: 80%;
    color:${colors.secondary}
  }
  h1:first-of-type {
    padding-top: 10vh;
    font-size: 4em;
    color:${colors.primary}
  }
  h3{
      color:${colors.secondary}
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
  .stats-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3vh;
    p {
      width: 80%;
    }
  }
  .sub-stats-box {
    width: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      width: 100%;
    }
    strong {
      font-size: 1.5em;
      padding-top: 5%;
    }
    img {
      width: 75px;
    }
  }
  .register {
    padding-top: 3vh;
    button{
        border: 2px solid black;
        padding: 1% 10%;
        font-size: 1em;
        background-color:white;
        &:hover {
          color:white;
          background-color: black;
          align-self:center;
        }
    p {
    }
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

export const MainButton = styled.button`
    border: 2px solid black;
    padding: 5% 10%;
    font-size: 1em;
    &:hover {
      color:white;
      background-color: black;
    `;
