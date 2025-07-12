import SolutionById from "@/components/Solutions/SolutionById";

export default async function SolutionDetailPage({ params }) {
  const { id } = await params;
  return (<SolutionById id={id} />);
}
  