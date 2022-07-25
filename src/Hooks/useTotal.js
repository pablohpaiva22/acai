import React from "react";
import { GlobalContext } from "../GlobalContext";

const useTotal = () => {
  const [totalOrder, setTotalOrder] = React.useState(0);
  const { finalInfo } = React.useContext(GlobalContext);

  const getTotal = () => {
    if (finalInfo.length !== 0) {
      const getTotal = finalInfo
        .map((item) => {
          return item[3];
        })
        .reduce((acc, item) => {
          return acc + item;
        });

      setTotalOrder(getTotal);
    } else {
      setTotalOrder(0);
    }
  };

  return {
    setTotalOrder,
    totalOrder,
    getTotal,
  };
};

export default useTotal;
