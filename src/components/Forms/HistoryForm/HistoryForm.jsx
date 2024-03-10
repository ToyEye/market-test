import { useState } from "react";
import Section from "/src/components/Section/Section";
import style from "./HistoryForm.module.scss";

const HistoryForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChage = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <Section>
      <form onSubmit={handleSubmit} className={style.formField}>
        <input type="email" onChange={handleChage} value={searchValue} />
        <button type="submit">Search</button>
      </form>
    </Section>
  );
};
export default HistoryForm;
