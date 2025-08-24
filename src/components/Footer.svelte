<script>
  import { onMount } from "svelte";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ahmeddalton",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ahmed-dalton",
      icon: "fab fa-linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ahmeddalton",
      icon: "fab fa-twitter",
    },
    {
      name: "Email",
      url: "mailto:ahmeddalton@example.com",
      icon: "fas fa-envelope",
    },
  ];

  const workLinks = [
    {
      name: "upwork",
      url: "https://www.upwork.com/freelancers/~01704c6f24e3cd7b79",
      icon: "/imgs/upwork-svgrepo-com.svg",
    },
    {
      name: "Mostaql",
      url: "https://mostaql.com/u/Ahmed_Dalton",
      icon: "/imgs/mostaql.png",
    },
  ];
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="social-links">
        {#each socialLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >
            <i class={link.icon}></i>
            <span class="sr-only">{link.name}</span>
          </a>
        {/each}
      </div>

      <div class="work-platforms">
        <p class="work-title">Find me on freelance platforms:</p>
        <div class="work-links">
          {#each workLinks as link}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="work-link"
            >
              <img src={link.icon} alt={link.name} />
              <span>{link.name}</span>
            </a>
          {/each}
        </div>
      </div>

      <div class="copyright">
        <p>
          &copy; {new Date().getFullYear()} Ahmed Dalton. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--secondary-color-2);
    padding: 3rem 0;
    margin-top: 5rem;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--text-md-color);
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
    transform: translateY(-3px);
  }

  .work-platforms {
    text-align: center;
  }

  .work-title {
    color: var(--small-txt);
    font-size: var(--fs-100);
    margin-bottom: 1rem;
  }

  .work-links {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }

  .work-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-md-color);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
  }

  .work-link:hover {
    background-color: var(--primary-color);
    color: var(--background-color);
  }

  .work-link img {
    width: 28px;
    height: 28px;
  }

  .copyright {
    color: var(--small-txt);
    font-size: var(--fs-100);
    text-align: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 768px) {
    .work-links {
      flex-direction: column;
      align-items: center;
    }

    .work-link {
      width: 100%;
      justify-content: center;
    }
  }
</style>

