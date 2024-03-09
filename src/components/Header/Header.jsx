import { NavLink } from "react-router-dom";
import Container from "/src/components/Container/Container";
import AuthBar from "/src/components/AuthBar/AuthBar";

import styled from "./Header.module.scss";
import { routes } from "/src/routes";

const Header = () => {
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

          <AuthBar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
