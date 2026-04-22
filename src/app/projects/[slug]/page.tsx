import { projects } from "@/data/projects";
import ProjectView from "./ProjectView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectView slug={slug} />;
}
