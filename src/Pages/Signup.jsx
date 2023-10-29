import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import styled from "styled-components";

export const Signup = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };
  const handleAuth = async (e) => {
    e.preventDefault();
    let payload = {
      name: state.name,
      email: state.email,
      pass: state.pass
    };
    console.log(state);
    fetch("https://aggressive-cyan-crown.cyclic.app/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <DIV>
      <div className="login">
        <form onSubmit={handleAuth}>
          <h1>Sign In</h1>
          <input
            type="text"
            name="name"
            placeholder="Username"
            value={state.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="pass"
            placeholder="Password"
            value={state.pass}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
          <p>
            Have an account?<Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </DIV>
  );
};

// font-family: 'Nunito Sans', sans-serif;
// font-family: 'Oswald', sans-serif;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,400&family=Oswald:wght@500&display=swap");

  .login {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(41, 37, 37, 0.05);
    margin: auto;
    padding: 100px;
  }
  .login > form {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    font-family: "Nunito Sans";
    padding: 50px 75px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .login > form > lable {
  }
  .login > form > input {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > select {
    padding: 5px 10px;
    font-size: 18px;
    margin-bottom: 10px;
  }
  .login > form > button {
    align-items: center;
    justify-content: center;
    background-color: black;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;
    margin: auto;
  }
  @media (max-width: 400px) {
    .login {
      margin: auto;
      padding: 10px;
    }
    .login > form {
      width: 90%;
      padding: 50px 10px;
    }
  }
`;
