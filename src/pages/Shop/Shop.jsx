import ShopList from "/src/components/ShopList/ShopList";
import DrugList from "/src/components/DrugList/DrugList";

import styled from "./Shop.module.scss";

const Shop = () => {
  return (
    <div className={styled.shopWrapper}>
      <ShopList />
      <DrugList />
    </div>
  );
};

export default Shop;
