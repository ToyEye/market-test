import clsx from "clsx";

import styled from "./Heading.module.scss";

const Heading = ({ text, tag, type }) => {
  const headingStyle = clsx(
    styled.heading,
    type === "primary" && styled.primary,
    type === "price" && styled.price
  );

  const Tag = tag || "h2";
  return <Tag className={headingStyle}>{text}</Tag>;
};

export default Heading;
