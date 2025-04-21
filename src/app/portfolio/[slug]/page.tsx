import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { type FC } from 'react';
import projects from '@/data/projects';
import ProjectPageClient from '@/components/ProjectPageClient';

type PageProps = {
    params: {
        slug: string;
    };
};

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const slug = params.slug;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: `${project.name} · Portfólio – Henrique Espadas`,
        description: project.description,
    };
};

const ProjectPage: FC<PageProps> = ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) notFound();

    return (
        <main className="container mx-auto max-w-3xl px-4 py-12 space-y-8">
            <ProjectPageClient project={project} />
        </main>
    );
};

export default ProjectPage;
