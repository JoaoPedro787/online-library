import { createContext, useEffect } from "react";
import AxiosHook from "../../../hooks/axios-interception";

const BookGenrerContext = createContext({});

const BookGenrerProvider = ({ children }) => {
  const { getItems, response, isLoading } = AxiosHook();
  useEffect(() => {
    getItems("book/category/", "get");
  }, []);

  return (
    <BookGenrerContext.Provider value={{ response, isLoading }}>
      {children}
    </BookGenrerContext.Provider>
  );
};

export { BookGenrerProvider };
export default BookGenrerContext;
