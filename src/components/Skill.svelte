<script>
  import { tick } from "svelte";

  export let skill;
  let isHovered = false;
  let skillElement;
  let tooltipPosition = { top: 0, left: 0 }; // Tooltip position

  async function handleMouseEnter() {
    isHovered = true;
    await tick(); // Wait for tooltip DOM to appear
    updateTooltipPosition();
  }

  function handleMouseLeave() {
    isHovered = false;
  }

  function updateTooltipPosition() {
    if (skillElement) {
      const rect = skillElement.getBoundingClientRect();
      const windowScrollY = window.scrollY;
      const windowScrollX = window.scrollX;

      tooltipPosition = {
        top: rect.top + windowScrollY - 120, // Positioned above the image
        left: rect.left + windowScrollX + rect.width / 2, // Horizontally centered
      };
    }
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

  {#if isHovered}
    <div class="skill-card">
      <div class="card-head">
        <img
          class="skill-logo"
          src={isHovered
            ? `/imgs/${skill.name}-colored.svg`
            : `/imgs/${skill.name}.svg`}
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
  {/if}
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
  }

  .skill-card {
    opacity: 0;
    transition: all 0.4s ease-in-out;
    min-height: 15rem;
    min-width: 15rem;
  }
  .skill-card:hover {
    min-width: 30rem;
    max-width: 40rem;
    min-height: 30reh;
    max-height: 40rem;
    opacity: 1;
  }
  .skill-card .skill-logo {
    animation: scale-up 0.4s ease-in-out forwards;
  }

  .skill-card {
    padding: 3rem;
    background-color: var(--background-color);
    z-index: 100;
    position: absolute;
    left: -3rem;
    top: -3rem;
    box-shadow: 0 0px 8px var(--primary-color);
    border-radius: 12px;
  }
  .card-head {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .skill-details {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skill-details li {
    margin-bottom: 6px;
    line-height: 1.6;
  }
  @keyframes scale-up {
    from {
      transform: scale(1);
    }
    60% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.18);
    }
  }
  @media (max-width: 720px) {
    .skill-logo {
      height: 60px;
    }
  }
</style>
