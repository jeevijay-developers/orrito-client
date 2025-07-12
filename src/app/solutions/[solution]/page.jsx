import SolutionCategoryPage from "@/components/Solutions/SolutionCategoryPage";

export default async function Page({ params }) {
  const { solution } = await params;
  return (
    <div>
      <SolutionCategoryPage solution={solution} />
    </div>
  );
}