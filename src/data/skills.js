/**
 * Skills Data - Used by SkillsSection and StructuredData
 * Centralized for consistency across UI and SEO schemas
 */
export const skillsData = {
    Frontend: ["HTML", "JavaScript", "TypeScript", "React", "Next.js"],
    "UI / Styling": ["CSS", "TailwindCSS", "Bootstrap", "Bulma", "Framer Motion"],
    Backend: ["Node.js", "Express", "Bun", "Elysia.js", "Python"],
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    "BaaS / CMS": ["Firebase", "Supabase", "PayloadCMS"],
    "DevOps / Tools": ["Git", "Docker", "Postman", "VS Code"],
    Design: ["Figma"],
};

/**
 * Flat list of all skills for SEO/AEO purposes
 */
export const allSkills = Object.values(skillsData).flat();

/**
 * Core skills for quick display  
 */
export const coreSkills = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"];

export default skillsData;
