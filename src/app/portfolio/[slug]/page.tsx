import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import projects from '@/data/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = await Promise.resolve(params.slug);

    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: `${project.name} · Portfólio – Henrique Espadas`,
        description: project.description,
    };
}

export default function ProjectPage({ params }: Props) {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return (
        <main className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
            <ProjectPageClient project={project} />
        </main>
    );
}
