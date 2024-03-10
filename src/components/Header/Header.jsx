import { NavLink } from "react-router-dom";

import Container from "/src/components/Container/Container";
import AuthBar from "/src/components/AuthBar/AuthBar";
import UserBar from "/src/components/UserBar/UserBar";

import styled from "./Header.module.scss";
import { routes } from "/src/routes";
import { useAuth } from "/src/hooks/useAuth";

const Header = () => {
  const { user } = useAuth();

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
              </li>{" "}
              <li>
                <NavLink to={routes.HISTORY} className={styled.navLink}>
                  HISTORY
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
