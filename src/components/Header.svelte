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

<div class="header-cont" bind:this={headerCont}>
    <header class="container">
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

