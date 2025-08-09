<script>
  import HeaderTitle from "./HeaderTitle.svelte";
  import { onMount } from "svelte";

  const projects = [
    {
      title: "FMT-C",
      imageUrl: "/imgs/fmt-c.png",
      detailsLink: "/projects/fmt-c", // internal details page
      github: null, // no github link
      link: "https://fmt-c.com/ar",
      description:
        "A project for a real estate and construction company in the UAE.",
      designer: "Ahmed Dalton",
      designerLink: "#about",
      tools: [
        { name: "Next.js", class: "nextjs" },
        { name: "shadcn/ui", class: "shadcn" },
        { name: "Supabase", class: "supabase" },
        { name: "Tailwind", class: "tailwind" },
      ],
      category: ["favorite", "full-stack"],
    },
    {
      title: "Baddel",
      imageUrl: "/imgs/baddel.png",
      detailsLink: "/projects/baddel",
      github: "https://github.com/username/baddel",
      link: "https://baddel.vercel.app/ar",
      description: "A project listing alternatives to boycotted products.",
      designer: "Ahmed Dalton",
      designerLink: "#about",
      tools: [
        { name: "React JS", class: "react" },
        { name: "Tailwind", class: "tailwind" },
      ],
      category: ["full-stack"],
    },
    {
      title: "The Green Tree Initiative",
      imageUrl:
        "/imgs/Screenshot-2024-02-11-at-18-56-39-The-Green-Tree-Intetiative.png",
      detailsLink: "/projects/green-tree-initiative",
      github: null,
      link: "https://green-tree-intiative.netlify.app/",
      description:
        "A concept for a non-profit helping people and the environment.",
      designer: "Ahmed Dalton",
      designerLink: "#about",
      tools: [
        { name: "Astro", class: "astro" },
        { name: "Tailwind", class: "tailwind" },
      ],
      category: ["favorite", "full-stack"],
    },
    {
      title: "Bouncer",
      imageUrl: "/imgs/Bouncer.png",
      detailsLink: "/projects/bouncer",
      github: "https://github.com/username/bouncer",
      link: "https://Bouncer.pages.dev/",
      description: "An eCommerce Website created with React and Tailwind.",
      designer: "Almaz Bisenbaev",
      designerLink: "https://almazbisenbaev.gumroad.com/",
      tools: [
        { name: "React JS", class: "react" },
        { name: "Tailwind", class: "tailwind" },
      ],
      category: ["full-stack"],
    },
    {
      title: "Sky Host",
      imageUrl: "/imgs/Sky-Host.jpg",
      detailsLink: "/projects/sky-host",
      github: null,
      link: "https://sky-host.pages.dev/",
      description:
        "A hosting platform concept created with HTML, CSS, and JavaScript.",
      designer: "EuroART93",
      designerLink: "#",
      tools: [
        { name: "HTML5", class: "html" },
        { name: "CSS3", class: "css" },
        { name: "JavaScript", class: "javascript" },
      ],
      category: ["static"],
    },
    {
      title: "Khoomie",
      imageUrl: "/imgs/Khoomie.png",
      detailsLink: "/projects/khoomie",
      github: null,
      link: "https://Khoomie.pages.dev/",
      description: "An eCommerce website concept.",
      designer: "Michael Ajah",
      designerLink:
        "https://dribbble.com/shots/15282101-Khoomi-Ecommerce-UI-Kit",
      tools: [
        { name: "HTML5", class: "html" },
        { name: "CSS3", class: "css" },
        { name: "JavaScript", class: "javascript" },
      ],
      category: ["static"],
    },
    {
      title: "Marknet",
      imageUrl: "/imgs/Marknet.png",
      detailsLink: "/projects/marknet",
      github: "https://github.com/username/marknet",
      link: "https://marknet.pages.dev/",
      description: "A marketing website concept.",
      designer: "Adel Ahmed",
      designerLink: "https://dribbble.com/shots/10837061-Marketing-FREE-XD",
      tools: [
        { name: "HTML5", class: "html" },
        { name: "CSS3", class: "css" },
        { name: "JavaScript", class: "javascript" },
      ],
      category: ["static"],
    },
  ];

  const filterTabs = ["All", "Favorite", "Full-Stack", "Static"];
  let activeFilter = "All";

  let tabElements = [];
  let indicatorStyle = "";
  let ready = false;

  onMount(() => {
    setTimeout(() => {
      ready = true;
      updateIndicator(activeFilter);
    }, 50);
  });

  function updateIndicator(filter) {
    const activeIndex = filterTabs.indexOf(filter);
    const activeTabEl = tabElements[activeIndex];
    if (activeTabEl) {
      indicatorStyle = `
        left: ${activeTabEl.offsetLeft}px;
        width: ${activeTabEl.offsetWidth}px;
      `;
    }
  }

  function handleFilterClick(filter) {
    activeFilter = filter;
    updateIndicator(filter);
  }

  $: filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category.includes(activeFilter.toLowerCase().replace("-", " "));
  });
</script>

<section id="projects">
  <HeaderTitle name="Projects" description="Here Is Some Of My Work" />
  <div class="filter-tabs">
    <span class="active-tab-indicator" class:ready style={indicatorStyle}
    ></span>
    {#each filterTabs as tab, i}
      <button
        class:active={activeFilter === tab}
        on:click={() => handleFilterClick(tab)}
        bind:this={tabElements[i]}
      >
        {tab}
      </button>
    {/each}
  </div>

  <div class="projects-cont">
    {#each filteredProjects as project (project.title)}
      <div class="project">
        <a href={project.detailsLink}>
          <img
            class="project-img"
            src={project.imageUrl}
            alt="{project.title} Website"
          />
        </a>
        <p>
          <a href={project.detailsLink}>{project.title}</a>

          {project.description}
        </p>
        <div class="project-links">
          <a class="project-link" href={project.detailsLink}
            >Case Study
            <!-- <img class="sm-icon" src="/imgs/document.svg" alt="GitHub Logo" /> -->
          </a>
          {#if project.github}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              Repo
              <!-- <img class="sm-icon" src="/imgs/github.svg" alt="GitHub Logo" /> -->
            </a>
          {/if}
        </div>
        <div class="tools">
          {#if project.tools.length > 3}
            {#each project.tools.slice(0, 3) as tool}
              <span class={tool.class}>{tool.name}</span>
            {/each}
            <span class="extra-tools">+{project.tools.length - 3}</span>
          {:else}
            {#each project.tools as tool}
              <span class={tool.class}>{tool.name}</span>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .project {
    color: var(--text-md-color);
  }
  .project .tools {
    display: flex;
    gap: 1.5rem;
    padding: 1.3rem;
    margin-left: 1.6rem;
  }
  .project .tools span {
    padding: 0.5rem 1rem;
    border-radius: 100vw;
  }
  .project .tools .html {
    background-color: rgba(247, 147, 32, 0.65);
  }
  .project .tools .css {
    background-color: rgba(65, 183, 238, 0.65);
  }
  .project .tools .javascript {
    background-color: rgba(231, 212, 60, 0.65);
  }
  .project .tools .tailwind {
    background-color: rgba(38, 230, 214, 0.65);
  }
  .project .tools .react {
    background-color: rgba(77, 219, 255, 0.65);
  }
  .project .tools .active {
    background-color: rgba(255, 77, 77, 0.65);
  }
  .project .tools .shadcn {
    background-color: rgba(156, 163, 175, 0.65);
    color: white;
  }
  .project .tools .nextjs {
    background-color: rgba(0, 0, 0, 0.65);
    color: white;
  }
  .project .tools .astro {
    background-color: rgba(138, 43, 226, 0.65);
    color: white;
  }
  .project .tools .supabase {
    background-color: rgba(64, 224, 208, 0.65);
    color: white;
  }

  .tools span:hover {
    opacity: 0.88;
  }
  .project:hover {
    box-shadow: 0px 0px 2rem #70c6ff67;
    transform: scale(101%);
    transition: 0.2s all;
  }
  .project-img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    min-height: 26rem;
    max-height: 26rem;
  }
  .project p {
    font-size: var(--fs-100);
    padding: 1rem 3rem;
  }
  .project a {
    text-decoration: underline;
    text-decoration-color: #74869e;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    padding-left: 2rem;
  }
  .project-link {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: white;
    text-decoration: none;
    gap: 0.5rem;
    transition: background 0.2s;
    display: flex;
    align-items: center;
  }
  .project-link:hover {
    opacity: 0.85;
  }

  .filter-tabs {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }
  .active-tab-indicator {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: var(--primary-color);
    border-radius: 100vw;
    box-shadow: 0 0 1rem var(--primary-color);
    transition: all 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    opacity: 0;
  }
  .active-tab-indicator.ready {
    opacity: 1;
  }
  .filter-tabs button {
    position: relative;
    z-index: 1;
    font-size: var(--fs-100);
    font-weight: 600;
    padding: 0.8rem 2rem;
    border: 1px solid transparent;
    background-color: transparent;
    color: var(--small-txt);
    cursor: pointer;
    transition: color 0.3s;
  }
  .filter-tabs button:hover {
    color: var(--txt-h-color);
  }
  .filter-tabs button.active {
    color: white;
  }

  #projects {
    margin-top: 50px;
  }
  #projects .projects-cont {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.4rem;
  }
  .project {
    background-color: var(--secondary-color-2);
    overflow: hidden;
    border-radius: 1.7rem;
  }

  .primary-header {
    font-size: var(--fs-600);
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    text-align: center;
    margin-bottom: 2rem;
  }
  .secondary-header {
    font-size: var(--fs-200);
    font-weight: 500;
    text-align: center;
    margin-bottom: 8rem;
    letter-spacing: 1px;
    color: var(--small-txt);
  }
  .sm-icon {
    width: 3rem;
  }

  .extra-tools {
    background: var(--secondary-color);
    color: white;
    font-size: 1rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
</style>
