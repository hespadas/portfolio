'use client';
import { useEffect, useState } from 'react';
import {Project} from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPageClient({ project }: { project: Project }) {

    const [now, setNow] = useState('');
    useEffect(() => {
        setNow(new Date().toLocaleString());
    }, []);
    return (
        <>
            <ProjectCard project={project} />
            <a href="/" className="block text-center text-blue-500 hover:underline">
                ← Voltar para Home
            </a>
        </>
    );
}
