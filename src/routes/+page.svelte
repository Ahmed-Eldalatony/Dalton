<script>
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import About from "../components/About.svelte";
  import { themeStore } from "$lib/stores";
  import Testominial from "../components/Testominial.svelte";
  import Projects from "../components/Projects.svelte";

  // --- State managed by the main app ---
  let isLoading = true;
  // let isLightOn = true;
  let activeSection = ""; // Will hold the ID of the section in view

  // Form input variables
  let firstName = "";
  let lastName = "";
  let email = "";
  let phone = "";
  let message = "";

  // --- Section Observer Logic ---
  let sectionElements = {}; // To hold the <section> DOM elements

  onMount(() => {
    // Hide loading screen
    setTimeout(() => (isLoading = false), 850);

    // This observer watches the sections and updates `activeSection`
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    ); // Triggers when section is in the middle of the screen

    // Tell the observer which elements to watch
    Object.values(sectionElements).forEach((el) => {
      if (el) observer.observe(el);
    });

    // EmailJS and Safari check logic remains here
    if (typeof emailjs !== "undefined") {
      emailjs.init("sPfygCgnCHysm3zw6");
    }
    const isSafari =
      /Safari/.test(navigator.userAgent) &&
      /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
      window.alert(
        "Please note: This website may not be fully responsive on Safari mobile.",
      );
    }
  });

  // --- Event Handlers ---
  // function handleToggleTheme() {
  //   isLightOn = !isLightOn;
  // }

  function sendEmail() {
    if (typeof emailjs === "undefined") {
      alert("Email service is not available. Please try again later.");
      return;
    }
    const params = {
      from_name: `${firstName} ${lastName}`,
      message,
      email_id: email,
      phone,
    };
    emailjs.send("service_e9dlam5", "template_x6zsbs9", params).then(
      () => {
        alert("Message Sent Successfully!");
        firstName = "";
        lastName = "";
        email = "";
        phone = "";
        message = "";
      },
      (error) => {
        alert(`Failed to send message. Error: ${JSON.stringify(error)}`);
      },
    );
  }

  // console.log("=======",isLightOn);
</script>

<svelte:head>
  <title>Dalton</title>
  <link rel="icon" href="/imgs/Group 3 (1).svg" type="image/icon type" />
  <link rel="stylesheet" href="/css/style.css" />
  <link rel="stylesheet" href="/css/media.css" />
  <script
    type="text/javascript"
    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
  ></script>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&family=Open+Sans:wght@300;400;500&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&family=Raleway:wght@200;300;400;500;600;700&family=Source+Serif+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{#if isLoading}
  <div class="loading-sc">
    <span class="loading-item"></span>
  </div>
{:else}
  <div class="" style="display: block;">
    <Header {activeSection} />

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
          <input
            class="glass-f"
            type="text"
            placeholder="First Name"
            bind:value={firstName}
            required
          />
          <input
            class="glass-f"
            type="text"
            placeholder="Last Name"
            bind:value={lastName}
            required
          />
          <input
            class="glass-f"
            type="email"
            placeholder="Email"
            bind:value={email}
            required
          />
          <input
            class="glass-f"
            type="tel"
            placeholder="Phone"
            bind:value={phone}
          />
          <input
            class="glass-f"
            id="message"
            type="text"
            placeholder="Message"
            bind:value={message}
            required
          />
          <div class="btn-cont">
            <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
            <button type="submit" class="btn glass-f">Get in touch</button>
          </div>
        </form>
      </section>
    </div>
    <footer></footer>
  </div>
{/if}
