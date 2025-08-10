<!-- About.svelte -->
<script>
  import Button from "./ui/Button.svelte";
  import { onMount } from "svelte";
  import Skill from "./Skill.svelte";

  let isVisible = false;

  onMount(() => {
    setTimeout(() => {
      isVisible = true;
    }, 100);
  });

  const skills = [
    {
      name: "react",
      title: "React",
      details: [
        "Context API",
        "Custom Hooks",
        "State Management",
        "Component Lifecycle",
        "Fetching Patterns",
      ],
    },
    {
      name: "typescript",
      title: "TypeScript",
      details: [
        "Type Safety",
        "Interfaces & Types",
        "Generics",
        "Utility Types",
        "Error Prevention",
      ],
    },
    {
      name: "nextjs",
      title: "Next.js",
      details: [
        "Server Side Rendering",
        "Static Site Generation",
        "API Routes",
        "Image Optimization",
        "File-based Routing",
      ],
    },
    {
      name: "prisma",
      title: "Prisma",
      details: [
        "ORM Integration",
        "Database Modeling",
        "Query Builder",
        "Migrations",
        "Type-safe Database Access",
      ],
    },
    {
      name: "tailwind",
      title: "Tailwind CSS",
      details: [
        "Utility-first CSS",
        "Responsive Design",
        "Custom Themes",
        "Dark Mode",
        "Component Styling",
      ],
    },
    {
      name: "shadcnui",
      title: "ShadCN UI",
      details: [
        "Accessible Components",
        "Radix UI Integration",
        "Customizable UI",
        "Headless Components",
        "Design System",
      ],
    },
    {
      name: "next-auth",
      title: "NextAuth.js",
      details: [
        "Authentication Providers",
        "Session Management",
        "OAuth Integration",
        "JWT Handling",
        "Protected Routes",
      ],
    },
    {
      name: "express",
      title: "Express.js",
      details: [
        "RESTful APIs",
        "Middleware",
        "Routing",
        "Error Handling",
        "Security Best Practices",
      ],
    },
    {
      name: "mongodb",
      title: "MongoDB",
      details: [
        "NoSQL Database",
        "Aggregation Pipeline",
        "Schema Design",
        "Performance Optimization",
        "Atlas Integration",
      ],
    },
    {
      name: "react-query",
      title: "React Query",
      details: [
        "Server State Management",
        "Caching",
        "Background Updates",
        "Data Synchronization",
        "Query Invalidation",
      ],
    },
  ];
</script>

<section id="about" class:visible={isVisible}>
  <div class="introduction">
    <span class="hello">Hello,</span>
    <h1>Dalton Is Here!</h1>
    <h2>Fullstack Developer</h2>
    <p>
      I'm <strong>Ahmed Dalton</strong>, a Full Stack Developer specializing in
      high-performance frontend applications with React and Next.js, Familiar
      with the broader modern frontend ecosystem, ensuring the best tools are
      always used for the job.
    </p>

    <Button visible={isVisible} />
  </div>
  <div class="photo-container">
    <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
  </div>
</section>

<div class="skills-cont" class:visible={isVisible}>
  {#each skills as skill, i}
    <Skill {skill} style={`animation-delay: ${i * 0.05}s`} />
  {/each}
</div>

<style>
  :global(:root) {
    --primary-color: #4fc2f7e0;
    --secondary-color: #18b3ded7;
    --background-color: rgb(1, 10, 22);
    --txt-h-color: #d3d9dd;
    --small-txt: #bebebe;
    --fs-200: 2.2rem;
    --fs-400: 3.6rem;
    --fs-500: 5.6rem;
  }

  #about {
    margin-top: 10rem;
    display: flex;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
  }

  #about.visible {
    opacity: 1;
    transform: translateY(0);
  }

  #about .photo-container {
    position: relative;
    width: 30%;
    aspect-ratio: 1/1;
    align-self: center;
  }

  #about .my-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid var(--primary-color);
    z-index: 2;
    position: relative;
  }
  #about .photo-container:hover .photo-border {
    opacity: 0.9;
  }

  .introduction {
    width: 70%;
    padding-right: 3rem;
  }

  .introduction .hello {
    color: var(--primary-color);
    font-size: var(--fs-400);
    display: inline-block;
    opacity: 0;
    transform: translateX(-20px);
    transition:
      opacity 0.6s ease 0.2s,
      transform 0.6s ease 0.2s;
  }

  #about.visible .introduction .hello {
    opacity: 1;
    transform: translateX(0);
  }

  .introduction h1,
  .introduction h2 {
    font-size: var(--fs-500);
    font-weight: 700;
    opacity: 0;
    transform: translateX(-20px);
    transition:
      opacity 0.6s ease 0.3s,
      transform 0.6s ease 0.3s;
  }

  #about.visible .introduction h1,
  #about.visible .introduction h2 {
    opacity: 1;
    transform: translateX(0);
  }

  .introduction h2 {
    margin-bottom: 1rem;
    color: #ccc;
  }

  .introduction p {
    line-height: 1.6;
    letter-spacing: 0.02em;
    margin-bottom: 4rem;
    padding-right: 12rem;
    font-size: var(--fs-200);
    color: var(--small-txt);
    opacity: 0;
    transform: translateX(-20px);
    transition:
      opacity 0.6s ease 0.4s,
      transform 0.6s ease 0.4s;
  }

  #about.visible .introduction p {
    opacity: 1;
    transform: translateX(0);
  }

  #about.visible .btn-cont {
    opacity: 1;
    transform: translateY(0);
  }

  .skills-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    margin: 5rem 0;
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.8s ease 0.6s,
      transform 0.8s ease 0.6s;
  }

  .skills-cont.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* ! Media Queries */
  @media (max-width: 720px) {
    #about {
      margin-top: 3em;
      flex-direction: column;
    }

    .introduction {
      width: 100%;
      padding-right: 0;
    }

    .introduction p {
      padding-right: 0;
    }

    #about .photo-container {
      width: 60%;
      margin-top: 2rem;
    }
  }
</style>
