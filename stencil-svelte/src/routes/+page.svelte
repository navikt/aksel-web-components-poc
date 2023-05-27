<script>
  import "stencil/css";
  import { onMount } from "svelte";

  onMount(async () => {
    await import("stencil");
  });
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>
