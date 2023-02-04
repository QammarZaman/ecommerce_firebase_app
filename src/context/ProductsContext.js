import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

const randomID = window.generateRandomId();

const initialState = [
  {
    id: randomID,
    title: "",
    price: "",
    description: "",
    category: {
      id: 5,
      name: "",
      image: "",
    },
    images: [],
  },
  // ...
];

const ProductsContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(initialState);
  const [pages, setPages] = useState(0);

  const dataLimit = 10;

  const fetchData = async () => {
    await fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((res) => {
        setAllProducts(res);
        setPages(Math.round(res.length / dataLimit));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ allProducts, pages, dataLimit }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
