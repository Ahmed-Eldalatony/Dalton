<script>
  export let name;
  export let description;
</script>

<span class="primary-header">{name}</span>

<!-- <p class="secondary-header">{description}</p> -->

<style>
  .primary-header {
    font-size: var(--fs-600);
    font-weight: 700;
    letter-spacing: 1px;
    display: block;
    text-align: center;
    margin-bottom: 4rem;
    color: var(--text-md-color);
  }
  .secondary-header {
    font-size: var(--fs-200);
    font-weight: 500;
    text-align: center;
    margin-bottom: 8rem;
    letter-spacing: 1px;
    color: var(--small-txt);
  }
</style>
