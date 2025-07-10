import SolutionById from "@/components/Solutions/SolutionById";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = params;
  return (
    <div>
      <SolutionById id={id} />
    </div>
  );
}


