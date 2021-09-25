import React from "react";

import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="tesla" />
      </a>
      <Menu>
        <a>Model S</a>

        <a>Model 3</a>

        <a>Model X</a>

        <a>Model Y</a>
      </Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Tesla Account</a>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
