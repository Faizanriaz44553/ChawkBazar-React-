import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const flashContext = createContext();

const FlashContextApi = ({ children }) => {
  const [FlashData, setFlashData] = useState([]);
  const ApiGet = async() => {
    try {
      let data = await axios.get("https://fakestoreapi.in/api/products");
      setFlashData(data?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ApiGet();
  }, []);

  
  return (
    <flashContext.Provider value={{FlashData}}>
        {children}
    </flashContext.Provider>
  );
};

export default FlashContextApi
