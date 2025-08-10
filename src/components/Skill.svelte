<script>
  import { tick } from "svelte";
  export let skill;
  let isHovered = false;
  let skillElement;
  let tooltipPosition = { top: 0, left: 0 }; // Tooltip position

  async function handleMouseEnter() {
    isHovered = true;
    await tick();
  }

  function handleMouseLeave() {
    isHovered = false;
  }
</script>

<div
  class="skill-container"
  bind:this={skillElement}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
>
  <img
    class="skill-logo"
    src={isHovered
      ? `/imgs/${skill.name}-colored.svg`
      : `/imgs/${skill.name}.svg`}
    alt={skill.name}
  />

  <!-- Always render the card but control visibility with CSS -->
  <div class="skill-card" class:visible={isHovered}>
    <div class="card-head">
      <img
        class="skill-logo"
        src={`/imgs/${skill.name}-colored.svg`}
        alt={skill.name}
      />
      <h3>{skill.title}</h3>
    </div>
    <ul class="skill-details">
      {#each skill.details as detail}
        <li>{detail}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .skill-container {
    margin: 4rem 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill-logo {
    height: 80px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .skill-container:hover .skill-logo {
    transform: scale(1.05);
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.2));
  }

  .skill-card {
    opacity: 0;
    isolation: isolate; /* Creates new stacking context */
    visibility: hidden;
    transform: scale(0.95) translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease,
      visibility 0.3s ease;
    min-height: 15rem;
    min-width: 30rem;
    padding: 3rem;
    background-color: var(--background-color);
    position: absolute;
    left: -3rem;
    top: -2rem;
    box-shadow: 0 0px 8px var(--primary-color);
    border-radius: 12px;
    pointer-events: none;
    z-index: 1000;
  }

  .skill-card.visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateY(0);
    pointer-events: auto; /* Re-enable mouse events when visible */
  }

  .skill-card .skill-logo {
    height: 60px;
    transition: transform 0.3s ease;
  }

  .skill-card.visible .skill-logo {
    transform: scale(1.3);
  }

  .card-head {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .skill-details {
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease 0.1s,
      transform 0.3s ease 0.1s;
  }

  .skill-card.visible .skill-details {
    opacity: 1;
    transform: translateY(0);
  }

  .skill-details li {
    margin-bottom: 6px;
    line-height: 1.6;
  }

  @media (max-width: 720px) {
    .skill-logo {
      height: 60px;
    }

    .skill-card {
      left: -2rem;
      top: -2rem;
      padding: 2rem;
      min-width: 12rem;
    }
  }
</style>
