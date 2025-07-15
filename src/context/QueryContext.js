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

  // Automatically sync to localStorage whenever queryItems changes
  useEffect(() => {
    localStorage.setItem("queryItems", JSON.stringify(queryItems));
  }, [queryItems]);

  const addToQuery = (item) => {
    setQueryItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);
      if (existingItemIndex != -1) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prev, item];
      }
    });
  };
  const checkQuery = (id) => {
    const index = queryItems.findIndex((i) => i.id === id);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  const updateQuantity = (id, newQuantity) => {
    setQueryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const deleteQuery = (id) => {
    setQueryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAllQuery = () => {
    setQueryItems([]);
  };

  return (
    <QueryContext.Provider
      value={{
        queryItems,
        addToQuery,
        updateQuantity,
        deleteQuery,
        deleteAllQuery,
        checkQuery,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};
