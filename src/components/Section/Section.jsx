import Container from "components/Container/Container";
import styled from "./Section.module.scss";

const Section = ({ children }) => {
  return (
    <div className={styled.section}>
      <Container>{children}</Container>
    </div>
  );
};

export default Section;
``;
