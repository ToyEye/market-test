import { useDispatch } from "react-redux";
import { logout } from "/src/store/authSlice/authSlice";
import { useAuth } from "/src/hooks/useAuth";

const UserBar = () => {
  const { user } = useAuth();
  const dispath = useDispatch();

  const onClick = () => {
    dispath(logout());
  };
  return (
    <div>
      <p>Hello {user.name}</p>
      <button type="button" onClick={onClick}>
        Logout
      </button>
    </div>
  );
};

export default UserBar;
