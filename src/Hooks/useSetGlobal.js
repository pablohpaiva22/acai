import React from "react";
import { GlobalContext } from "../GlobalContext";

const useSetGlobal = () => {
  const {
    setSize,
    setIncrement,
    setIncrementNameList,
    setSizeNameList,
    setTotal,
    setTotalSize,
    setTotalIncrement,
  } = React.useContext(GlobalContext);

  const resetNewItem = () => {
    setSize([]);
    setIncrement([]);
    setIncrementNameList("");
    setSizeNameList("");
    setTotal(0);
    setTotalSize(0);
    setTotalIncrement(0);
  };

  const setEditInfo = (target) => {
    setSize([target[0][1]]);
    setSizeNameList(target[0][1].size);

    setIncrement(target[0][2].map((item) => item));
    setIncrementNameList(target[0][2].map((item) => item.name));

    const totalSize = target[0][1].price;
    setTotalSize(totalSize);

    if (target[0][2].length !== 0) {
      const incremento = target[0][2]
        .map((item) => item.price)
        .reduce((acc, item) => {
          return acc + item;
        });

      setTotalIncrement(incremento);
      setTotal(totalSize + incremento);
    } else {
      const incremento = 0;
      setTotal(totalSize + incremento);
    }
  };

  return {
    resetNewItem,
    setEditInfo,
  };
};

export default useSetGlobal;
