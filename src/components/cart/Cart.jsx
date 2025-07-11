"use client";
import React, { useContext } from "react";
import { useQuery } from "@/context/QueryContext"; // use hook instead of direct useContext

const Cart = () => {
  const { queryItems, updateQuantity, deleteQuery } = useQuery();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Query Cart</h2>

      {queryItems.length === 0 ? (
        <p className="text-gray-500">No items in your query.</p>
      ) : (
        queryItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border-b"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                ₹{item.offerPrice} × {item.quantity} = ₹
                {item.offerPrice * item.quantity}
              </p>
            </div>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => {
                const value = e.target.value;

                if (value === "") {
                  updateQuantity(item.id, "");
                } else {
                  const parsed = parseInt(value);
                  if (!isNaN(parsed) && parsed >= 0) {
                    updateQuantity(item.id, parsed);
                  }
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "") {
                  updateQuantity(item.id, 1);
                }
              }}
              className="w-16 border rounded px-2 py-1 text-center"
            />
            <button
              className="ml-4 text-red-500 hover:text-red-700"
              onClick={() => deleteQuery(item.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
