"use client";

import React, { useState } from "react";
import { useQuery } from "@/context/QueryContext";
import { submitProductQuery } from "@/service/product_service";
import toast from "react-hot-toast";

const Cart = () => {
  const { queryItems, updateQuantity, deleteQuery } = useQuery();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (queryItems.length === 0) {
      toast.error("Your query cart is empty.");
      return;
    }

    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      await submitProductQuery({
        ...formData,
        products: queryItems.map(({ id, name }) => ({
          productId: id,
          productName: name,
        })),
      });

      toast.success("Your query has been submitted successfully.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("There was an error submitting your query.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Query Cart</h2>

      {queryItems.length === 0 ? (
        <p className="text-gray-500">No items in your query.</p>
      ) : (
        <>
          <div className="space-y-4">
            {queryItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border rounded"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    ₹{item.offerPrice} × {item.quantity} = ₹
                    {item.offerPrice * item.quantity}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === "") {
                        updateQuantity(item.id, "");
                      } else {
                        const num = parseInt(val);
                        if (!isNaN(num) && num >= 0) {
                          updateQuantity(item.id, num);
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
                    onClick={() => deleteQuery(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Query Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">Submit Your Query</h3>

            <input
              type="text"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange("name")}
              className="w-full border p-2 rounded"
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange("email")}
              className="w-full border p-2 rounded"
            />

            <input
              type="tel"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleChange("phone")}
              className="w-full border p-2 rounded"
              required
            />

            <textarea
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange("message")}
              className="w-full border p-2 rounded h-24"
              required
            />

            <button
              type="submit"
              disabled={submitting}
              className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Query"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
