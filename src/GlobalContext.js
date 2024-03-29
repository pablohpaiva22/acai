import React from "react";
import { sizeList_DB, IncrementList_DB } from "./Components/NewItem/database";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [size, setSize] = React.useState([]);
  const [totalSize, setTotalSize] = React.useState(0);
  const [increment, setIncrement] = React.useState([]);
  const [totalIncrement, setTotalIncrement] = React.useState(0);
  const [incrementNameList, setIncrementNameList] = React.useState("");
  const [sizeNameList, setSizeNameList] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [finalInfo, setFinalInfo] = React.useState([]);

  const showSize = (e) => {
    const TargetObject = sizeList_DB.filter((item) => {
      return item.size === e.target.innerText;
    });

    const size_DB = [];
    size_DB.push(...TargetObject);
    setSize(size_DB);

    setSizeNameList(size_DB[0].size);
    setTotalSize(size_DB[0].price);
    setTotal(size_DB[0].price + totalIncrement);
  };

  const showIncrement = (e) => {
    const TargetObject = IncrementList_DB.filter((item) => {
      return item.name === e.target.innerText;
    });

    const increment_DB = [];

    increment_DB.push(...increment);

    const targetName = TargetObject.map((item) => item.name).toString();
    const incrementNameList = increment.map((item) => item.name);

    if (incrementNameList.includes(targetName)) {
      const removeExistentItem = increment_DB.filter((item) => {
        return item.name !== targetName;
      });

      setIncrement(removeExistentItem);

      const FinalNameList = removeExistentItem.map((item) => item.name);

      setIncrementNameList(FinalNameList);

      const incrementTotal = removeExistentItem.map((item) => {
        return item.price;
      });

      let finalValue;

      if (incrementTotal.length === 0) {
        finalValue = 0;
      } else {
        finalValue = incrementTotal.reduce((acc, value) => {
          return acc + value;
        });
      }

      setTotalIncrement(finalValue);
      setTotal(finalValue + totalSize);
    } else {
      increment_DB.push(...TargetObject);

      setIncrement(increment_DB);

      const FinalNameList = increment_DB.map((item) => item.name);

      setIncrementNameList(FinalNameList);

      const incrementTotal = increment_DB.map((item) => {
        return item.price;
      });

      const finalValue = incrementTotal.reduce((acc, value) => {
        return acc + value;
      });

      setTotalIncrement(finalValue);
      setTotal(finalValue + totalSize);
    }
  };

  const createNewItem = (id) => {
    const edit = finalInfo.filter((item) => item[0] !== +id);

    const newItem_DB = [];
    newItem_DB.push([+id, ...size, increment, total]);
    const global_DB = [];
    global_DB.push(...edit, ...newItem_DB);

    global_DB.sort();

    setFinalInfo(global_DB);
  };

  return (
    <GlobalContext.Provider
      value={{
        size,
        setSize,
        showSize,
        setTotalSize,
        sizeNameList,
        setSizeNameList,
        increment,
        setIncrement,
        showIncrement,
        totalIncrement,
        setIncrementNameList,
        setTotalIncrement,
        incrementNameList,
        total,
        setTotal,
        createNewItem,
        finalInfo,
        setFinalInfo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
