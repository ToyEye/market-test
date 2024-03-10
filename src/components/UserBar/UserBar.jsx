import { useDispatch } from "react-redux";
import { logout } from "/src/store/authSlice/authSlice";
import { useAuth } from "/src/hooks/useAuth";
import styled from "./UserBar.module.scss";

const UserBar = () => {
  const { user } = useAuth();
  const dispath = useDispatch();

  const onClick = () => {
    dispath(logout());
  };
  return (
    <div className={styled.userbarWrapper}>
      <p>Hello {user.name}</p>
      <button type="button" onClick={onClick} className={styled.button}>
        Logout
      </button>
    </div>
  );
};

export default UserBar;
