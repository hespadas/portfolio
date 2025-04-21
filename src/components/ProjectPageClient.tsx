'use client';

import dynamic from 'next/dynamic';
import type { Project } from '@/data/projects';
const ProjectCard = dynamic(() => import('@/components/ProjectCard'), {
    ssr: false,
});

interface Props {
    project: Project;
}

export default function ProjectPageClient({ project }: Props) {
    return (
        <>
            <ProjectCard project={project} />
            <a href="/" className="block text-center text-blue-500 hover:underline">
                ← Voltar para Home
            </a>
        </>
    );
}
