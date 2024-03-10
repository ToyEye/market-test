import { useState } from "react";
import { useSelector } from "react-redux";

import Section from "/src/components/Section/Section";
import { getDrugList } from "/src/store/drugSlice/selectors";
import DrugCart from "./DrugCart/DrugCart";

import styled from "./DrugList.module.scss";

const DrugList = () => {
  const { drugList } = useSelector(getDrugList);

  const [sortBy, setSortBy] = useState("default");

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProducts = [...drugList];

  if (sortBy === "price-asc") {
    sortedProducts.sort(
      (a, b) => parseInt(a.price, 10) - parseInt(b.price, 10)
    );
  } else if (sortBy === "price-desc") {
    sortedProducts.sort(
      (a, b) => parseInt(b.price, 10) - parseInt(a.price, 10)
    );
  }

  return (
    <Section>
      <div className={styled.drugListWrapper}>
        <div>
          <label htmlFor="sortSelect">Sort by:</label>
          <select
            id="sortSelect"
            onChange={handleSortChange}
            className={styled.sortLabel}
          >
            <option value="default" className={styled.sortSelect}>
              Default
            </option>
            <option value="price-asc" className={styled.sortSelect}>
              Price: Low to High
            </option>
            <option value="price-desc" className={styled.sortSelect}>
              Price: High to Low
            </option>
          </select>
        </div>

        <ul className={styled.drugList}>
          {sortedProducts.length > 0 &&
            sortedProducts.map(({ image, name, _id, price }) => (
              <DrugCart
                key={_id}
                id={_id}
                name={name}
                image={image}
                price={price}
              />
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default DrugList;
