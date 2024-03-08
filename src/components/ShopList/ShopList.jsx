import { useSelector } from "react-redux";
import Section from "/src/components/Section/Section";
import Heading from "/src/components/Heading/Heading";

import styled from "./ShopList.module.scss";

import { getShops } from "/src/store/shopSlice/selectors";

const ShopList = () => {
  const { shopList } = useSelector(getShops);
  console.log(shopList);
  return (
    <Section>
      <div className={styled.shopListWrapper}>
        <Heading tag="h2" text="Shops:" />
      </div>
    </Section>
  );
};

export default ShopList;
