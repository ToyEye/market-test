import { Blocks } from "react-loader-spinner";
import styled from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styled.loaderWrapper}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
      />
    </div>
  );
};

export default Loader;
