<script lang="ts">
	import '../app.css';
  import '../css/style.css';
  import '../css/media.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="">
{@render children?.()}
</div>
