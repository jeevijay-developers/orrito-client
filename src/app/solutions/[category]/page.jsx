import SolutionCategoryPage from "@/components/Solutions/SolutionCategoryPage";

export default async function Page({ params }) {
  const { category } = await params;
  return (
    <div>
      <SolutionCategoryPage category={category} />
    </div>
  );
}