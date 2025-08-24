<script>
  import { onMount } from "svelte";
  import { projects } from "$lib/projects";
  export let data;
  const projectData = data.project;

  // State variables
  let showLoader = true;
  let lastScroll = 0;
  let headerTransform = "translateY(0)";
  let randomProjects = [];

  // Hide loader when component is mounted
  onMount(() => {
    // Ensure loader is hidden even if there are errors
    setTimeout(() => {
      showLoader = false;
    }, 500);

    // Add scroll event listener
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        headerTransform = "translateY(0)";
        return;
      }

      if (currentScroll > lastScroll) {
        headerTransform = "translateY(-100%)";
      } else {
        headerTransform = "translateY(0)";
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    // Get 3 random projects excluding the current one
    const otherProjects = projects.filter(p => p.title !== projectData.title);
    randomProjects = otherProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // Smooth scrolling function
  function scrollToSection(event, selector) {
    event.preventDefault();
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
</script>

<svelte:head>
  <title>{projectData.title} - Dalton Portfolio</title>
  <link rel="icon" href="/imgs/Group 3 (1).svg" type="image/icon type">
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/media.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&family=Open+Sans:wght@300;400;500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

<!-- Loading Screen -->
{#if showLoader}
  <div class="loader">
    <div class="spinner"></div>
  </div>
{/if}

<!-- Header -->
<header style:transform={headerTransform}>
  <nav>
    <div class="logo">Portfolio</div>
    <ul class="nav-links">
      <li>
        <a
          on:click|preventDefault={() => scrollToSection(event, "#overview")}
          href="#overview">Overview</a
        >
      </li>
      <li>
        <a
          on:click|preventDefault={() => scrollToSection(event, "#tech-stack")}
          href="#tech-stack">Tech Stack</a
        >
      </li>
      <li>
        <a
          on:click|preventDefault={() =>
            scrollToSection(event, "#tech-deep-dive")}
          href="#tech-deep-dive">Tech Deep Dive</a
        >
      </li>
      <li>
        <a
          on:click|preventDefault={() => scrollToSection(event, "#challenges")}
          href="#challenges">Challenges</a
        >
      </li>
      <li>
        <a
          on:click|preventDefault={() => scrollToSection(event, "#results")}
          href="#results">Results</a
        >
      </li>
      <li>
        <a
          on:click|preventDefault={() => scrollToSection(event, "#gallery")}
          href="#gallery">Gallery</a
        >
      </li>
    </ul>
  </nav>
</header>

<!-- Main Content -->
<main>
  <!-- Hero Section -->
  <section class="hero">
    <h1 class="project-title">{projectData.title}</h1>
    <p class="project-subtitle">{projectData.description}</p>
    <div class="project-links">
      <a
        href={projectData.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fas fa-external-link-alt"></i> Live Demo
      </a>
      {#if projectData.github}
        <a href={projectData.github} target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i> View Code
        </a>
      {/if}
    </div>
  </section>

  <!-- Overview Section -->
  <section id="overview">
    <h2 class="section-title">Project Overview</h2>
    <div class="overview-content">
      <div class="overview-text">
        <p>{projectData.description}</p>
      </div>
      <div class="overview-image">
        <img
          src={projectData.imageUrl}
          alt="{projectData.title} Project Image"
        />
      </div>
    </div>
  </section>

  <!-- Tech Stack Section -->
  <section id="tech-stack">
    <h2 class="section-title">Tech Stack</h2>
    <div class="tech-stack">
      {#each projectData.tools as tool}
        <div class="tech-item">
          {tool.name}
        </div>
      {/each}
    </div>
  </section>

  <!-- Technical Deep Dive Section -->
  <section id="tech-deep-dive">
    <h2 class="section-title">Technical Deep Dive</h2>
    <div class="tech-deep-dive">
      <div class="tech-detail-card">
        <div class="tech-detail-header">
          <div class="tech-icon">
            <i class="fas fa-code"></i>
          </div>
          <h3 class="tech-detail-title">Development Approach</h3>
        </div>
        <div class="tech-detail-content">
          <p>For this project, I implemented a modern development approach focusing on performance and user experience. The project was built using industry best practices and the latest technologies.</p>
          <div class="code-snippet">
            <code>{`// Example implementation approach
const project = {
  architecture: "component-based",
  stateManagement: "context API",
  buildTool: "Vite",
  deployment: "CI/CD pipeline"
};`}</code>
          </div>
        </div>
      </div>
      
      <div class="tech-detail-card">
        <div class="tech-detail-header">
          <div class="tech-icon">
            <i class="fas fa-paint-brush"></i>
          </div>
          <h3 class="tech-detail-title">Design Implementation</h3>
        </div>
        <div class="tech-detail-content">
          <p>The design was carefully translated from Figma mockups to a responsive, accessible interface. Special attention was paid to ensure consistency across all devices and browsers.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Challenges Section -->
  <section id="challenges">
    <h2 class="section-title">Challenges & Solutions</h2>
    <div class="challenges-container">
      <div class="challenge-item">
        <div class="challenge-number">1</div>
        <div class="challenge-content">
          <h3 class="challenge-title">Performance Optimization</h3>
          <p class="challenge-description">The initial build had performance issues with large image assets and complex animations.</p>
          <div class="challenge-solution">
            <span class="solution-label">Solution:</span>
            Implemented lazy loading for images, code splitting for JavaScript bundles, and optimized CSS animations.
          </div>
        </div>
      </div>
      
      <div class="challenge-item">
        <div class="challenge-number">2</div>
        <div class="challenge-content">
          <h3 class="challenge-title">Cross-browser Compatibility</h3>
          <p class="challenge-description">Ensuring consistent behavior across different browsers and devices was challenging.</p>
          <div class="challenge-solution">
            <span class="solution-label">Solution:</span>
            Used autoprefixer for CSS and thorough testing across major browsers with BrowserStack.
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Results Section -->
  <section id="results">
    <h2 class="section-title">Project Statistics</h2>
    <div class="results-grid">
      <div class="result-item">
        <div class="result-number">85%</div>
        <div class="result-label">Performance Increase</div>
      </div>
      <div class="result-item">
        <div class="result-number">40%</div>
        <div class="result-label">Time Saved</div>
      </div>
      <div class="result-item">
        <div class="result-number">5★</div>
        <div class="result-label">User Rating</div>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery">
    <h2 class="section-title">Related Projects</h2>
    <div class="gallery-grid">
      {#each randomProjects as project}
        <div class="gallery-item">
          <a href={project.detailsLink}>
            <img src={project.imageUrl} alt="{project.title} Project" />
            <div class="gallery-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </section>
</main>

<!-- Footer -->
<footer>
  <div class="footer-content">
    <p>&copy; 2023 Dalton Fullstack Developer. All rights reserved.</p>
  </div>
</footer>

<!-- Footer -->
<footer>
  <div class="footer-content">
    <p>&copy; 2023 Dalton Fullstack Developer. All rights reserved.</p>
  </div>
</footer>

<style>
  :root {
    /** Font Sizes */
    font-size: 62.5%;
    --fs-100: 1.9rem;
    --fs-200: 2.2rem;
    --fs-300: 2.8rem;
    --fs-400: 3.6rem;
    --fs-500: 4.2rem;
    --fs-600: 6.2rem;
    /* Colors */
    --primary-color: #4fc2f7e0;
    --secondary-color: #18b3ded7;
    --background-color: rgb(1, 10, 22);
    --txt-h-color: #d3d9dd;
    --text-md-color: #bebebe;
    --small-txt: #bebebe;
    --secondary-color-2: rgb(12, 22, 37);
    /** Font Families */
    --inter: "Inter", sans-serif;
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--inter);
    background-color: var(--background-color);
    color: var(--text-md-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Header Styles */
  header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(1, 10, 22, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
  }

  nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: var(--fs-100);
    font-weight: 700;
    color: var(--primary-color);
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links a {
    color: var(--text-md-color);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav-links a::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  .nav-links a:hover::after {
    width: 100%;
  }

  /* Main Content */
  main {
    margin-top: 7rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;
  }

  /* Hero Section */
  .hero {
    padding: 5rem 0;
    text-align: center;
  }

  .project-title {
    font-size: var(--fs-400);
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: var(--txt-h-color);
    position: relative;
    display: inline-block;
  }

  .project-title::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary-color);
  }

  .project-subtitle {
    font-size: var(--fs-100);
    color: var(--small-txt);
    max-width: 800px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
  }

  .project-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2.5rem;
  }

  .project-links a {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: var(--background-color);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 600;
    font-size: var(--fs-100);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(79, 194, 247, 0.3);
  }

  .project-links a:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(79, 194, 247, 0.5);
  }

  /* Section Styles */
  section {
    padding: 5rem 0;
    position: relative;
  }

  .section-title {
    font-size: var(--fs-300);
    margin-bottom: 2.5rem;
    color: var(--primary-color);
    position: relative;
    display: inline-block;
  }

  .section-title::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: var(--primary-color);
  }

  /* Overview Section */
  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .overview-text {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.8;
  }

  .overview-image {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    position: relative;
  }

  .overview-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }

  .overview-image:hover img {
    transform: scale(1.05);
  }

  /* Tech Stack Section */
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }

  .tech-item {
    padding: 0.8rem 1.2rem;
    background-color: var(--secondary-color-2);
    border-radius: 30px;
    font-size: var(--fs-100);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(79, 194, 247, 0.2);
    transition: all 0.2s ease;
  }

  .tech-item:hover {
    background-color: rgba(79, 194, 247, 0.1);
    border-color: var(--primary-color);
  }

  .tech-item i {
    color: var(--primary-color);
    font-size: 1rem;
  }

  /* Technical Deep Dive Section */
  .tech-deep-dive {
    margin-top: 3rem;
  }

  .tech-detail-card {
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .tech-detail-card:hover {
    border-color: var(--primary-color);
  }

  .tech-detail-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    background-color: rgba(79, 194, 247, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(79, 194, 247, 0.3);
  }

  .tech-icon i {
    color: var(--primary-color);
    font-size: 1.2rem;
  }

  .tech-detail-title {
    font-size: var(--fs-200);
    font-weight: 600;
    color: var(--txt-h-color);
  }

  .tech-detail-content {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.8;
  }

  .code-snippet {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    padding: 0.8rem;
    margin-top: 1rem;
    overflow-x: auto;
    border-left: 3px solid var(--primary-color);
  }

  .code-snippet code {
    font-family: "Courier New", monospace;
    font-size: 0.85rem;
    color: #a5d6ff;
  }

  /* Challenges Section */
  .challenges-container {
    margin-top: 3rem;
  }

  .challenge-item {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .challenge-item:hover {
    border-color: var(--primary-color);
  }

  .challenge-number {
    font-size: var(--fs-300);
    font-weight: 700;
    color: var(--primary-color);
    opacity: 0.5;
    line-height: 1;
    flex-shrink: 0;
  }

  .challenge-content {
    flex: 1;
  }

  .challenge-title {
    font-size: var(--fs-200);
    margin-bottom: 0.5rem;
    color: var(--txt-h-color);
  }

  .challenge-description {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.7;
  }

  .challenge-solution {
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: var(--fs-100);
    color: var(--small-txt);
  }

  .solution-label {
    color: var(--primary-color);
    font-weight: 600;
    margin-right: 0.3rem;
  }

  /* Technical Deep Dive Section */
  .tech-deep-dive {
    margin-top: 3rem;
  }

  .tech-detail-card {
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .tech-detail-card:hover {
    border-color: var(--primary-color);
  }

  .tech-detail-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .tech-icon {
    width: 40px;
    height: 40px;
    background-color: rgba(79, 194, 247, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(79, 194, 247, 0.3);
  }

  .tech-icon i {
    color: var(--primary-color);
    font-size: 1.2rem;
  }

  .tech-detail-title {
    font-size: var(--fs-200);
    font-weight: 600;
    color: var(--txt-h-color);
  }

  .tech-detail-content {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.8;
  }

  .code-snippet {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    padding: 0.8rem;
    margin-top: 1rem;
    overflow-x: auto;
    border-left: 3px solid var(--primary-color);
  }

  .code-snippet code {
    font-family: "Courier New", monospace;
    font-size: 0.85rem;
    color: #a5d6ff;
  }

  /* Challenges Section */
  .challenges-container {
    margin-top: 3rem;
  }

  .challenge-item {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    align-items: flex-start;
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .challenge-item:hover {
    border-color: var(--primary-color);
  }

  .challenge-number {
    font-size: var(--fs-300);
    font-weight: 700;
    color: var(--primary-color);
    opacity: 0.5;
    line-height: 1;
    flex-shrink: 0;
  }

  .challenge-content {
    flex: 1;
  }

  .challenge-title {
    font-size: var(--fs-200);
    margin-bottom: 0.5rem;
    color: var(--txt-h-color);
  }

  .challenge-description {
    font-size: var(--fs-100);
    color: var(--text-md-color);
    line-height: 1.7;
  }

  .challenge-solution {
    margin-top: 0.8rem;
    padding-top: 0.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: var(--fs-100);
    color: var(--small-txt);
  }

  .solution-label {
    color: var(--primary-color);
    font-weight: 600;
    margin-right: 0.3rem;
  }

  /* Results Section */
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .result-item {
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .result-item:hover {
    border-color: var(--primary-color);
  }

  .result-number {
    font-size: var(--fs-300);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .result-label {
    font-size: var(--fs-100);
    color: var(--small-txt);
  }

  /* Results Section */
  .results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .result-item {
    background-color: var(--secondary-color-2);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.2s ease;
  }

  .result-item:hover {
    border-color: var(--primary-color);
  }

  .result-number {
    font-size: var(--fs-300);
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  .result-label {
    font-size: var(--fs-100);
    color: var(--small-txt);
  }

  /* Gallery Section */
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2.5rem;
  }

  .gallery-item {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: relative;
    transition: all 0.2s ease;
    height: 200px;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: linear-gradient(to top, rgba(1, 10, 22, 0.9), transparent);
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .gallery-item:hover .gallery-overlay {
    transform: translateY(0);
  }

  .gallery-overlay h3 {
    font-size: var(--fs-100);
    margin-bottom: 0.3rem;
    color: var(--txt-h-color);
  }

  .gallery-overlay p {
    font-size: 0.85rem;
    color: var(--small-txt);
  }

  /* Footer */
  footer {
    padding: 3rem 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 5rem;
  }

  .footer-content {
    font-size: var(--fs-100);
    color: var(--small-txt);
  }

  /* Loading Animation */
  .loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-color);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
  }

  .loader.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .spinner {
    width: 60px;
    height: 60px;
    border: 3px solid rgba(79, 194, 247, 0.2);
    border-top-color: var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    .overview-content {
      grid-template-columns: 1fr;
    }
    .project-title {
      font-size: var(--fs-300);
    }
    .section-title {
      font-size: var(--fs-200);
    }
    .project-links {
      flex-direction: column;
      align-items: center;
    }
    .gallery-grid {
      grid-template-columns: 1fr;
    }
    .challenge-item {
      flex-direction: column;
      gap: 1rem;
    }
    .tech-detail-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
</style>
