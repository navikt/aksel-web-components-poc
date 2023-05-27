<svelte:options tag="a-accordion" />

<script lang="ts">
  export let variant: "neutral" | "default" = "default";
</script>

<div class="accordion" part="accordion">
  <slot />
</div>
