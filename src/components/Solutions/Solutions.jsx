"use client";
import { getAllSolutions } from "@/service/product_service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllSolutions()
      .then((data) => {
        setSolutions(data);
        console.log("Fetched solutions:", data);
      })
      .catch((e) => console.log("Error fetching solutions:", e));
  }, []);

  return (
    <div className="px-8 py-12 bg-orange-50 mt-30">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#ED1A3A] via-[#ce4d12] to-orange-500 bg-clip-text text-transparent mb-4">
          Our Solutions
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover cutting-edge technologies designed to transform your business
        </p>
        <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {solutions.map((solution) => (
          <div key={solution._id} className="text-center">
            <Image
              height={200}
              width={200}
              src={solution.image?.url}
              alt={solution.name}
              onClick={() => router.push(`/solutions/${solution._id}`)}
              className="mx-auto cursor-pointer h-40 w-h-40 object-cover rounded-md shadow-sm"
            />
            <h2 className="mt-4 text-lg font-semibold">{solution.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
