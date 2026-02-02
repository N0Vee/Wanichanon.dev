/**
 * Projects Data - Used by ProjectsSection and StructuredData
 * Centralized for consistency across UI and SEO schemas
 */
export const projectsData = [
    {
        id: 1,
        title: "University Management System",
        category: "Full-Stack",
        image: "/images/projects_img/UniversityManagement.png",
        github: "https://github.com/N0Vee/University-Admin-Dashboard",
        tech: ["Next.js", "Supabase", "JavaScript", "TailwindCSS"],
        description:
            "Comprehensive SaaS dashboard for university management with role-based access control, student management, and announcement system.",
    },
    {
        id: 2,
        title: "Wanichanon.blog",
        category: "Full-Stack",
        image: "/images/projects_img/WebBlog.png",
        github: "https://github.com/N0Vee/Wanichanon.blog",
        tech: ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
        description:
            "Modern blog platform built with Next.js 14 (App Router), PayloadCMS, and a custom glassmorphism design system.",
    },
    {
        id: 3,
        title: "Wanichanon.dev",
        category: "Frontend",
        image: "/images/projects_img/WebPortfolio.png",
        github: "https://github.com/N0Vee/Wanichanon.dev",
        tech: ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
        description:
            "Responsive personal portfolio with clean UI design and smooth animations for enhanced visual experience.",
    },
    {
        id: 4,
        title: "Guitar E-Commerce",
        category: "Full-Stack",
        image: "/images/projects_img/Guitarshop.png",
        github: "https://github.com/Wanidx/project_front-end",
        tech: ["JavaScript", "Express", "MySQL", "Axios"],
        description:
            "Complete e-commerce solution with admin dashboard featuring full CRUD operations and inventory management.",
    },
    {
        id: 5,
        title: "Weather Forecast App",
        category: "Frontend",
        image: "/images/projects_img/weatherforcast.png",
        github: "https://github.com/N0Vee/Weather-Forecast-Website",
        tech: ["Next.js", "JavaScript", "Weather API"],
        description:
            "Real-time weather application with location-based forecasting and interactive weather data visualization.",
    },
];

export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"];

export default projectsData;
