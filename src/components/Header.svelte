<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { themeStore } from "$lib/stores";

  export let isLightOn;
  export let activeSection;

  function toggleTheme() {
    themeStore.update((theme) => {
      return { isLightOn: !theme.isLightOn };
    });
  }

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Hire me", href: "#hire-me" },
  ];

  let navLinkElements = [];
  let indicatorStyle = "";
  let ready = false;

  $: if (ready) {
    const activeIndex = navItems.findIndex(
      (item) => item.href === `#${activeSection}`,
    );
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
    setTimeout(() => (ready = true), 50);

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

<div class="header-cont" bind:this={headerCont}>
  <header class="">
    <a href="/" class="logo">
      <img src="/imgs/Group 3 (1).svg" alt="Dalton Logo" />
    </a>
    <div class="nav-container glass-f" bind:this={navCont}>
      <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
      <nav>
        <ul bind:this={navUl}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#hire-me">Hire me</a></li>
        </ul>
      </nav>
    </div>

    <div class="mode" on:click={toggleTheme}>
      <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
      <i class="fa-regular fa-lightbulb glass-f"></i>
    </div>
  </header>
</div>

<style>
  header.container {
    padding: 0 2em;
  }
  header {
    display: flex;
    min-height: 5em;
    max-height: 5em;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 0 3em;
  }
  .header-cont {
    position: sticky;
    top: 1.1rem;
    z-index: 100;
    background-color: var(--background-color);
  }
  header .logo img {
    width: 5em;
  }
  .nav-container {
    position: relative;
    /* width: 50rem; */
  }
  header nav {
    width: 100%;
    padding: 0 1.4em;
    max-height: 3em;
  }

  nav ul {
    position: relative;
    display: flex;
    padding: 0.2em;
    justify-content: space-between;
  }

  /* animation */
  .header-cont {
    width: 90%;
    transition: all 350ms;
    margin: 0 auto;
    border-radius: 100vw;
    box-shadow: 0 0 1rem var(--primary-color);
  }
  .header-cont:hover {
    width: 85% !important;
  }
  header {
    transition: All 300ms;
    width: 100% !important;
  }

  nav ul {
    transition: 150ms all;
    display: flex;
  }
  header:hover ul {
    display: flex !important;
    opacity: 1;
  }

  header .nav-container {
    transition: 100ms all;
    width: 32em;
    min-height: 2.5em;
  }

  header:hover .nav-container {
    width: 32em !important;
  }

  header nav ul li {
    font-size: var(--fs-100);
    padding: 0.3em 0.7em;
  }

  li:hover {
    border-radius: 100vw;
    /* ? in hover of the nav the sudo element will turn a little bit off and the li will have the sudo color of light on    */
  }
  header :hover .light-on {
    transition: all 0.2s;
    opacity: 0.6;
  }

  header li:hover {
    transition: all 0.2s;
    background-color: #5acbffa4;
    box-shadow: 0 0 1rem var(--primary-color);
  }

  header:hover .mode .light-on {
    transition: all 0.2s;

    opacity: 0.8;
  }
</style>
