import { useSelector } from "react-redux";
import { getAuth } from "/src/store/authSlice/selector";

const UserBar = () => {
  const { user } = useSelector(getAuth);

  return (
    <div>
      <p>Hello {user.name}</p>
    </div>
  );
};

export default UserBar;
