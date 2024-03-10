import { useEffect, useState } from "react";
import HistoryForm from "/src/components/Forms/HistoryForm/HistoryForm";
import HistoryList from "/src/components/Lists/HistoryList/HistoryList";
import { getOrders } from "/src/api/api";

const History = () => {
  const [searchValue, setSearchValue] = useState("");
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
      <HistoryForm onSubmit={handleSubmit} />
      <HistoryList orders={orders} />
    </div>
  );
};

export default History;
