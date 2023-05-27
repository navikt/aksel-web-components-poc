<svelte:options tag="a-accordion-item" />

<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let open = false;
  let last = false;
  let variant: "neutral" | "default" = "default";

  let wrapper;

  export function ontoggle() {
    console.log(open);
    open = Boolean(!open);
  }
  onMount(() => {
    wrapper.addEventListener("akselAccordionToggle", ontoggle);
  });
  onDestroy(() => {
    wrapper.removeEventListener("akselAccordionToggle", ontoggle);
  });
</script>

<div
  bind:this={wrapper}
  part="accordion-item"
  class="accordion-item"
  class:accordion-item--open={open}
  class:accordion-item--last={last}
  class:accordion-item--neutral={variant === "neutral"}
>
  <slot accordionOpen={open} />
</div>

<style>
  .accordion-item:focus-within {
    position: relative;
  }

  .accordion-item--last.accordion-item--open {
    box-shadow: inset 2px 0 0 0 var(--a-transparent),
      inset -2px 0 0 0 var(--a-transparent), inset 0 2px 0 0 var(--a-transparent),
      inset 0 -2px 0 0 var(--__ac-accordion-header-shadow-color);
  }

  .accordion-item--open {
    background-color: var(--ac-accordion-item-bg-open, var(--a-transparent));
  }

  .accordion-item--open.accordion-item--neutral {
    background-color: var(
      --ac-accordion-neutral-item-bg-open,
      var(--a-surface-neutral-subtle)
    );
  }
</style>
