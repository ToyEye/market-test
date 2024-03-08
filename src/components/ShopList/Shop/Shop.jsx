import { useDispatch } from "react-redux";
import { getDrugs } from "/src/store/drugSlice/drugSlice";
import styled from "./Shop.module.scss";

const Shop = ({ id, name }) => {
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(getDrugs(id));
  };
  return (
    <li className={styled.shopCart}>
      <button
        className={styled.shopCartBtn}
        type="button"
        onClick={handleClick}
      >
        <span className={styled.shadow}></span>
        <span className={styled.edge}></span>
        <span className={`${styled.front} ${styled.text}`}> {name}</span>
      </button>
    </li>
  );
};

export default Shop;
