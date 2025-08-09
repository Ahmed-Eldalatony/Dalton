<script>
  export let project;

  // If no project is passed, example fallback:
  if (!project) {
    project = {
      title: "FMT-C",
      imageUrl: "/imgs/fmt-c.png",
      description:
        "A project for a real estate and construction company in the UAE.",
      link: "https://fmt-c.com/ar",
      github: null,
      designer: "Ahmed Dalton",
      designerLink: "#about",
      tools: [
        { name: "Next.js", class: "nextjs" },
        { name: "shadcn/ui", class: "shadcn" },
        { name: "Supabase", class: "supabase" },
        { name: "Tailwind", class: "tailwind" },
      ],
    };
  }
</script>

<section class="project-details">
  <div class="image-wrapper">
    <img src={project.imageUrl} alt={project.title} />
  </div>

  <div class="content">
    <h1 class="title">{project.title}</h1>
    <p class="description">{project.description}</p>

    <div class="tools">
      {#if project.tools.length > 3}
        {#each project.tools.slice(0, 3) as tool}
          <span class={`tool ${tool.class}`}>{tool.name}</span>
        {/each}
        <span class="extra-tools">+{project.tools.length - 3}</span>
      {:else}
        {#each project.tools as tool}
          <span class={`tool ${tool.class}`}>{tool.name}</span>
        {/each}
      {/if}
    </div>

    <div class="links">
      {#if project.link}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          class="btn primary"
        >
          Visit Site
        </a>
      {/if}
      {#if project.github}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          class="btn secondary"
        >
          View Repo
        </a>
      {/if}
    </div>

    <p class="designer">
      Designed by
      <a href={project.designerLink} target="_blank" rel="noopener noreferrer">
        {project.designer}
      </a>
    </p>
  </div>
</section>

<style>
  :global(html) {
    font-size: 62.5%;
  }

  .project-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    padding: 4rem;
    background-color: var(--background-color);
    color: var(--text-md-color);
    border-radius: 1.6rem;
  }

  .image-wrapper {
    background: var(--secondary-color-2);
    padding: 1.6rem;
    border-radius: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper img {
    width: 100%;
    border-radius: 1.2rem;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .title {
    font-size: var(--fs-400);
    color: var(--txt-h-color);
  }

  .description {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.6;
  }

  .tools {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .tool {
    background: var(--secondary-color);
    padding: 0.4rem 1rem;
    border-radius: 1.2rem;
    font-size: 1.4rem;
    color: white;
  }

  .extra-tools {
    background: var(--primary-color);
    color: white;
    font-size: 1.2rem;
    padding: 0.3rem 0.6rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    min-height: 2rem;
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.8rem 1.6rem;
    border-radius: 1.2rem;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.3s;
  }

  .btn.primary {
    background: var(--primary-color);
    color: white;
  }

  .btn.primary:hover {
    background: var(--secondary-color);
  }

  .btn.secondary {
    background: var(--secondary-color-2);
    color: white;
  }

  .btn.secondary:hover {
    background: var(--primary-color);
  }

  .designer {
    font-size: 1.4rem;
    color: var(--small-txt);
  }

  .designer a {
    color: var(--primary-color);
    text-decoration: none;
  }

  .designer a:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .project-details {
      grid-template-columns: 1fr;
    }
  }
</style>
