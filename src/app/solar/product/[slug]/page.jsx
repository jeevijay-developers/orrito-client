import SolarById from "@/components/Solar/SolarById";

export default async function SolarDetailPage({ params }) {
  const { slug } = await params;
  return <SolarById slug={slug} />;
}
