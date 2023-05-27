<svelte:options tag="a-accordion-content" />

<script lang="ts">
  let open = false;
</script>

<div
  class="accordion-content"
  class:accordion-content--closed={!open}
  part="accordion-content"
>
  <slot />
</div>

<style>
  .accordion-content {
    padding: 0 var(--a-spacing-3) var(--a-spacing-5) var(--a-spacing-11);
    animation: fadeAccordionContent 250ms ease;
  }

  .accordion-content--closed {
    display: none;
  }

  @keyframes fadeAccordionContent {
    0% {
      opacity: 0.25;
      transform: translateY(-8px);
    }

    40% {
      opacity: 0.7;
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
