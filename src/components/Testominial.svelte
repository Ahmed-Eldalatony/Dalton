<script>
</script>

<section id="testimonials">
  <h3 class="primary-header">What Clients Say</h3>
  <div class="testimonial">
    <div><img src="/imgs/Eng-Ahmed-samy.png" alt="Client photo" /></div>
    <div>
      <p>
        A very respectable and helpful person. This was our first collaboration,
        and it was very productive. I will rely on him for my coming projects.
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
  #testimonials {
    margin-top: 5em;
  }
  .testimonial {
    display: flex;
    width: 80%;
    margin: 5em auto;
    background: var(--secondary-color-2);
    border-radius: 1em;
    overflow: hidden;
    align-items: center;
  }
  .testimonial img {
    width: 12em;
  }
  .freelance-website {
    align-items: center;
    color: var(--secondary-color) !important;
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
    font-family:
      "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: var(--fs-200);
    font-weight: 500;
    padding-left: 1em;
    width: 40ch;
    color: var(--txt-h-color);
  }
  .testimonial span {
    font-weight: 600;
    color: var(--small-txt);
    display: inline-block;
  }
  .primary-header {
    font-size: var(--fs-600);
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    text-align: center;
    margin-bottom: 2rem;
  }
  :global(:root) {
    --primary-color: #4fc2f7e0;
    --secondary-color: #18b3ded7;
    --background-color: rgb(1, 10, 22);
    --txt-h-color: #d3d9dd;
    --small-txt: #bebebe;
    --secondary-color-2: rgb(12, 22, 37);
    --fs-200: 2.2rem;
    --fs-600: 6.2rem;
  }
</style>
