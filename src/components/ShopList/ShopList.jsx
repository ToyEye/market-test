import { useSelector } from "react-redux";
import Section from "/src/components/Section/Section";
import Heading from "/src/components/Heading/Heading";

import styled from "./ShopList.module.scss";

import { getShops } from "/src/store/shopSlice/selectors";
import Shop from "./Shop/Shop";

const ShopList = () => {
  const { shopList } = useSelector(getShops);

  return (
    <Section>
      <div className={styled.shopListWrapper}>
        <Heading tag="h2" text="Shops:" />

        <ul className={styled.cartList}>
          {shopList.length > 0 &&
            shopList.map(({ _id, name }) => (
              <Shop key={_id} id={_id} name={name} />
            ))}
        </ul>
      </div>
    </Section>
  );
};

export default ShopList;
