<script>
  import { themeStore } from "$lib/stores";
</script>

<section id="about">
  <div class="introduction">
    <span class="hello">Hello,</span>
    <h1>Dalton Is Here!</h1>
    <h2>Fullstack Developer</h2>

    <p>
      I'm <strong>Ahmed Dalton</strong>, a Full Stack Developer specializing in
      high-performance frontend applications with React and Next.js, Familiar
      with the broader modern frontend ecosystem, ensuring the best tools are
      always used for the job.
    </p>

    <div class="btn-cont">
      <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
      <button type="submit" class="btn glass-f">Get in touch</button>
    </div>
  </div>
  <img class="my-photo" src="/imgs/ahmed-dalton.png" alt="Ahmed-Dalton" />
</section>

<div class="skills-cont">
  <p>Skills</p>
  <img class="skill" src="/imgs/prisma.svg" alt="prisma" />
  <img class="skill" src="/imgs/next-auth.svg" alt="next-auth" />
  <img class="skill" src="/imgs/react.svg" alt="react" />
  <img class="skill" src="/imgs/typescript.svg" alt="typescript" />
</div>

<style>
  :global(:root) {
    --primary-color: #4fc2f7e0;
    --secondary-color: #18b3ded7;
    --background-color: rgb(1, 10, 22);
    --txt-h-color: #d3d9dd;
    --small-txt: #bebebe;
    --fs-200: 2.2rem;
    --fs-400: 3.6rem;
    --fs-500: 5.6rem;
  }
  #about {
    margin-top: 10rem;
    display: flex;
  }

  #about .my-photo {
    width: 30%;
    aspect-ratio: 1/1;
    object-fit: cover;
    align-self: center;
    border-radius: 50%;
    border: solid;
  }

  .introduction {
    width: 70%;
  }
  .introduction .hello {
    color: var(--primary-color);
    font-size: var(--fs-400);
    display: inline-block;
  }
  .introduction h1,
  .introduction h1,
  h2 {
    font-size: var(--fs-500);
    font-weight: 700;
  }
  .introduction h2 {
    margin-bottom: 1rem;
    color: #ccc;
  }
  .introduction p {
    line-height: 1.6;
    letter-spacing: 0.02em;
    margin-bottom: 4rem;
    padding-right: 12rem;
    font-size: var(--fs-200);
    color: var(--small-txt);
  }

  .skills-cont img {
    transition: filter 0.3s ease;
    width: auto;
    height: 100px;
  }
  .skills-cont img:hover {
    filter: none;
  }

  /* ! Media Queries */
  @media (max-width: 720px) {
    #about {
      margin-top: 3em;
    }
  }
</style>
