"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
  const [queryItems, setQueryItems] = useState([]);

  // Load from localStorage once on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("queryItems");
    if (storedItems) {
      setQueryItems(JSON.parse(storedItems));
    }
  }, []);

  // Helper to update localStorage
  const syncToLocalStorage = (items) => {
    localStorage.setItem("queryItems", JSON.stringify(items));
  };

  const addToQuery = (item) => {
    console.log("item", item);
    setQueryItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);
      let updatedItems;
      if (existingItemIndex !== -1) {
        updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += item.quantity;
      } else {
        updatedItems = [...prev, item];
      }
      syncToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setQueryItems((prev) => {
      const updatedItems = prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );
      syncToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const deleteQuery = (id) => {
    setQueryItems((prev) => {
      const updatedItems = prev.filter((item) => item.id !== id);
      syncToLocalStorage(updatedItems);
      return updatedItems;
    });
  };
const deleteAllQuery = () => {
  setQueryItems([]);
  syncToLocalStorage([]);
};
  return (
    <QueryContext.Provider
      value={{
        queryItems,
        addToQuery,
        updateQuantity,
        deleteQuery,
        deleteAllQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};
