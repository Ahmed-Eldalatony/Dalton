<script>
  import { themeStore } from "$lib/stores";
  export let visible = false;
</script>

<div class:visible class="btn-cont">
  <span class="sudo" class:light-on={$themeStore.isLightOn}></span>
  <button type="submit" class="btn glass-f">Get in touch</button>
</div>

<style>
  .btn-cont {
    opacity: 0;
    transform: translateY(20px);
    transition:
      opacity 0.6s ease 0.5s,
      transform 0.6s ease 0.5s;
  }

  .btn {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    font-size: var(--fs-200);
    color: white;
    font-weight: 700;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(79, 194, 247, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
  }

  .btn-cont.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>
