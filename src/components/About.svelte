<!-- About.svelte -->
<script>
  import { themeStore } from "$lib/stores";
  import Skill from "./Skill.svelte";

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

<section id="about">
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

    <div class="btn-cont">
      <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
      <button type="submit" class="btn glass-f">Get in touch</button>
    </div>
  </div>
  <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
</section>

<div class="skills-cont">
  {#each skills as skill}
    <Skill {skill} />
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
  }

  #about .my-photo {
    width: 30%;
    aspect-ratio: 1/1;
    object-fit: cover;
    align-self: center;
    border-radius: 50%;
    border: solid;
  }

  .introduction {
    width: 70%;
  }

  .introduction .hello {
    color: var(--primary-color);
    font-size: var(--fs-400);
    display: inline-block;
  }

  .introduction h1,
  .introduction h2 {
    font-size: var(--fs-500);
    font-weight: 700;
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
  }

  .skills-cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    margin: 5rem 0;
  }

  /* ! Media Queries */
  @media (max-width: 720px) {
    #about {
      margin-top: 3em;
      flex-direction: column;
    }

    .introduction {
      width: 100%;
    }

    .introduction p {
      padding-right: 0;
    }

    #about .my-photo {
      width: 60%;
      margin-top: 2rem;
    }
  }
</style>
