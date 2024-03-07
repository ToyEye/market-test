import styled from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={styled.container}>{children}</div>;
};

export default Container;
