"use client";
import React, { createContext, useContext, useState } from "react";

const QueryContext = createContext();

export const useQuery = () => useContext(QueryContext);

export const QueryProvider = ({ children }) => {
  const [queryItems, setQueryItems] = useState([]);

  const addToQuery = (item) => {
    setQueryItems((prev) => {
      const existingItemIndex = prev.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prev];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    setQueryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const deleteQuery = (id)=>{
    setQueryItems(prev => prev.filter(item => item.id != id))
  }

  return (
    <QueryContext.Provider
      value={{ queryItems, addToQuery, updateQuantity, deleteQuery }}
    >
      {children}
    </QueryContext.Provider>
  );
};
