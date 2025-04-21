export interface Project {
    slug: string;
    name: string;
    description: string;
    techs: string[];
    repoUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        slug: "rabbit",
        name: "Rabbit Quiz",
        description: "Real time Quiz multiplayer with WebSockets, built with Django Channels.",
        techs: ["React", "TailwindCSS", "Python", "Django", "Django Channels", "JavaScript"],
        liveUrl: "https://www.rabbitquiz.com",
    },
    {
        slug: "recycling-points",
        name: "Recycling Points",
        description: "Module Odoo to manage recycling points",
        techs: ["Python", "Odoo", "PostgreSQL"],
        repoUrl: "https://github.com/hespadas/recycling_points",
    },
    {
        slug: "portfolio",
        name: "Portfólio",
        description: "This portfolio site, built with Next.js and TailwindCSS.",
        techs: ["Next.js", "TypeScript", "TailwindCSS"],
        repoUrl: "https://github.com/hespadas/portfolio",
    }
];

export default projects;
