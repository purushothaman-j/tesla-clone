import React, { useState } from "react";

import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";

import { selectCars } from "../features/car/carSlice";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="tesla" />
      </a>
      <Menu>{cars && cars.map((car, index) => <a key={index}>{car}</a>)}</Menu>
      <RightMenu>
        <a>Shop</a>
        <a>Tesla Account</a>
        <CustomMenu onClick={() => setShowMenu(true)} />
      </RightMenu>

      <BurgerNav showMenu={showMenu} onClick={() => setShowMenu(false)}>
        <CloseWrapper>
          <CustomClose />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li>
              <a key={index}>{car}</a>
            </li>
          ))}
        <li>
          <a>Existing Inventory</a>
        </li>
        <li>
          <a>Used Inventory</a>
        </li>
        <li>
          <a>Trade-in</a>
        </li>
        <li>
          <a>Roadster</a>
        </li>
        <li>
          <a>Cybertruck</a>
        </li>
        <li>
          <a>Semi</a>
        </li>
        <li>
          <a>Charging</a>
        </li>
        <li>
          <a>Power</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
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

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) =>
    props.showMenu ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.3s;
  text-align: start;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
