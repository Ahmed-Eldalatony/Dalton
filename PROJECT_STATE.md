This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: cloudflare-env.d.ts, pnpm-yaml.json, .git/, .open-next/, migrations/, Notes/, imgs/, src/components/ui, src/components/smart-form.tsx, src/components/strength-meter.tsx, src/app/globals.css, package.json, repomix.config.json, **.svg
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
src/
  components/
    About.svelte
    Header.svelte
    Projects.svelte
    Testominial.svelte
  css/
    media.css
    style.css
  lib/
    index.ts
  routes/
    +layout.svelte
    +page.svelte
  app.css
  app.d.ts
  app.html
static/
  robots.txt
.gitignore
.npmrc
.prettierignore
.prettierrc
eslint.config.js
README.md
svelte.config.js
tsconfig.json
vite.config.ts
```

# Files

## File: src/components/About.svelte
````
<!-- src/components/About.svelte -->
<script>
    // Component logic can be added here if needed in the future
</script>

<section id="about">
    <div class="introduction">
        <span class="hello">Hello,</span>
        <h1>Dalton Is Here!</h1>
        <h2>Frontend Developer</h2>
        <p>
            Hi, I am <b>Ahmed Dalton</b> - a Freelancer working as a Frontend developer helping unique startups
            <br />
            and small projects to <span class="shine">Shine</span>.
        </p>
        <div class="btn-cont">
            <!-- <span class="sudo" class:light-on={/* isLightOn prop or global state */}></span> -->
            <a href="#hire-me" class="btn glass-f">Get in touch</a>
        </div>
    </div>
    <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
</section>

<style>
    /* Specific styles for the About section, copied from your style.css */
    .introduction {
        margin: 3rem auto 0 0rem;
        width: 70%;
    }
    .introduction .hello {
        color: var(--primary-color);
        font-size: var(--fs-400);
        margin-bottom: 2rem;
        display: inline-block;
    }
    .introduction h1,
    .primary-header {
        color: var(--txt-h-color);
    }
    .introduction h1,
    h2 {
        font-size: var(--fs-500);
        font-weight: 700;
    }
    .introduction h2 {
        color: #ccc;
    }
    .introduction p {
        margin: 3rem 0;
        width: 35ch;
        font-size: var(--fs-200);
        color: var(--small-txt);
        line-height: 1.5;
    }
    .introduction .shine {
        font-size: 2.4rem;
        font-weight: 600;
        color: #41b7ee;
        text-shadow: 0px 0px 3px var(--primary-color);
    }
    .btn-cont {
        position: relative;
        width: fit-content;
    }
    .btn {
        padding: 1rem 2.5rem;
        border-radius: 50px;
        font-size: var(--fs-200);
        color: white;
        font-weight: 700;
    }
    #about {
        display: flex;
        padding: 12rem 2rem;
    }
    #about .my-photo {
        width: 28%;
        aspect-ratio: 1/1;
        object-fit: cover;
        align-self: center;
        transform: translate(0rem, -10rem);
        border-radius: 50%;
        border: solid;
    }
    .glass-f {
        background-color: transparent;
        background-image: linear-gradient(145deg, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.1));
        border-radius: 50px;
        border: solid var(--primary-color) 1px;
    }
    .sudo {
        /* Styles for the sudo element if used locally */
        /* You might need to adjust this based on your exact effect */
        /*
        position: absolute;
        top: -5px;
        left: -5px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        background-color: var(--primary-color); 
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
        */
    }
    .sudo.light-on {
        /* Styles for the sudo element when active */
        /*
        opacity: 0.6; 
        */
    }
    /* Ensure global variables are accessible */
    :global(:root) {
        --primary-color: #4fc2f7e0;
        --secondary-color: #18b3ded7;
        --background-color: rgb(1, 10, 22);
        --txt-h-color: #d3d9dd;
        --small-txt: #bebebe;
        --fs-200: 2.2rem;
        --fs-400: 3.6rem;
        --fs-500: 5.6rem;
        /* Add other necessary :root variables if needed */
    }
</style>
````

## File: src/components/Header.svelte
````
<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let isLightOn;
  export let activeSection; 

  // Svelte's way of sending events up to the parent component
  const dispatch = createEventDispatcher();

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Hire me', href: '#hire-me' }
  ];

  let navLinkElements = []; 
  let indicatorStyle = '';
  let ready = false;

  $: if (ready) {
    const activeIndex = navItems.findIndex(item => item.href === `#${activeSection}`);
    const activeEl = navLinkElements[activeIndex];
    
    if (activeEl) {
      indicatorStyle = `
        left: ${activeEl.offsetLeft}px;
        width: ${activeEl.offsetWidth}px;
      `;
    }
  }
  
  let headerCont;
  let navCont;
  let navUl;
  
  onMount(() => {
    setTimeout(() => ready = true, 50);

    window.onscroll = () => {
      if (!headerCont || !navCont || !navUl) return;

      const isScrolled = window.scrollY >= 100;
      const isWideScreen = window.innerWidth >= 720;
      
      if (isScrolled) {
        headerCont.style.width = "26em";
        navCont.style.width = "8em";
        navUl.style.display = "none"; 
      } else {
        headerCont.style.width = "85%";
        navCont.style.width = isWideScreen ? "32em" : "18em";
        navUl.style.display = "flex";
        navUl.style.pointerEvents = "auto";
      }
    };
  });
</script>

<div class="header-cont " bind:this={headerCont}>
    <header class="">
        <span class="logo">
          <img src="/imgs/Group 3 (1).svg" alt="Dalton Logo">
        </span>
        <div class="nav-container glass-f" bind:this={navCont}>
          <span class="sudo" class:light-on={isLightOn}></span>
          <nav>
            <ul bind:this={navUl}>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#hire-me">Hire me</a></li>
            </ul>
          </nav>
        </div>
        <div class="mode" on:click={toggleTheme} on:keydown on:keypress role="button" tabindex="0">
          <span class="sudo" class:light-on={isLightOn}></span>
          <i class="fa-regular fa-lightbulb glass-f"></i>
        </div>
      </header>

</div>
````

## File: src/components/Projects.svelte
````
<script>
  import { onMount } from 'svelte';

  const projects = [
    {
      title: 'FMT-C',
      imageUrl: '/imgs/fmt-c.png',
      link: 'https://fmt-c.com/ar',
      description: 'A project for a real estate and construction company in the UAE.',
      designer: 'Ahmed Dalton',
      designerLink: '#about',
      tools: [{ name: 'React JS', class: 'react' }, { name: 'Tailwind', class: 'tailwind' }],
      category: ['favorite', 'full-stack']
    },
    {
      title: 'Baddel',
      imageUrl: '/imgs/baddel.png',
      link: 'https://baddel.vercel.app/ar',
      description: 'A project listing alternatives to boycotted products.',
      designer: 'Ahmed Dalton',
      designerLink: '#about',
      tools: [{ name: 'React JS', class: 'react' }, { name: 'Tailwind', class: 'tailwind' }],
      category: ['full-stack']
    },
    {
      title: 'The Green Tree Initiative',
      imageUrl: '/imgs/Screenshot-2024-02-11-at-18-56-39-The-Green-Tree-Intetiative.png',
      link: 'https://green-tree-intiative.netlify.app/',
      description: 'A concept for a non-profit helping people and the environment.',
      designer: 'Ahmed Dalton',
      designerLink: '#about',
      tools: [{ name: 'React JS', class: 'react' }, { name: 'Tailwind', class: 'tailwind' }],
      category: ['favorite', 'full-stack']
    },
    {
      title: 'Bouncer',
      imageUrl: '/imgs/Bouncer.png',
      link: 'https://Bouncer.pages.dev/',
      description: 'An eCommerce Website created with React and Tailwind.',
      designer: 'Almaz Bisenbaev',
      designerLink: 'https://almazbisenbaev.gumroad.com/',
      tools: [{ name: 'React JS', class: 'react' }, { name: 'Tailwind', class: 'tailwind' }],
      category: ['full-stack']
    },
    {
      title: 'Sky Host',
      imageUrl: '/imgs/Sky-Host.jpg',
      link: 'https://sky-host.pages.dev/',
      description: 'A hosting platform concept created with HTML, CSS, and JavaScript.',
      designer: 'EuroART93',
      designerLink: '#',
      tools: [{ name: 'HTML5', class: 'html' }, { name: 'CSS3', class: 'css' }, { name: 'JavaScript', class: 'javascript' }],
      category: ['static']
    },
    {
      title: 'Khoomie',
      imageUrl: '/imgs/Khoomie.png',
      link: 'https://Khoomie.pages.dev/',
      description: 'An eCommerce website concept.',
      designer: 'Michael Ajah',
      designerLink: 'https://dribbble.com/shots/15282101-Khoomi-Ecommerce-UI-Kit',
      tools: [{ name: 'HTML5', class: 'html' }, { name: 'CSS3', class: 'css' }, { name: 'JavaScript', class: 'javascript' }],
      category: ['static']
    },
    {
      title: 'Marknet',
      imageUrl: '/imgs/Marknet.png',
      link: 'https://marknet.pages.dev/',
      description: 'A marketing website concept.',
      designer: 'Adel Ahmed',
      designerLink: 'https://dribbble.com/shots/10837061-Marketing-FREE-XD',
      tools: [{ name: 'HTML5', class: 'html' }, { name: 'CSS3', class: 'css' }, { name: 'JavaScript', class: 'javascript' }],
      category: ['static']
    }
  ];

  const filterTabs = ['All', 'Favorite', 'Full-Stack', 'Static'];
  let activeFilter = 'All';

  // --- Start of Animation Logic ---

  // 1. Create variables to hold the tab button elements and the indicator's style
  let tabElements = [];
  let indicatorStyle = '';
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

  // --- End of Animation Logic ---

  $: filteredProjects = projects.filter(p => {
    if (activeFilter === 'All') return true;
    return p.category.includes(activeFilter.toLowerCase().replace('-', ' '));
  });
</script>

<style>


.project .tools{
    display: flex;
    gap: 1.5rem;
    padding: 1.3rem;
}
.project .tools span {
text-decoration: underline;
text-underline-offset: .2rem;
text-decoration-thickness: .2rem;
padding: .5rem 1rem;
border-radius: 100vw;
}
.project .tools .html{
background-color: rgba(247, 147, 32, 0.85);
}
.project .tools .css{
background-color: rgba(65, 183, 238,0.85);
}
.project .tools .javascript{
background-color:rgba(231, 212, 60, 0.85);
}
.project .tools .tailwind{
background-color:rgba(38, 230, 214, 0.85);
}
.project .tools .react{
background-color:rgba(77, 219, 255, 0.85);
}
.project .tools .active{
background-color:rgba(255, 77, 77, 0.85);
}

.tools span:hover{
    opacity: .88;
}

.project:hover{
    box-shadow: 0px 0px 2rem #70c6ff67;
    transform:scale(101%);
    transition: .2s all;
}
.project > *:not(a){
    padding: 3rem;
}
.project img{
    width: 100%;
    object-fit: cover;
    object-position: top;
    min-height: 26rem;
    max-height: 26rem;
}
.project p{
    font-size: var(--fs-100);

}
.project a{
    text-decoration: underline;
    font-weight: 500;
}

.project i {
    font-size:var(--fs-500);
    padding: 1rem  3rem 2rem ;
    color: #eee241;
}


  /* Styles for the filter tabs have been updated for the animation */
  .filter-tabs {
    position: relative; /* This is the anchor for the absolute indicator */
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  /* The new indicator element for the active tab background */
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

#projects{
    margin-top: 50px;
}

#projects .projects-cont{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(340px, 1fr) );
    gap: 2.4rem;
}
.project {
    background-color: var(--secondary-color-2);
    overflow: hidden;
    border-radius: 1.7rem;
}


.project > *:not(a){
    padding: 3rem;
}


.primary-header{
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
    margin-bottom: 8rem ;
    letter-spacing: 1px;
    color:var(--small-txt) ;
}

</style>
<section id="projects">
  <span class="primary-header">Projects</span>
  <p class="secondary-header">Here Is Some Of My Work</p>

  <div class="filter-tabs">
    <span class="active-tab-indicator" class:ready style={indicatorStyle}></span>

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
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src={project.imageUrl} alt="{project.title} Website" />
        </a>
        <p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
          {project.description}
        </p>
        <span>Designed by <a href={project.designerLink} target="_blank" rel="noopener noreferrer"><b>{project.designer}</b></a></span>
        <div class="tools">
          {#each project.tools as tool}
            <span class={tool.class}>{tool.name}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
````

## File: src/components/Testominial.svelte
````
<script>
</script>

<section id="testimonials">
    <h3 class="primary-header">What Clients Say</h3>
    <div class="testimonial">
        <div><img src="/imgs/Eng-Ahmed-samy.png" alt="Client photo" /></div>
        <div>
            <p>
                A very respectable and helpful person. This was our first collaboration, and it was very
                productive. I will rely on him for my coming projects.
            </p>
            <div class="client-cont">
                <span class="client">_Ahmed Beghet</span> From
                <a
                    class="freelance-website"
                    href="https://mostaql.com/u/Ahmed_Dalton"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/imgs/mostaql.png" alt="Mostaql" /><span>Mostaql</span>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Specific styles for the Testimonials section, copied from your style.css */
    #testimonials {
        margin-top: 5em;
    }
    .testimonial {
        display: flex;
        width: 80%;
        margin: 5em auto;
        background: var(--secondary-color-2); /* Defined in :root */
        border-radius: 1em;
        overflow: hidden;
        align-items: center;
    }
    .testimonial img {
        width: 12em;
    }
    .freelance-website {
        align-items: center;
        color: var(--secondary-color) !important; /* Defined in :root */
        display: flex;
    }
    .freelance-website img {
        margin: 0 0.5em;
        width: 1.5em !important;
    }
    .client-cont {
        margin-left: 1em;
        margin-top: 1em;
        display: flex;
        gap: 0.3em;
        align-items: center;
    }
    .testimonial p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
            Verdana, sans-serif;
        font-size: var(--fs-200); /* Defined in :root */
        font-weight: 500;
        padding-left: 1em;
        width: 40ch;
        color: var(--txt-h-color); /* Defined in :root */
    }
    .testimonial span {
        font-weight: 600;
        color: var(--small-txt); /* Defined in :root */
        display: inline-block;
    }
    .primary-header {
        font-size: var(--fs-600); /* Defined in :root */
        font-weight: 700;
        letter-spacing: 1px;
        display: block;
        text-align: center;
        margin-bottom: 2rem;
    }
    /* Ensure global variables are accessible */
    :global(:root) {
        --primary-color: #4fc2f7e0;
        --secondary-color: #18b3ded7;
        --background-color: rgb(1, 10, 22);
        --txt-h-color: #d3d9dd;
        --small-txt: #bebebe;
        --secondary-color-2: rgb(12, 22, 37);
        --fs-200: 2.2rem;
        --fs-600: 6.2rem;
        /* Add other necessary :root variables if needed */
    }
</style>
````

## File: src/css/media.css
````css
@media (max-width:1300px) {
    :root{
        font-size: 50%;
    }
    .project img{
        width: 100%;
        object-fit: cover;
        min-height: 22em;
        max-height: 22em;
    }
    
    .container{
        width: 1150px;
    }
}

@media (max-width:1100px) {
    :root{
        font-size: 50%;
        -webkit-text-size-adjust: none;
    }
   .container{
    width: 900px;
    padding: 0 1em;
   } 
    
    .project img{
        width: 100%;
        object-fit: cover;
        min-height: 20em;
        max-height: 20em;
    }
    #projects .projects-cont{
        padding: 5rem 10rem;
    }
}

@media (max-width:900px) {
    :root{
        font-size: 40%;
    }
    body{
        font-size: 1.9rem;
    }
    header {
    min-height:50px;
    max-height:50px;
    position: relative;
    }
    .container{
        width: 750px;
    }
    #projects .projects-cont{
    padding: 0rem ;
    }
#hire-me form input {
grid-column: span 2;
width: 100%;
padding: 2.5rem 3.5rem;
}
.skills .comp{
        width: 5.5em;
    }
    .react-icon{
        width: 3.9em;
    }
    .firebase{
        width:3.5em;
    }
}

@media (max-width:720px) {
:root{
    font-size: 34%;
}
    .testimonial p{
 font-size: 1.8rem; 
}
.container{
    width: 550px;
}

.project img{
    min-height: 34em;
    max-height: 34em;
}
#about{
    margin-top: 3em;
}
.header-cont{
    top: 4em;
}
.nav-container{
    border-radius: 1.5em;
    position: absolute;
    right: 50%;
    transform: translate(50%);
    animation: scale-w 1.2s forwards ;
}
header .nav-container{
    width: 18em ;
}

.nav-container .light-on{
    border-radius: 1.5em;
}
header:hover .nav-container{
    width: 18em !important;
}

header nav{
    border-radius: 50px !important;
    max-height:fit-content;
    padding: 0;
}
header nav ul{
    flex-wrap: wrap;
    padding: 1rem  ;
    animation: scale-h .5s forwards .6s;
    align-items: center;
}
header nav ul li{
padding:.6em 0;
text-align: center;
width: 50%; 
font-size: 2.8rem;
font-weight: bolder;
/* ! Animaition */

}

li:hover{
    transition: .2s;
}
}


@media (max-width:550px) {
:root{
    /* font-size: %; */
}
.testimonial {
   width: 95%; 
}
#hire-me form {
    width: 80%;
}
#projects .projects-cont{
    grid-template-columns: repeat( auto-fit, minmax(230px, 1fr) );
}
.container{
    width: 420px;
}
.skills .comp{
    display: none;
}.firebase{
    margin-left: -1em;
}
.skills-cont .skills{
    gap: .7em;
}
.project img{
    min-height: 25em;
    max-height: 25em;
    }
}
@media (max-width:400px) {
:root{
    font-size: 28%;
}
.container {
    width: 300px;
}
.introduction h1,h2{
    font-size: var(--fs-500);
}

.testimonial img{
   width: 9em; 
}
 .testimonial p{
width: 32ch ;    
}

 
#projects .projects-cont{
    grid-template-columns: repeat( auto-fit, minmax(230px, 1fr) );
}


}
````

## File: src/css/style.css
````css
:root{
/** Font Sizes  */
    
font-size: 62.5%;
--fs-100:1.9rem;
--fs-200:2.2rem;
--fs-300:2.8rem;
--fs-400:3.6rem;
--fs-500:5.6rem;
--fs-600:6.2rem;
/* * Colors */
--primary-color:#4fc2f7e0 ;
--secondary-color:#18b3ded7 ;
--background-color:rgb(1, 10, 22) ; 
--txt-h-color:#d3d9dd;
--small-txt:#bebebe;
--secondary-color-2: rgb(12, 22, 37);


/* --glass- */
/** Font Families */
--inter:'Inter', sans-serif;
scroll-behavior: smooth;
}

/* ! Normalize */
*{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
li{
    list-style: none;
}
a{
    color: white;
    text-decoration: none;
}
body{
    font-size: 1.7rem;
    color: #eee;
    background-color: var(--background-color);
    font-family:var(--inter);
    scroll-behavior: smooth;
}
/*! Styling */
.loading-sc{
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 9999;
    display: block;
    animation: loadingSc 1.2s forwards;
}

@keyframes loadingSc {
    0%{
    }
    70%{
        opacity: 1;
    }
    99%{
   opacity: 0;
}
100%{
   opacity: 0;

z-index: -1;

}
}
.wrapper{
    display: none;
}
.loading-item{
    width: 100px;
    height: 30px;
    display: block;
    z-index: 10;
    /* border: solid var(--secondary-color); */
    border-radius: 100vw;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%);
    box-shadow: 0px 0px 0px var(--primary-color);
    animation: loading 1.2s forwards;
    
}
    .skills .comp{
        width: 6em;
    }
    .react-icon{
        width: 4.5em;
    }
    .firebase{
        width:3em;
    }
 

@keyframes loading {
    0%{}
    100%{
        box-shadow: 0px 1px 20px var(--primary-color);
        width: 115px;
    }

}
.container{
    width: 1300px;
    padding: 0 6em;
    margin: 0 auto;
}
header.container{
    padding: 0 2em;
}
header{
    display: flex;
    min-height: 5em;
    max-height: 5em;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 0 3em;

}
.header-cont{
    position: sticky;
    top: 1.1rem;
    z-index: 100;
    background-color: var(--background-color);
}
header .logo img{
    width: 5em ;
}
.nav-container{
    position: relative;
    /* width: 50rem; */
    
}
header nav{
    width: 100%;
    padding: 0 1.4em;
    max-height: 3em;
   
}

.glass-f{
background-color: transparent;
background-image: linear-gradient(145deg,rgba(255, 255, 255,.22) ,rgba(255, 255, 255,.1));
border-radius: 50px;
border: solid var(--primary-color) 1px;
}
.light-on{
    width: 100%;
    height: 100%;
    background-color: var(--primary-color);
    z-index: -10;
    position:absolute;
    right: 50%;
    transform: translate(50%);
    border-radius: 4rem;
    box-shadow: 0 0px 2.5rem var(--primary-color);
    opacity: .9;
}


nav ul{
    position: relative;
    display: flex; 
    padding: .2em;
    justify-content: space-between;

}

/* animation */
.header-cont{
    /* width:70rem !important; */
    width: 85% ; 
    transition:all 350ms  ;
    margin: 0 auto;
    border-radius: 100vw;
    box-shadow: 0 0 1rem var(--primary-color) ;
}
.header-cont:hover{
    width: 85% !important;
}
header {
    transition: All 300ms   ;
    width: 100% !important;
}

nav ul{
    transition: 150ms all;
    display: flex;
}
header:hover  ul{
    display: flex !important;
    opacity: 1;
}

header .nav-container {
    transition: 100ms all;
    width: 32em ;
    min-height: 2.5em;
}

header:hover .nav-container{
    width:32em !important;
}



header nav ul li {
    font-size:var(--fs-100);
    padding: .3em .7em;

}
.mode{
    /* display: inline-block; */
  border-radius: 100vw;
  position: relative;
}
li:hover{
    border-radius: 100vw;
    /* ? in hover of the nav the sudo element will turn a little bit off and the li will have the sudo color of light on    */

}
header :hover .light-on{
    transition: all .2s;
    opacity: .6;
}


.btn-cont:hover .light-on{
    transition: all .2s;
    opacity: .6;
    
}
header li:hover {
    transition: all .2s;
    background-color:#5acbffa4;  
    box-shadow: 0 0 1rem var(--primary-color) ;
}

header:hover .mode .light-on{
    transition: all .2s;

    opacity: .8;
}
.mode .glass-f{
    border: none;
    background: transparent;
}


.mode i{
    font-size:3.2rem;
    position: relative;
}

.btn-cont{
    position:relative
}

/** Landing Section */
.introduction{
    margin: 3rem auto 0 0rem;
    width: 70%;
}
.introduction .hello{
    color: var(--primary-color);
    font-size: var(--fs-400);
    margin-bottom: 2rem;
display:inline-block;
}
.introduction h1,.primary-header{
    color: var(--txt-h-color);
}
.introduction h1,h2{
font-size: var(--fs-500);
    font-weight:700 ;
}
.introduction h2{
    color: #ccc;
}
.introduction p{
    margin:  3rem 0 ;
    width: 35ch;
    font-size: var(--fs-200);
    color: var(--small-txt);
    line-height: 1.5;
}
.introduction .shine{
    font-size: 2.4rem;
    font-weight:600;
    color: #41b7ee;
    text-shadow: 0px 0px 3px var(--primary-color);

}

.btn-cont{
    width: fit-content;
}
.btn{
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: var(--fs-200);
    color: white;
    font-weight: 700;
}

#about{
    display: flex;
    padding: 12rem 2rem;
}

#about .my-photo{
    width: 28%;
    aspect-ratio: 1/1;
    object-fit: cover;
    align-self: center;
    transform: translate(0rem,-10rem);
    border-radius: 50%;
    border: solid ;
}

#projects{
    margin-top: 50px;
}
.primary-header{
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
    margin-bottom: 8rem ;
    letter-spacing: 1px;
    color:var(--small-txt) ;
}
#projects .projects-cont{
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(340px, 1fr) );
    gap: 2.4rem;
}
.project {
    background-color: var(--secondary-color-2);
    overflow: hidden;
    border-radius: 1.7rem;
}
/* .bouncer{
    position: relative;
}
.bouncer::before{
content:"Under Development";
background-color: rgb(12, 155, 12);
position: absolute;
padding: .4rem 1rem;
border-radius: 10rem;
top:1rem;
left:1rem; 
} */
/* .fav::after{
    content: "⭐";
    background: rgba(251, 255, 10, 0.5);
    padding: 1.3rem;
    font-size: 1.8rem;
    line-height: 1.2;
    position: absolute; 
    border-radius: 5rem;
    top: 1rem;
    right: 1rem;
} */
.project .tools{
    display: flex;
    gap: 1.5rem;
    padding: 1.3rem;
}
.project .tools span {
text-decoration: underline;
text-underline-offset: .2rem;
text-decoration-thickness: .2rem;
padding: .5rem 1rem;
border-radius: 100vw;
}
.project .tools .html{
background-color: rgba(247, 147, 32, 0.85);
}
.project .tools .css{
background-color: rgba(65, 183, 238,0.85);
}
.project .tools .javascript{
background-color:rgba(231, 212, 60, 0.85);
}
.project .tools .tailwind{
background-color:rgba(38, 230, 214, 0.85);
}
.project .tools .react{
background-color:rgba(77, 219, 255, 0.85);
}
.project .tools .active{
background-color:rgba(255, 77, 77, 0.85);
}

.tools span:hover{
    opacity: .88;
}

.project:hover{
    box-shadow: 0px 0px 2rem #70c6ff67;
    transform:scale(101%);
    transition: .2s all;
}
.project > *:not(a){
    padding: 3rem;
}
.project img{
    width: 100%;
    object-fit: cover;
    object-position: top;
    min-height: 26rem;
    max-height: 26rem;
}
.project p{
    font-size: var(--fs-100);

}
.project a{
    text-decoration: underline;
    font-weight: 500;
}

.project i {
    font-size:var(--fs-500);
    padding: 1rem  3rem 2rem ;
    color: #eee241;
}
.skills-cont{
    margin-top: 4rem;
    display: flex;
    align-items: center;
    width: max-content;

}
    
.skills-cont .par{
    margin-right: 3rem;
font-size: var(--fs-300);
display: block;
}
.skills-cont .skills {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}
.skills span{
    font-size: var(--fs-200);
    margin-bottom: 1rem;
}

.skills .pointer{
position: absolute;
width: max-content;
bottom: -70px;
right: 50%;
color: var(--small-txt);
transform: translateX(50%);
}
.skills .pointer::after{
content:"▲";
font-size: 1.5rem;
position: absolute;
top: -20px;
right: 50%;
transform: translateX(50%);
color: var(--small-txt);
animation: upDown .4s infinite ;
}
@keyframes upDown {
   0%{} 
   100%{top:-28px;}
}
.skills  ul{
flex-direction: column;
gap: 1.5rem;
}
.firebase{
    width:4em ;
}
.skills i{
font-size: 7rem;
}
.skills li{
    position: relative;

}
.skills li:first-child i{
    color: #f79220;
}

.skills li:nth-child(2) i{
    color: #41b7ee;
}
.skills li:nth-child(3) i{
    color: #eee241;
}
.skills li:hover ul{
    display: flex;
    background-color: #41b7ee;
    padding: 2rem;
    border-radius: 1.5rem;
    background-color: var(--background-color);
    box-shadow: 0px 0px 2.5rem #70c6ff67;
    position: absolute;
    width: 30rem;
   top: 4rem; 
   left: 1.5rem;
   z-index: 3;
   
}
.skills li ul{
    display: none;
    animation: scaleH 1s forwards;
}
@keyframes scaleH {
    
    0%{
        /* transform: scaleY(0); */
        max-height: 0;
    }
    100%{
        /* transform: scaleY(1); */
        max-height:50rem;
    }
}
.project > *:not(a){
    padding: 3rem;
}

#more{
    margin-top: 15rem;
    padding: 0;
}
/* ! Testimonials */
#testimonials{ 
    margin-top: 5em;
}
.testimonial{
    display: flex;
    width: 80%;
    margin: 5em auto;
    background: var(--secondary-color-2);
    border-radius: 1em;
    overflow: hidden;
    align-items: center;
}
.testimonial img{
    width:12em ;
    
}
.freelance-website{
    align-items: center;
    color: var(--secondary-color) !important;
    display: flex;
}
.freelance-website img{
    margin:0 .5em;
    width:1.5em !important ;
}
.client-cont{
    margin-left: 1em;
    margin-top: 1em;
    display: flex;
    gap: .3em;
    align-items: center;
}
.testimonial p{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: var(--fs-200);
    font-weight: 500;
    padding-left: 1em;
    width: 40ch;
    color: var(--txt-h-color);
}
.testimonial span{
    font-weight: 600;
    color:var(--small-txt);
display: inline-block;
}
#hire-me{
    margin:10rem 0 ;
    display: relative;
}
#hire-me form {
    display: grid;
    justify-items: center;
    gap: 2rem;
    width: 60%;
    margin: 0 auto;
}
#hire-me input{
    font-size: var(--fs-100);
    padding: 2rem;
    border-radius: 100px;
    color:#ddd;
    column-span: 1;
    width: 100%;
}
#hire-me input::placeholder{
    color: #ddd;
}
#hire-me input:focus{
    outline: transparent;
    box-shadow: 0 0 1.5rem var(--primary-color);
}

#hire-me input:nth-child(5){
    grid-column: span 2;
    width: 100%;
    min-height: 30rem;
    margin: 0 auto;
    border-radius: 4rem;
    padding-bottom: 21rem;
}
#hire-me  .btn-cont{
    margin-top: 3rem;
    grid-column: span 2;

}
.txt-grad{
    margin-top: 10rem;
    background-image: linear-gradient(90deg,var(--primary-color),rgb(5, 36, 65));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12rem;
    font-weight: 800;
    text-align: center;
    display: block;

}
footer{
background-color: var(--secondary-color-2);
}
footer .container{
    padding: 2rem 10rem;
}
footer .work{
   margin-bottom: 1rem;
   display: inline-block;
font-size:1.8rem ;
font-weight: 500;
color:var(--small-txt);
}
footer .work div{
    display: flex;
    align-items: center;
}
footer .work div a{     
    padding: 1rem;
    display: flex;
    align-items: center;
    color: var(--secondary-color);
}
footer .work div img{
    width: 2.7rem;
    margin-right: .5rem;
}

footer img{
    width: 3rem;
}
````

## File: src/lib/index.ts
````typescript
// place files you want to import through the `$lib` alias in this folder.
````

## File: src/routes/+layout.svelte
````
<script lang="ts">
	import '../app.css';
  import '../css/style.css';
  import '../css/media.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="">
{@render children?.()}
</div>
````

## File: src/routes/+page.svelte
````
<script>
  import { onMount } from 'svelte';
  import Header from '../components/Header.svelte';     // <-- Import the new Header
  import About from '../components/About.svelte';
  import Testominial from '../components/Testominial.svelte';
  import Projects from '../components/Projects.svelte';

  // --- State managed by the main app ---
  let isLoading = true;
  let isLightOn = true;
  let activeSection = ''; // Will hold the ID of the section in view

  // Form input variables
  let firstName = '';
  let lastName = '';
  let email = '';
  let phone = '';
  let message = '';
  
  // --- Section Observer Logic ---
  let sectionElements = {}; // To hold the <section> DOM elements

  onMount(() => {
    // Hide loading screen
    setTimeout(() => isLoading = false, 850);

    // This observer watches the sections and updates `activeSection`
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target.id;
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' }); // Triggers when section is in the middle of the screen

    // Tell the observer which elements to watch
    Object.values(sectionElements).forEach(el => {
      if(el) observer.observe(el);
    });

    // EmailJS and Safari check logic remains here
    if (typeof emailjs !== 'undefined') {
      emailjs.init("sPfygCgnCHysm3zw6");
    }
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
      window.alert("Please note: This website may not be fully responsive on Safari mobile.");
    }
  });

  // --- Event Handlers ---
  function handleToggleTheme() {
    isLightOn = !isLightOn;
  }

  function sendEmail() {
    if (typeof emailjs === 'undefined') {
      alert("Email service is not available. Please try again later.");
      return;
    }
    const params = { from_name: `${firstName} ${lastName}`, message, email_id: email, phone };
    emailjs.send("service_e9dlam5", "template_x6zsbs9", params).then(() => {
        alert("Message Sent Successfully!");
        firstName = ''; lastName = ''; email = ''; phone = ''; message = '';
      }, (error) => {
        alert(`Failed to send message. Error: ${JSON.stringify(error)}`);
      });
  }

  console.log("=======",isLightOn);
</script>

<svelte:head>
  <title>Dalton</title>
  <link rel="icon" href="/imgs/Group 3 (1).svg" type="image/icon type">
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/media.css" />
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&family=Open+Sans:wght@300;400;500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

{#if isLoading}
  <div class="loading-sc">
    <span class="loading-item"></span>
  </div>
{:else}
  <div class="" style="display: block;">
    <Header {isLightOn} {activeSection} on:toggleTheme={handleToggleTheme} />
    
    <div class="container">
      <About />
      <div bind:this={sectionElements.projects}>
        <Projects />
        <Testominial />
      </div>
      <section id="hire-me" bind:this={sectionElements.hire_me}>
        <span class="primary-header">Let's Talk</span>
        <p class="secondary-header">Let me know how I can help you</p>
        <form on:submit|preventDefault={sendEmail}>
          <input class="glass-f" type="text" placeholder="First Name" bind:value={firstName} required />
          <input class="glass-f" type="text" placeholder="Last Name" bind:value={lastName} required />
          <input class="glass-f" type="email" placeholder="Email" bind:value={email} required />
          <input class="glass-f" type="tel" placeholder="Phone" bind:value={phone} />
          <input class="glass-f" id="message" type="text" placeholder="Message" bind:value={message} required />
          <div class="btn-cont">
            <span class="sudo" class:light-on={isLightOn}></span>
            <button type="submit" class="btn glass-f">Get in touch</button>
          </div>
        </form>
      </section>
    </div>
    <footer>
      </footer>
  </div>
{/if}
````

## File: src/app.css
````css
/* @import 'tailwindcss'; */
/* @plugin '@tailwindcss/forms'; */
/* @plugin '@tailwindcss/typography'; */
/**/
````

## File: src/app.d.ts
````typescript
// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
````

## File: src/app.html
````html
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body data-sveltekit-preload-data="hover">
		<div style="display: contents">%sveltekit.body%</div>
	</body>
</html>
````

## File: static/robots.txt
````
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
````

## File: .gitignore
````
node_modules

# Output
.output
.vercel
.netlify
.wrangler
/.svelte-kit
/build

# OS
.DS_Store
Thumbs.db

# Env
.env
.env.*
!.env.example
!.env.test

# Vite
vite.config.js.timestamp-*
vite.config.ts.timestamp-*
````

## File: .npmrc
````
engine-strict=true
````

## File: .prettierignore
````
# Package Managers
package-lock.json
pnpm-lock.yaml
yarn.lock
bun.lock
bun.lockb

# Miscellaneous
/static/
````

## File: .prettierrc
````
{
	"useTabs": true,
	"singleQuote": true,
	"trailingComma": "none",
	"printWidth": 100,
	"plugins": [
		"prettier-plugin-svelte",
		"prettier-plugin-tailwindcss"
	],
	"overrides": [
		{
			"files": "*.svelte",
			"options": {
				"parser": "svelte"
			}
		}
	],
	"tailwindStylesheet": "./src/app.css"
}
````

## File: eslint.config.js
````javascript
import prettier from 'eslint-config-prettier';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: { // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
		// see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
		"no-undef": 'off' }
	},
	{
		files: [
			'**/*.svelte',
			'**/*.svelte.ts',
			'**/*.svelte.js'
		],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);
````

## File: README.md
````markdown
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
````

## File: svelte.config.js
````javascript
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: { adapter: adapter() }
};

export default config;
````

## File: tsconfig.json
````json
{
	"extends": "./.svelte-kit/tsconfig.json",
	"compilerOptions": {
		"allowJs": true,
		"checkJs": true,
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"resolveJsonModule": true,
		"skipLibCheck": true,
		"sourceMap": true,
		"strict": true,
		"moduleResolution": "bundler"
	}
	// Path aliases are handled by https://svelte.dev/docs/kit/configuration#alias
	// except $lib which is handled by https://svelte.dev/docs/kit/configuration#files
	//
	// If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
	// from the referenced tsconfig.json - TypeScript does not merge them in
}
````

## File: vite.config.ts
````typescript
import devtoolsJson from 'vite-plugin-devtools-json';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		devtoolsJson()
	]
});
````
