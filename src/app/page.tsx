import TrendChart from "@/components/Trends/TrendChart";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
    const globalKeywords = [
        "JavaScript",
        "Python",
        "TypeScript",
        "PHP",
    ];

    const LegendItem = ({ color, label }: { color: string; label: string }) => (
        <div className="flex items-center space-x-2">
            <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
            <span>{label}</span>
        </div>
    );

    return (
        <main className="container mx-auto max-w-6xl px-4 py-12 space-y-20">
            {/* Hero Section */}
            <section className="relative py-16 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 shadow-xl">
                <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Henrique Espadas Paranhos
                    </h1>
                    <p className="text-2xl text-neutral-200 font-light">
                        Backend Developer
                    </p>
                    <div className="w-24 h-1 mx-auto bg-indigo-500"></div>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                        Hello, I'm Henrique. I specialize in backend development with expertise in
                        Python, JavaScript and PHP. Passionate about creating efficient, scalable solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">Django</span>
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">Odoo</span>
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">CodeIgniter</span>
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">WordPress</span>
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">Docker</span>
                        <span className="px-3 py-1 text-sm bg-neutral-700 rounded-full text-neutral-200">SQL</span>
                    </div>
                    <div className="flex justify-center space-x-4 pt-2">
                        <a href="https://github.com/hespadas/" className="p-3 text-neutral-300 hover:text-white transition-colors">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/henrique-espadas-paranhos/" className="p-3 text-neutral-300 hover:text-white transition-colors">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Projects</h2>
                    <p className="mt-2 text-neutral-400">Some of my recent work</p>
                </div>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </section>

            {/* Trends Section */}
            <section className="space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-white">Tech Trends</h2>
                    <p className="mt-2 text-neutral-400">
                        Relative volume of programming language searches in Brazil
                    </p>
                </div>
                <div className="h-80 w-full rounded-xl border border-neutral-700/50 bg-neutral-900/60 p-6 shadow-lg hover:border-neutral-600/70 transition-all duration-300">
                    <TrendChart keywords={globalKeywords} />
                </div>
                <div className="flex justify-center flex-wrap gap-4 text-sm text-neutral-300">
                    <LegendItem color="#F7DF1E" label="JavaScript" />
                    <LegendItem color="#3572A5" label="Python" />
                    <LegendItem color="#3178C6" label="TypeScript" />
                    <LegendItem color="#8892be" label="PHP" />
                </div>
            </section>
        </main>
    );
}