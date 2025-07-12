import SolarById from "@/components/Solar/SolarById";

export default async function SolarDetailPage({ params }) {
  const { id } = await params;
  return (<SolarById id={id} />);
}
