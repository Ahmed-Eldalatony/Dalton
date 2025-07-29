<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';     // <-- Import the new Header
  import Projects from './components/Projects.svelte';

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
    <Header {isLightOn} {activeSection} on:toggleTheme={handleToggleTheme} />
    
    <div class="container">
      <section id="about" bind:this={sectionElements.about}>
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
          </div>
        <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
      </section>

      <div bind:this={sectionElements.projects}>
        <Projects />
      </div>

      <section id="testimonials" bind:this={sectionElements.testimonials}>
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
