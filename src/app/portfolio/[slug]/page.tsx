// src/app/portfolio/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import projects from "@/data/projects";
import ProjectPageClient from "@/components/ProjectPageClient";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} · Portfólio – Henrique Espadas`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
      <ProjectPageClient project={project} />
    </main>
  );
}
