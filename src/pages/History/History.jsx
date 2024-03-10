import { useEffect, useState } from "react";
import HistoryForm from "/src/components/Forms/HistoryForm/HistoryForm";
import CartList from "/src/components/Lists/CartList/CartList";
import { getOrders } from "/src/api/api";
import { useAuth } from "/src/hooks/useAuth";

const History = () => {
  const { user } = useAuth();

  const [searchValue, setSearchValue] = useState(() => {
    return user ? user.email : "";
  });

  const [orders, setOrders] = useState(null);

  const handleSubmit = (value) => {
    setSearchValue(value);
  };

  useEffect(() => {
    if (!searchValue) return;

    const getData = async () => {
      const resp = await getOrders(searchValue);
      setOrders(resp);
    };
    getData();
  }, [searchValue]);

  return (
    <div>
      {!user && <HistoryForm onSubmit={handleSubmit} />}
      {orders && <CartList cartList={orders} type="history" />}
    </div>
  );
};

export default History;
