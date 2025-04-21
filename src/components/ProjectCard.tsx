"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const { slug, name, description, techs, liveUrl, repoUrl } = project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "rounded-2xl border border-neutral-700/50 bg-neutral-900/70 p-6 shadow-lg backdrop-blur-md",
        "hover:shadow-xl transition-shadow",
        className,
      )}
    >
      <header className="mb-4 flex items-center justify-between gap-4">
        <Link href={`/portfolio/${slug}`} className="flex-1 hover:underline">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
        </Link>
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${name} em nova aba`}
            className="text-neutral-300 transition-colors hover:text-white"
          >
            <ExternalLink className="h-5 w-5" />
          </Link>
        )}
      </header>

      <p className="mb-4 text-neutral-300">{description}</p>

      <ul className="mb-6 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-neutral-700/60 px-3 py-1 text-sm text-neutral-100"
          >
            {tech}
          </li>
        ))}
      </ul>

      <footer className="mt-4 flex gap-3">
        {repoUrl && (
          <Link
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-700 px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-neutral-600"
          >
            Código
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
        {liveUrl && (
          <Link
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            Live
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </footer>
    </motion.article>
  );
};

export default ProjectCard;
