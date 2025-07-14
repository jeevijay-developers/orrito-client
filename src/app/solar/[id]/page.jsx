import SolarCategoryPage from "@/components/Solar/SolarCategoryPage";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  return (
    <div className="mt-48">
      <SolarCategoryPage id={id} />
    </div>
  );
};

export default page;
