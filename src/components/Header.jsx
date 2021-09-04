import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src="../img/logo.png" alt="" />
      </HeaderLeft>
      <HeaderRight>
        <ol>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ol>
        <Button>
          <a href="/Amit_Bhagat.pdf">Resume</a>
        </Button>
      </HeaderRight>
      {/* <i className="fas fa-bars"></i> */}
      <HeaderHamburger>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon style={{ color: "white" }} />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <a href="#about">About</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="#contact">Contact</a>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <a href="/Amit_Bhagat.pdf">Resume</a>
          </MenuItem>
        </Menu>
      </HeaderHamburger>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 80px;
  margin: auto;
  position: fixed;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary);
  color: var(--secondary);
  font-family: "Share Tech Mono", monospace;
  font-size: 14px;
  z-index: 1;

  > i {
    display: none;
  }

  @media (max-width: 412px) {
    > i {
      display: block;
    }
  }
`;
const HeaderLeft = styled.div`
  > img {
    height: 38px;
    width: 38px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > ol {
    display: flex;
    margin: auto;
    list-style-position: inside;
    list-style-type: decimal-leading-zero;
  }

  > ol > li {
    padding: 12px;
  }

  > ol > li::marker {
    color: #f4e9cd;
  }

  > ol > li > a {
    text-decoration: none;
    color: inherit;
  }

  > ol > li > a:hover {
    color: var(--highlight);
  }

  button {
    margin-left: 12px;
    text-transform: inherit !important;
    padding: 6px 10px;
    border: 1px solid var(--highlight);
    color: var(--highlight);
  }

  button:hover {
    background-color: rgba(244, 233, 205, 0.18);
  }

  a {
    text-decoration: none;
    color: var(--highlight);
  }

  @media (max-width: 412px) {
    display: none;
  }
`;

const HeaderHamburger = styled.div`
  display: none;
  @media (max-width: 412px) {
    display: block;
  }
`;
