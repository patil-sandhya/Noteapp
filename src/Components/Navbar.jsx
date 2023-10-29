import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const [menu, setmenu] = useState(false);
    let user = localStorage.getItem("user");
  
  let userData;
  if (user) {
    userData = JSON.parse(user);
    console.log(userData.name);
  }

  const handelMenu = () => {
    setmenu((prev) => !prev);
  };

  const handleLogout = ()=>{
    localStorage.clear();
  }

  console.log(menu);
  return (
    <DIV>
      <div className="ham">
        <div className={`menu ${menu ? "active" : ""}`} onClick={handelMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav>
          <ul className={`nav-menu ${menu ? "active" : ""}`}>
        
             
            <li className="nav-links" onClick={handelMenu}>
              <Link to="/viewblog">View Notes</Link>
            </li>
            
         
             
              <li className="nav-links" onClick={handelMenu}>
              <Link to="/createblog">Create Notes</Link>
            </li>
                <li className="nav-links" onClick={handelMenu}>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li className="nav-links bag-number" onClick={handelMenu}>
                  <Link to="/login">Login</Link>
                </li>
            
            

            
          </ul>
        </nav>
        <div className="logo">
          <h1>
            <Link to={"/"}>Home Page</Link>
          </h1>
        </div>
      </div>
    </DIV>
  );
}

export default Navbar;

const DIV = styled.div`
  .ham {
    width: 100%;
    background-color: #292525;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: azure;
  }
  .logo {
    margin: 0 20px;
  }
  nav {
    margin: 0 20px;
  }
  .nav-menu {
    display: flex;
    gap: 60px;
  }
  .nav-links {
    list-style: none;
  }
  .nav-links a {
    text-decoration: none;
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  .menu {
    display: none;
    margin: 0 20px;
    cursor: pointer;
  }
  .bar {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .bag {
    display: none;
    margin: 0 20px;
    cursor: pointer;
  }

  @media (max-width: 780px) {
    .menu {
      display: block;
    }
    .menu.active .bar:nth-child(2) {
      opacity: 0;
    }
    .menu.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .menu.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
    .nav-menu {
      position: fixed;
      left: -120%;
      top: 60px;
      gap: 40px;
      flex-direction: column;
      background-color: #292525;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      z-index: 99;
    }
    .nav-links:last-child {
      padding-bottom: 40px;
    }
    .nav-menu.active {
      left: 0;
    }
    .bag {
      display: block;
    }
  }
`;
