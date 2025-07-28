<script>
  import { onMount } from 'svelte';

  // State variables for interactivity
  let isLoading = true;
  let isLightOn = true;
  let showSkillsPointer = true;

  // Form input variables
  let firstName = '';
  let lastName = '';
  let email = '';
  let phone = '';
  let message = '';

  // Variables to hold DOM element references
  let headerCont;
  let navCont;
  let navUl;

  /**
   * Toggles the light/dark theme.
   */
  function toggleTheme() {
    isLightOn = !isLightOn;
  }

  /**
   * Sends the form data using the EmailJS service.
   */
  function sendEmail() {
    if (typeof emailjs === 'undefined') {
      alert("Email service is not available. Please try again later.");
      return;
    }
    
    const params = {
      from_name: `${firstName} ${lastName}`,
      message: message,
      email_id: email,
      phone: phone // Include phone number in parameters
    };

    emailjs.send("service_e9dlam5", "template_x6zsbs9", params)
      .then(() => {
        alert("Message Sent Successfully!");
        // Reset form fields
        firstName = '';
        lastName = '';
        email = '';
        phone = '';
        message = '';
      }, (error) => {
        alert(`Failed to send message. Error: ${JSON.stringify(error)}`);
      });
  }

  // onMount runs after the component has been rendered to the DOM
  onMount(() => {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
      emailjs.init("sPfygCgnCHysm3zw6");
    } else {
      console.error("EmailJS library could not be loaded.");
    }

    // Hide loading screen after a delay
    setTimeout(() => {
      isLoading = false;
    }, 850);
    
    // Check for Safari browser and show an alert
    const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
      window.alert("Please note: This website may not be fully responsive on Safari mobile.");
    }
    
    // Add scroll event listener for header animations
    window.onscroll = () => {
      if (!headerCont || !navCont || !navUl) return; // Ensure elements are available

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
      }
    };

    // Cleanup function to remove the scroll listener when the component is unmounted
    return () => {
      window.onscroll = null;
    };
  });
</script>

<svelte:head>
  <title>Dalton</title>
  <link rel="icon" href="/imgs/Group 3 (1).svg" type="image/icon type">

  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&family=Open+Sans:wght@300;400;500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" rel="stylesheet" />
</svelte:head>

<style>
  /* All CSS from style.css and media.css is placed here, wrapped in :global() to apply styles globally */
  :global(:root){
    /** Font Sizes */
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
    /** Font Families */
    --inter:'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  :global(*){
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  :global(li){
    list-style: none;
  }
  :global(a){
    color: white;
    text-decoration: none;
  }
  :global(body){
    font-size: 1.7rem;
    color: #eee;
    background-color: var(--background-color);
    font-family:var(--inter);
    scroll-behavior: smooth;
  }
  /*! Styling */
  :global(.loading-sc){
    background-color: var(--background-color);
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    display: block;
    animation: loadingSc 1.2s forwards;
  }

  /* CORRECTED: Removed :global() from @keyframes */
  @keyframes loadingSc {
    0%{} 70%{ opacity: 1; } 99%{ opacity: 0; }
    100%{ opacity: 0; z-index: -1; }
  }
  :global(.wrapper){
    display: none;
  }
  :global(.loading-item){
    width: 100px;
    height: 30px;
    display: block;
    z-index: 10;
    border-radius: 100vw;
    top: 50%;
    left: 50%;
    position: relative;
    transform: translate(-50%);
    box-shadow: 0px 0px 0px var(--primary-color);
    animation: loading 1.2s forwards;
  }
  :global(.skills .comp){ width: 6em; }
  :global(.react-icon){ width: 4.5em; }
  :global(.firebase){ width:3em; }

  /* CORRECTED: Removed :global() from @keyframes */
  @keyframes loading {
    0%{}
    100%{ box-shadow: 0px 1px 20px var(--primary-color); width: 115px; }
  }
  :global(.container){
    width: 1300px;
    padding: 0 6em;
    margin: 0 auto;
  }
  :global(header.container){ padding: 0 2em; }
  :global(header){
    display: flex;
    min-height: 5em;
    max-height: 5em;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    padding: 0 3em;
  }
  :global(.header-cont){
    position: sticky;
    top: 1.1rem;
    z-index: 100;
    background-color: var(--background-color);
    width: 85% ;
    transition:all 350ms ;
    margin: 0 auto;
    border-radius: 100vw;
    box-shadow: 0 0 1rem var(--primary-color) ;
  }
  :global(header .logo img){ width: 5em ; }
  :global(.nav-container){ position: relative; }
  :global(header nav){ width: 100%; padding: 0 1.4em; max-height: 3em; }
  :global(.glass-f){
    background-color: transparent;
    background-image: linear-gradient(145deg,rgba(255, 255, 255,.22) ,rgba(255, 255, 255,.1));
    border-radius: 50px;
    border: solid var(--primary-color) 1px;
  }
  :global(.light-on){
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
  :global(nav ul){
    position: relative;
    display: flex;
    padding: .2em;
    justify-content: space-between;
    transition: 150ms all;
  }
  :global(.header-cont:hover){ width: 85% !important; }
  :global(header) { transition: All 300ms ; width: 100% !important; }
  :global(header:hover ul){ display: flex !important; opacity: 1; }
  :global(header .nav-container) {
    transition: 100ms all;
    width: 32em ;
    min-height: 2.5em;
  }
  :global(header:hover .nav-container){ width:32em !important; }
  :global(header nav ul li) { font-size:var(--fs-100); padding: .3em .7em; }
  :global(.mode){ border-radius: 100vw; position: relative; cursor: pointer; }
  :global(li:hover){ border-radius: 100vw; }
  :global(header :hover .light-on){ transition: all .2s; opacity: .6; }
  :global(.btn-cont:hover .light-on){ transition: all .2s; opacity: .6; }
  :global(header li:hover) {
    transition: all .2s;
    background-color:#5acbffa4;
    box-shadow: 0 0 1rem var(--primary-color) ;
  }
  :global(header:hover .mode .light-on){ transition: all .2s; opacity: .8; }
  :global(.mode .glass-f){ border: none; background: transparent; }
  :global(.mode i){ font-size:3.2rem; position: relative; }
  :global(.btn-cont){ position:relative }
  :global(.introduction){ margin: 3rem auto 0 0rem; width: 70%; }
  :global(.introduction .hello){
    color: var(--primary-color);
    font-size: var(--fs-400);
    margin-bottom: 2rem;
    display:inline-block;
  }
  :global(.introduction h1,.primary-header){ color: var(--txt-h-color); }
  :global(.introduction h1,h2){ font-size: var(--fs-500); font-weight:700 ; }
  :global(.introduction h2){ color: #ccc; }
  :global(.introduction p){
    margin: 3rem 0 ;
    width: 35ch;
    font-size: var(--fs-200);
    color: var(--small-txt);
    line-height: 1.5;
  }
  :global(.introduction .shine){
    font-size: 2.4rem;
    font-weight:600;
    color: #41b7ee;
    text-shadow: 0px 0px 3px var(--primary-color);
  }
  :global(.btn-cont){ width: fit-content; }
  :global(.btn){
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: var(--fs-200);
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
  :global(#about){ display: flex; padding: 12rem 2rem; }
  :global(#about .my-photo){
    width: 28%;
    aspect-ratio: 1/1;
    object-fit: cover;
    align-self: center;
    transform: translate(0rem,-10rem);
    border-radius: 50%;
    border: solid ;
  }
  :global(#projects){ margin-top: 50px; }
  :global(.primary-header){
    font-size: var(--fs-600);
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    text-align: center;
    margin-bottom: 2rem;
  }
  :global(.secondary-header) {
    font-size: var(--fs-200);
    font-weight: 500;
    text-align: center;
    margin-bottom: 8rem ;
    letter-spacing: 1px;
    color:var(--small-txt) ;
  }
  :global(#projects .projects-cont){
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(340px, 1fr) );
    gap: 2.4rem;
  }
  :global(.project) {
    background-color: var(--secondary-color-2);
    overflow: hidden;
    border-radius: 1.7rem;
  }
  :global(.project .tools){ display: flex; gap: 1.5rem; padding: 1.3rem; }
  :global(.project .tools span) {
    text-decoration: underline;
    text-underline-offset: .2rem;
    text-decoration-thickness: .2rem;
    padding: .5rem 1rem;
    border-radius: 100vw;
  }
  :global(.project .tools .html){ background-color: rgba(247, 147, 32, 0.85); }
  :global(.project .tools .css){ background-color: rgba(65, 183, 238,0.85); }
  :global(.project .tools .javascript){ background-color:rgba(231, 212, 60, 0.85); }
  :global(.project .tools .tailwind){ background-color:rgba(38, 230, 214, 0.85); }
  :global(.project .tools .react){ background-color:rgba(77, 219, 255, 0.85); }
  :global(.project .tools .active){ background-color:rgba(255, 77, 77, 0.85); }
  :global(.tools span:hover){ opacity: .88; }
  :global(.project:hover){
    box-shadow: 0px 0px 2rem #70c6ff67;
    transform:scale(101%);
    transition: .2s all;
  }
  :global(.project > *:not(a)){ padding: 3rem; }
  :global(.project img){
    width: 100%;
    object-fit: cover;
    object-position: top;
    min-height: 26rem;
    max-height: 26rem;
  }
  :global(.project p){ font-size: var(--fs-100); }
  :global(.project a){ text-decoration: underline; font-weight: 500; }
  :global(.project i) { font-size:var(--fs-500); padding: 1rem 3rem 2rem ; color: #eee241; }
  :global(.skills-cont){
    margin-top: 4rem;
    display: flex;
    align-items: center;
    width: max-content;
  }
  :global(.skills-cont .par){ margin-right: 3rem; font-size: var(--fs-300); display: block; }
  :global(.skills-cont .skills) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  :global(.skills span){ font-size: var(--fs-200); margin-bottom: 1rem; }
  :global(.skills .pointer){
    position: absolute;
    width: max-content;
    bottom: -70px;
    right: 50%;
    color: var(--small-txt);
    transform: translateX(50%);
  }
  :global(.skills .pointer::after){
    content:"▲";
    font-size: 1.5rem;
    position: absolute;
    top: -20px;
    right: 50%;
    transform: translateX(50%);
    color: var(--small-txt);
    animation: upDown .4s infinite ;
  }
  /* CORRECTED: Removed :global() from @keyframes */
  @keyframes upDown { 0%{} 100%{top:-28px;} }
  :global(.skills ul){ flex-direction: column; gap: 1.5rem; }
  :global(.firebase){ width:4em ; }
  :global(.skills i){ font-size: 7rem; }
  :global(.skills li){ position: relative; }
  :global(.skills li:first-child i){ color: #f79220; }
  :global(.skills li:nth-child(2) i){ color: #41b7ee; }
  :global(.skills li:nth-child(3) i){ color: #eee241; }
  :global(.skills li:hover ul){
    display: flex;
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
  :global(.skills li ul){ display: none; animation: scaleH .3s forwards; }
  /* CORRECTED: Removed :global() from @keyframes */
  @keyframes scaleH {
    0%{ max-height: 0; }
    100%{ max-height:50rem; }
  }
  :global(.project > *:not(a)){ padding: 3rem; }
  :global(#more){ margin-top: 15rem; padding: 0; }
  :global(#testimonials){ margin-top: 5em; }
  :global(.testimonial){
    display: flex;
    width: 80%;
    margin: 5em auto;
    background: var(--secondary-color-2);
    border-radius: 1em;
    overflow: hidden;
    align-items: center;
  }
  :global(.testimonial img){ width:12em ; }
  :global(.freelance-website){
    align-items: center;
    color: var(--secondary-color) !important;
    display: flex;
  }
  :global(.freelance-website img){ margin:0 .5em; width:1.5em !important ; }
  :global(.client-cont){
    margin-left: 1em;
    margin-top: 1em;
    display: flex;
    gap: .3em;
    align-items: center;
  }
  :global(.testimonial p){
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: var(--fs-200);
    font-weight: 500;
    padding-left: 1em;
    width: 40ch;
    color: var(--txt-h-color);
  }
  :global(.testimonial span){ font-weight: 600; color:var(--small-txt); display: inline-block; }
  :global(#hire-me){ margin:10rem 0 ; display: relative; }
  :global(#hire-me form) {
    display: grid;
    justify-items: center;
    gap: 2rem;
    width: 60%;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr; /* Added for proper grid layout */
  }
  :global(#hire-me input){
    font-size: var(--fs-100);
    padding: 2rem;
    border-radius: 100px;
    color:#ddd;
    width: 100%;
    background-color: transparent;
  }
  :global(#hire-me input::placeholder){ color: #ddd; }
  :global(#hire-me input:focus){
    outline: transparent;
    box-shadow: 0 0 1.5rem var(--primary-color);
  }
  :global(#hire-me input#message){
    grid-column: span 2;
    width: 100%;
    min-height: 20rem; /* Adjusted height */
    margin: 0 auto;
    border-radius: 4rem;
    padding-top: 2rem; /* Align placeholder text to top */
    resize: vertical; /* Allow vertical resizing */
  }
  :global(#hire-me .btn-cont){ margin-top: 3rem; grid-column: span 2; }
  :global(.txt-grad){
    margin-top: 10rem;
    background-image: linear-gradient(90deg,var(--primary-color),rgb(5, 36, 65));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 12rem;
    font-weight: 800;
    text-align: center;
    display: block;
  }
  :global(footer){ background-color: var(--secondary-color-2); }
  :global(footer .container){ padding: 2rem 10rem; }
  :global(footer .work){
    margin-bottom: 1rem;
    display: inline-block;
    font-size:1.8rem ;
    font-weight: 500;
    color:var(--small-txt);
  }
  :global(footer .work div){ display: flex; align-items: center; }
  :global(footer .work div a){ padding: 1rem; display: flex; align-items: center; color: var(--secondary-color); }
  :global(footer .work div img){ width: 2.7rem; margin-right: .5rem; }
  :global(footer img){ width: 3rem; }

  /* Media Queries */
  @media (max-width:1300px) {
    :global(:root){ font-size: 50%; }
    :global(.project img){ width: 100%; object-fit: cover; min-height: 22em; max-height: 22em; }
    :global(.container){ width: 1150px; }
  }
  @media (max-width:1100px) {
    :global(:root){ font-size: 50%; -webkit-text-size-adjust: none; }
    :global(.container){ width: 900px; padding: 0 1em; }
    :global(.project img){ width: 100%; object-fit: cover; min-height: 20em; max-height: 20em; }
    :global(#projects .projects-cont){ padding: 5rem 10rem; }
  }
  @media (max-width:900px) {
    :global(:root){ font-size: 40%; }
    :global(body){ font-size: 1.9rem; }
    :global(header) { min-height:50px; max-height:50px; position: relative; }
    :global(.container){ width: 750px; }
    :global(#projects .projects-cont){ padding: 0rem ; }
    :global(#hire-me form input) { grid-column: span 2; width: 100%; padding: 2.5rem 3.5rem; }
    :global(#hire-me input#message) { min-height: 15rem !important; }
    :global(.skills .comp){ width: 5.5em; }
    :global(.react-icon){ width: 3.9em; }
    :global(.firebase){ width:3.5em; }
  }
  @media (max-width:720px) {
    :global(:root){ font-size: 34%; }
    :global(.testimonial p){ font-size: 1.8rem; }
    :global(.container){ width: 550px; }
    :global(.project img){ min-height: 34em; max-height: 34em; }
    :global(#about){ margin-top: 3em; flex-direction: column-reverse; align-items: center; }
    :global(#about .my-photo) { transform: none; margin-bottom: 3rem; width: 50%; }
    :global(.introduction) { width: 100%; text-align: center; }
    :global(.introduction p) { margin: 3rem auto; }
    :global(.btn-cont) { margin: 0 auto; }
    :global(.skills-cont) { width: 100%; justify-content: center; }
    :global(.header-cont){ top: 4em; }
    :global(.nav-container){
      border-radius: 1.5em;
      position: absolute;
      right: 50%;
      transform: translate(50%);
    }
    :global(header .nav-container){ width: 18em ; }
    :global(.nav-container .light-on){ border-radius: 1.5em; }
    :global(header:hover .nav-container){ width: 18em !important; }
    :global(header nav){ border-radius: 50px !important; max-height:fit-content; padding: 0; }
    :global(header nav ul){ flex-wrap: wrap; padding: 1rem ; align-items: center; }
    :global(header nav ul li){ padding:.6em 0; text-align: center; width: 50%; font-size: 2.8rem; font-weight: bolder; }
    :global(li:hover){ transition: .2s; }
  }
  @media (max-width:550px) {
    :global(.testimonial) { width: 95%; flex-direction: column; text-align: center; padding: 2em; }
    :global(.testimonial p) { width: 100%; padding-left: 0; margin-bottom: 2em; }
    :global(.client-cont) { justify-content: center; }
    :global(#hire-me form) { width: 90%; grid-template-columns: 1fr; } /* Single column form on small screens */
    :global(#hire-me form input), :global(#hire-me input#message), :global(#hire-me .btn-cont) { grid-column: span 1; }
    :global(#projects .projects-cont){ grid-template-columns: repeat( auto-fit, minmax(230px, 1fr) ); }
    :global(.container){ width: 420px; }
    :global(.skills .comp){ display: none; }
    :global(.firebase){ margin-left: -1em; }
    :global(.skills-cont .skills){ gap: .7em; }
    :global(.project img){ min-height: 25em; max-height: 25em; }
  }
  @media (max-width:400px) {
    :global(:root){ font-size: 28%; }
    :global(.container) { width: 300px; }
    :global(.introduction h1,h2){ font-size: var(--fs-500); }
    :global(.testimonial img){ width: 9em; }
    :global(.testimonial p){ width: 32ch ; }
    :global(#projects .projects-cont){ grid-template-columns: repeat( auto-fit, minmax(230px, 1fr) ); }
  }
</style>

{#if isLoading}
  <div class="loading-sc">
    <span class="loading-item"></span>
  </div>
{:else}
  <div class="wrapper" style="display: block;">
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
    <div class="container">
      <section id="about">
        <div class="introduction">
          <span class="hello">Hello,</span>
          <h1>Dalton Is Here!</h1>
          <h2>Frontend Developer</h2>
          <p>
            Hi, I am <b>Ahmed Dalton</b> - a Freelancer working as a Frontend developer helping unique startups <br />
            and small projects to <span class="shine">Shine</span>.
          </p>
          <div class="btn-cont">
            <span class="sudo" class:light-on={isLightOn}></span>
            <a href="#hire-me" class="btn glass-f">Get in touch</a>
          </div>
          <div class="skills-cont" on:mouseover={() => showSkillsPointer = false} on:focus={() => (showSkillsPointer = false)}>
            <div class="par">My Skills :</div>
            <ul class="skills">
              <li>
                <ul>
                  <span>HTML</span>
                  <li>HTML5</li>
                  <li>HTML semantic elements</li>
                  <li>Accessibility</li>
                </ul>
                <i class="fa-brands fa-html5"></i>
              </li>
              <li>
                <ul>
                  <span>CSS</span>
                  <li>CSS3</li>
                  <li>CSS Flexbox and Grid</li>
                  <li>Responsive design</li>
                  <li>Complex Animations</li>
                  <li>BEM Methodology</li>
                </ul>
                <i class="fa-brands fa-css3-alt"></i>
              </li>
              <li>
                <ul>
                  <span>JS & TS</span>
                  <li>DOM manipulation</li>
                  <li>AJAX (Dealing with APIs)</li>
                  <li>TS Static Typing</li>
                  <li>EcmaScript6</li>
                </ul>
                <i class="fa-brands fa-square-js"></i>
              </li>
              <li>
                {#if showSkillsPointer}
                  <span class="pointer">Hover For More</span>
                {/if}
                <ul>
                  <span>React & Next.JS</span>
                  <li>Functional Components & Hooks</li>
                  <li>SSR & CSR & SSG</li>
                  <li>Context API</li>
                  <li>Redux & RTK</li>
                  <li>Recoil.JS</li>
                </ul>
                <img class="react-icon" src="/imgs/React&Next.svg" alt="React and NextJS" />
              </li>
              <li>
                <ul>
                  <span>Component libraries</span>
                  <li>Efficiency with Component-Based libraries</li>
                  <li>MUI</li>
                  <li>Bootstrap</li>
                </ul>
                <img class="comp" src="/imgs/Componet libraries.svg" alt="Component Libraries">
              </li>
              <li>
                <ul>
                  <span>Other CSS Libraries</span>
                  <li>Tailwind</li>
                  <li>Styled Components</li>
                </ul>
                <img class="comp" src="/imgs/Other.svg" alt="Other CSS Libraries">
              </li>
              <li>
                <ul>
                  <span>Firebase</span>
                  <li>Firebase Auth</li>
                  <li>Firebase Cloud</li>
                  <li>Firebase Hosting</li>
                </ul>
                <img class="firebase" src="/imgs/firebase-svgrepo-com.svg" alt="Firebase">
              </li>
            </ul>
          </div>
        </div>
        <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
      </section>

      <section id="projects">
        <span class="primary-header">Projects</span>
        <p class="secondary-header">Here Is Some Of My Work</p>
        <div class="projects-cont">
          <div class="project fav">
            <a href="https://fmt-c.com/ar" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/fmt-c.png" alt="FMT-C Website" />
            </a>
            <p>
              <a href="https://fmt-c.com/ar" target="_blank" rel="noopener noreferrer">FMT-C</a>
              is a project for a real estate and construction company in the UAE.
            </p>
            <span>Designed by <a href="#about">Ahmed Dalton</a></span>
            <div class="tools"><span class="react">React JS</span><span class="tailwind">Tailwind</span></div>
          </div>
          <div class="project u_dev">
            <a href="https://baddel.vercel.app/ar" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/baddel.png" alt="Baddel Website" />
            </a>
            <p>
              <a href="https://baddel.vercel.app/ar" target="_blank" rel="noopener noreferrer">Baddel</a>
              is a project listing alternatives to boycotted products.
            </p>
            <span>Designed by <a href="#about">Ahmed Dalton</a></span>
            <div class="tools"><span class="react">React JS</span><span class="tailwind">Tailwind</span></div>
          </div>
          <div class="project fav">
            <a href="https://green-tree-intiative.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/Screenshot-2024-02-11-at-18-56-39-The-Green-Tree-Intetiative.png" alt="The Green Tree Initiative Website" />
            </a>
            <p>
              <a href="https://green-tree-intiative.netlify.app/" target="_blank" rel="noopener noreferrer">The Green Tree Initiative</a>
              is a concept for a non-profit helping people and the environment.
            </p>
            <span>Designed by <a href="#about">Ahmed Dalton</a></span>
            <div class="tools"><span class="react">React JS</span><span class="tailwind">Tailwind</span></div>
          </div>
          <div class="project">
            <a href="https://Bouncer.pages.dev/" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/Bouncer.png" alt="Bouncer Website" />
            </a>
            <p>
              <a href="https://Bouncer.pages.dev/" target="_blank" rel="noopener noreferrer">Bouncer</a>
              is an eCommerce Website created with React and Tailwind.
            </p>
            <span>Designed by <b>Almaz Bisenbaev</b></span>
            <div class="tools"><span class="react">React JS</span><span class="tailwind">Tailwind</span></div>
          </div>
          <div class="project">
            <a href="https://sky-host.pages.dev/" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/Sky-Host.jpg" alt="Sky Host Website" />
            </a>
            <p>
              <a href="https://sky-host.pages.dev/" target="_blank" rel="noopener noreferrer">Sky Host</a>
              is a hosting platform concept created with HTML, CSS, and JavaScript.
            </p>
            <span>Designed by <b>EuroART93</b></span>
            <div class="tools"><span class="html">HTML5</span><span class="css">CSS3</span><span class="javascript">JavaScript</span></div>
          </div>
          <div class="project">
            <a href="https://Khoomie.pages.dev/" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/Khoomie.png" alt="Khoomie Website" />
            </a>
            <p>
              <a href="https://Khoomie.pages.dev/" target="_blank" rel="noopener noreferrer">Khoomie</a>
              is an eCommerce website concept.
            </p>
            <span>Designed by <b>Michael Ajah</b></span>
            <div class="tools"><span class="html">HTML5</span><span class="css">CSS3</span><span class="javascript">JavaScript</span></div>
          </div>
          <div class="project">
            <a href="https://marknet.pages.dev/" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/Marknet.png" alt="Marknet Website" />
            </a>
            <p>
              <a href="https://marknet.pages.dev/" target="_blank" rel="noopener noreferrer">Marknet</a>
              is a marketing website concept.
            </p>
            <span>Designed by <b>Adel Ahmed</b></span>
            <div class="tools"><span class="html">HTML5</span><span class="css">CSS3</span><span class="javascript">JavaScript</span></div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <h3 class="primary-header">What Clients Say</h3>
        <div class="testimonial">
          <div><img src="/imgs/Eng-Ahmed-samy.png" alt="Client photo"></div>
          <div>
            <p>A very respectable and helpful person. This was our first collaboration, and it was very productive. I will rely on him for my coming projects.</p>
            <div class="client-cont">
              <span class="client">_Ahmed Beghet</span> From
              <a class="freelance-website" href="https://mostaql.com/u/Ahmed_Dalton" target="_blank" rel="noopener noreferrer">
                <img src="/imgs/mostaql.png" alt="Mostaql"><span>Mostaql</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="hire-me">
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
      <div class="container">
        <div class="work">
          <div>Work with me on
            <a href="https://mostaql.com/u/Ahmed_Dalton" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/mostaql.png" alt="Mostaql Logo"><span>Mostaql</span>
            </a> And
            <a href="https://www.upwork.com/freelancers/~01704c6f24e3cd7b79" target="_blank" rel="noopener noreferrer">
              <img src="/imgs/upwork-svgrepo-com.svg" alt="Upwork Logo"><span>UpWork</span>
            </a>
          </div>
        </div>
        <div>Designed and Developed by <b>Ahmed Dalton</b></div>
      </div>
    </footer>
  </div>
{/if}
