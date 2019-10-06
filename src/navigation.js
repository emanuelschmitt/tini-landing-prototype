import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const TopNavigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 1.5rem;
  z-index: 1000;
`;

export const Menu = styled.div`
  margin-left: auto;
  text-align: right;
`;

export const MenuGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Link = styled.a`
  color: white;
  display: block;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  /* &:before {
    content: "→";
    padding-right: 5px;
    font-size: 12px;
    text-decoration: none;
    display: inline-block;
  } */
`;

export const LogoContainer = styled.div`
  background: url("/tini-logo2.jpg") center no-repeat;
  background-size: contain;
  height: 50px;
  width: 100px;
`;

function Navigation() {
  return (
    <TopNavigation>
      <LogoContainer />
      <Menu>
        <MenuGroup>
          <RouterLink to="/dates">
            <Link>Dates</Link>
          </RouterLink>
          <RouterLink to="/">
            <Link>About</Link>
          </RouterLink>
          <Link>Booking</Link>
          <Link>Press</Link>
        </MenuGroup>
        <MenuGroup>
          <Link>Facebook</Link>
          <Link>Instagram</Link>
          <Link>Twitter</Link>
        </MenuGroup>
      </Menu>
    </TopNavigation>
  );
}

export default Navigation;
