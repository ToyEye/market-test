import ShopList from "/src/components/Lists/ShopList/ShopList";
import DrugList from "/src/components/Lists/DrugList/DrugList";

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
