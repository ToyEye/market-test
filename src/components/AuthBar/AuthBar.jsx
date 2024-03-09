import { NavLink } from "react-router-dom";
import { routes } from "/src/routes";

import styled from "./AuthBar.module.scss";

const AuthBar = () => {
  return (
    <ul className={styled.authList}>
      <li>
        <NavLink to={routes.LOGIN} className={styled.authLink}>
          LOGIN
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.SIGNUP} className={styled.authLink}>
          SINGUP
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthBar;
