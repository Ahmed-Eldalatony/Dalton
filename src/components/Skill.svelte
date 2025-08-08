<script>
  import { tick } from "svelte";

  export let skill;
  let isHovered = false;
  let skillElement; // Reference to the skill image element
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
    <div
      class="tooltip"
      style="top: {tooltipPosition.top}px; left: {tooltipPosition.left}px"
    >
      <h3 class="tooltip-title">{skill.title}</h3>
      <ul class="tooltip-details">
        {#each skill.details as detail}
          <li>{detail}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .skill-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill-logo {
    height: 80px;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .skill-logo:hover {
    transform: translateY(-10px);
  }

  .tooltip {
    position: fixed; /* <- IMPORTANT FIX */
    background: rgba(25, 25, 35, 0.95);
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    padding: 1.2rem;
    min-width: 200px;
    z-index: 100;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    animation: fadeIn 0.3s ease-out;
    transform: translateX(-50%); /* Horizontally center */
  }

  .tooltip-title {
    color: var(--primary-color);
    margin: 0 0 0.8rem 0;
    font-size: 1.4rem;
    text-align: center;
  }

  .tooltip-details {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .tooltip-details li {
    color: var(--txt-h-color);
    padding: 0.3rem 0;
    font-size: 0.95rem;
    position: relative;
    padding-left: 1rem;
  }

  .tooltip-details li:before {
    content: "•";
    color: var(--secondary-color);
    position: absolute;
    left: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, 10px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 720px) {
    .skill-logo {
      height: 60px;
    }

    .tooltip {
      min-width: 160px;
      padding: 1rem;
    }

    .tooltip-title {
      font-size: 1.2rem;
    }

    .tooltip-details li {
      font-size: 0.85rem;
    }
  }
</style>
