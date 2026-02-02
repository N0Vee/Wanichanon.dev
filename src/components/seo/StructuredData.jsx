/**
 * Structured Data Components - Server-Side Rendered
 * All JSON-LD schemas are now rendered on the server for optimal SEO
 */

/**
 * Person Schema - Tells search engines who you are
 * Essential for personal branding and knowledge panels
 */
export function PersonSchema() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://wanichanon.dev/#person",
    "name": "Wanichanon Saelee",
    "alternateName": "Wanichanon",
    "jobTitle": "Full-Stack Developer",
    "description": "Passionate full-stack developer specializing in React, Next.js, and modern web technologies. Building elegant, user-centered digital experiences.",
    "url": "https://wanichanon.dev",
    "image": {
      "@type": "ImageObject",
      "url": "https://wanichanon.dev/images/Wanichanon.webp",
      "width": 800,
      "height": 800
    },
    "sameAs": [
      "https://github.com/N0Vee",
      "https://www.linkedin.com/in/wanichanon-saelee-0b2717252/",
      "https://discordapp.com/users/Nveee#9120"
    ],
    "email": "mailto:wanichanon.work@gmail.com",
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Full-Stack Development",
      "Frontend Development",
      "Backend Development",
      "UI/UX Design",
      "Database Design",
      "REST APIs",
      "GraphQL"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Open for Opportunities"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University"
    },
    "nationality": "Thai",
    "knowsLanguage": ["Thai", "English"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}

/**
 * Website Schema - Tells search engines about your website structure
 * Helps with site name display in search results
 */
export function WebsiteSchema() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wanichanon.dev/#website",
    "name": "Wanichanon.dev",
    "alternateName": "Wanichanon Saelee Portfolio",
    "url": "https://wanichanon.dev",
    "description": "Portfolio of Wanichanon Saelee, a passionate full-stack developer specializing in React, Next.js, and modern web technologies.",
    "publisher": {
      "@id": "https://wanichanon.dev/#person"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wanichanon.dev/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en",
    "copyrightHolder": {
      "@id": "https://wanichanon.dev/#person"
    },
    "copyrightYear": 2026
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  );
}

/**
 * WebPage Schema - Describes the current page
 * Helps search engines understand page content
 */
export function WebPageSchema({
  title = "Wanichanon.dev - Full-Stack Developer",
  description = "Portfolio of Wanichanon Saelee, a passionate full-stack developer.",
  path = "/"
}) {
  const pageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://wanichanon.dev${path}#webpage`,
    "url": `https://wanichanon.dev${path}`,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://wanichanon.dev/#website"
    },
    "about": {
      "@id": "https://wanichanon.dev/#person"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://wanichanon.dev/images/Wanichanon.webp"
    },
    "breadcrumb": {
      "@id": `https://wanichanon.dev${path}#breadcrumb`
    },
    "inLanguage": "en",
    "datePublished": "2024-01-01",
    "dateModified": "2026-02-02"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData) }}
    />
  );
}

/**
 * Breadcrumb Schema - Helps search engines understand site hierarchy
 * Enables breadcrumb display in search results
 */
export function BreadcrumbSchema({ path = "/" }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `https://wanichanon.dev${path}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://wanichanon.dev/"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
}

/**
 * Projects Schema - Portfolio items as Creative Works
 * Helps projects appear in rich search results
 */
export function ProjectsSchema() {
  const projectsData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://wanichanon.dev/#projects",
    "name": "Portfolio Projects by Wanichanon Saelee",
    "description": "A collection of web development projects showcasing full-stack development skills.",
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "position": 1,
        "name": "University Management System",
        "description": "Comprehensive SaaS dashboard for university management with role-based access control, student management, and announcement system.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "author": {
          "@id": "https://wanichanon.dev/#person"
        },
        "codeRepository": "https://github.com/N0Vee/University-Admin-Dashboard",
        "programmingLanguage": ["Next.js", "Supabase", "JavaScript", "TailwindCSS"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "position": 2,
        "name": "Wanichanon.blog",
        "description": "Modern blog platform built with Next.js 14 (App Router), PayloadCMS, and a custom glassmorphism design system.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "author": {
          "@id": "https://wanichanon.dev/#person"
        },
        "codeRepository": "https://github.com/N0Vee/Wanichanon.blog",
        "programmingLanguage": ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "position": 3,
        "name": "Wanichanon.dev",
        "description": "Responsive personal portfolio with clean UI design and smooth animations for enhanced visual experience.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "author": {
          "@id": "https://wanichanon.dev/#person"
        },
        "codeRepository": "https://github.com/N0Vee/Wanichanon.dev",
        "programmingLanguage": ["Next.js", "TailwindCSS", "Framer Motion", "JavaScript"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "position": 4,
        "name": "Guitar E-Commerce",
        "description": "Complete e-commerce solution with admin dashboard featuring full CRUD operations and inventory management.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "author": {
          "@id": "https://wanichanon.dev/#person"
        },
        "codeRepository": "https://github.com/Wanidx/project_front-end",
        "programmingLanguage": ["JavaScript", "Express", "MySQL", "Axios"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "SoftwareApplication",
        "position": 5,
        "name": "Weather Forecast App",
        "description": "Real-time weather application with location-based forecasting and interactive weather data visualization.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "Any",
        "author": {
          "@id": "https://wanichanon.dev/#person"
        },
        "codeRepository": "https://github.com/N0Vee/Weather-Forecast-Website",
        "programmingLanguage": ["Next.js", "JavaScript", "Weather API"],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsData) }}
    />
  );
}

/**
 * FAQ Schema - AEO Optimization
 * Helps answers appear in featured snippets and AI responses
 */
export function FAQSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://wanichanon.dev/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Wanichanon Saelee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wanichanon Saelee is a passionate full-stack developer specializing in React, Next.js, and modern web technologies. He creates elegant, user-centered digital experiences and is currently open to new opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies does Wanichanon specialize in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wanichanon specializes in modern web technologies including React, Next.js, JavaScript, TypeScript, Node.js, Tailwind CSS, Supabase, Express, and MySQL. He is proficient in both frontend and backend development."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Wanichanon for collaboration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Wanichanon via email at wanichanon.work@gmail.com, connect on LinkedIn at linkedin.com/in/wanichanon-saelee-0b2717252, or reach out on GitHub at github.com/N0Vee. He is open to freelance projects and full-time opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "What projects has Wanichanon built?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wanichanon has built several projects including: University Management System (SaaS dashboard with role-based access), Wanichanon.blog (modern blog platform with PayloadCMS), Guitar E-Commerce (full e-commerce solution with admin dashboard), and Weather Forecast App (real-time weather application with API integration)."
        }
      },
      {
        "@type": "Question",
        "name": "Is Wanichanon available for hire?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Wanichanon is currently available for freelance projects and full-time positions. He is passionate about creating meaningful web solutions and is open to opportunities in full-stack development, frontend development, and web application development."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}

/**
 * Professional Service Schema - For service-based searches
 * Helps appear in "developer for hire" type searches
 */
export function ProfessionalServiceSchema() {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://wanichanon.dev/#service",
    "name": "Wanichanon Saelee - Full-Stack Development Services",
    "provider": {
      "@id": "https://wanichanon.dev/#person"
    },
    "serviceType": [
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Full-Stack Development",
      "React Development",
      "Next.js Development"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://wanichanon.dev",
      "serviceSmsNumber": {
        "@type": "ContactPoint",
        "email": "wanichanon.work@gmail.com"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
}

/**
 * Aggregate all structured data components
 * Now rendered server-side for optimal SEO
 */
export default function AllStructuredData() {
  return (
    <>
      <PersonSchema />
      <WebsiteSchema />
      <WebPageSchema />
      <BreadcrumbSchema />
      <ProjectsSchema />
      <FAQSchema />
      <ProfessionalServiceSchema />
    </>
  );
}
