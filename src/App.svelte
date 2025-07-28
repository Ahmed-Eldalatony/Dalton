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
