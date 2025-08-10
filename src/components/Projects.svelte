<script>
  import { onMount } from "svelte";
  import HeaderTitle from "./ui/HeaderTitle.svelte"; // Ensure this path is correct
  import { projects } from "$lib/projects"; // Ensure this path is correct

  let isVisible = false;
  let sectionRef;

  const filterTabs = ["All", "Favorite", "Full-Stack", "Static"];
  let activeFilter = "All";

  let tabElements = [];
  let indicatorStyle = "";
  let ready = false;

  // This IntersectionObserver will trigger the animation when the section scrolls into view
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            // We can unobserve the element after it has become visible to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    );

    if (sectionRef) {
      observer.observe(sectionRef);
    }

    // Cleanup function to unobserve when the component is destroyed
    return () => {
      if (sectionRef) {
        observer.unobserve(sectionRef);
      }
    };
  });

  // This onMount handles the animation for the filter tabs indicator
  onMount(() => {
    setTimeout(() => {
      ready = true;
      updateIndicator(activeFilter);
    }, 50); // Small delay to ensure elements are rendered
  });

  // Updates the position and width of the active tab indicator
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

  // Handles click events on the filter tabs
  function handleFilterClick(filter) {
    activeFilter = filter;
    updateIndicator(filter);
  }

  // Reactive statement to filter projects based on the active tab
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

  <div bind:this={sectionRef} class="projects-cont">
    {#each filteredProjects as project, i (project.title)}
      <div
        class="project"
        class:animate={isVisible}
        style="--delay: {i * 100}ms;"
      >
        <div class="project-image-container">
          <a href={project.detailsLink}>
            <img
              class="project-img"
              src={project.imageUrl}
              alt="{project.title} Website"
            />
            <div class="project-overlay">
              <div class="view-project">View Project</div>
            </div>
          </a>
        </div>

        <p>
          <a href={project.detailsLink}>{project.title}</a>
          {project.description}
        </p>

        <div class="project-links">
          <a class="project-link" href={project.detailsLink}>Case Study</a>
          {#if project.github}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              Repo
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
  /* --- Global Section Styles --- */
  #projects {
    margin-top: 50px;
  }

  #projects .projects-cont {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2.4rem;
  }

  /* --- Project Card Animation & Base Styles --- */
  .project {
    background-color: var(--secondary-color-2);
    overflow: hidden;
    border-radius: 1.7rem;
    color: var(--text-md-color);

    /* Initial state for the entrance animation */
    opacity: 0;
    transform: translateY(20px);
    will-change: opacity, transform;

    /* Transitions for the entrance animation (using --delay), hover transform, and box-shadow */
    transition:
      opacity 0.5s ease-out var(--delay, 0s),
      transform 0.5s ease-out var(--delay, 0s),
      box-shadow 0.3s ease;
  }

  /* Final state for the entrance animation, triggered by the 'animate' class */
  .project.animate {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hover effect for the project card */
  .project:hover {
    box-shadow: 0px 0px 2rem #70c6ff67;
    transform: translateY(
      -5px
    ); /* This overrides the transform from .animate on hover */
  }

  /* --- Project Card Content --- */
  .project-image-container {
    position: relative;
    overflow: hidden;
  }

  .project-img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    min-height: 26rem;
    max-height: 26rem;
    transition: transform 0.5s ease;
  }

  .project:hover .project-img {
    transform: scale(1.05);
  }

  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project:hover .project-overlay {
    opacity: 1;
  }

  .view-project {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
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
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
  }

  .project-link:hover {
    opacity: 0.85;
  }

  /* --- Tech Tools/Tags Styles --- */
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

  .extra-tools {
    background: var(--secondary-color);
    color: white;
    font-size: 1rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
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

  /* --- Filter Tabs Styles --- */
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
    transform: scaleX(0); /* Start hidden */
    z-index: 1; /* Below buttons */
  }

  .active-tab-indicator.ready {
    transform: scaleX(1); /* Animate to full width */
  }

  .filter-tabs button {
    position: relative;
    z-index: 2; /* Above indicator */
    font-size: var(--fs-100);
    font-weight: 600;
    padding: 0.8rem 2rem;
    border: none;
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
</style>
