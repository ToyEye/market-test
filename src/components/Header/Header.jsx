import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Container from "/src/components/Container/Container";
import AuthBar from "/src/components/AuthBar/AuthBar";
import UserBar from "/src/components/UserBar/UserBar";

import { getAuth } from "/src/store/authSlice/selector";

import styled from "./Header.module.scss";
import { routes } from "/src/routes";

const Header = () => {
  const { user } = useSelector(getAuth);

  return (
    <header>
      <Container>
        <div className={styled.headerWrapper}>
          <nav>
            <ul className={styled.navList}>
              <li>
                <NavLink to={routes.HOME} className={styled.navLink}>
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink to={routes.CART} className={styled.navLink}>
                  CART
                </NavLink>
              </li>
            </ul>
          </nav>
          {user ? <UserBar /> : <AuthBar />}
        </div>
      </Container>
    </header>
  );
};

export default Header;
