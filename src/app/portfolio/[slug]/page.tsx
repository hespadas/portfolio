import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import projects from '@/data/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: `${project.name} · Portfólio – Henrique Espadas`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return (
        <main className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
            <ProjectPageClient project={project} />
        </main>
    );
}
