import { useSelector } from "react-redux";
import Section from "/src/components/Section/Section";
import { getDrugList } from "/src/store/drugSlice/selectors";
import DrugCart from "./DrugCart/DrugCart";
import styled from "./DrugList.module.scss";

const DrugList = () => {
  const { drugList } = useSelector(getDrugList);

  return (
    <Section>
      <div className={styled.drugListWrapper}>
        <ul className={styled.drugList}>
          {drugList.length > 0 &&
            drugList.map(({ image, name, _id }) => (
              <DrugCart key={_id} name={name} image={image} />
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default DrugList;
