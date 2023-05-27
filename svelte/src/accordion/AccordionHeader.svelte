<svelte:options tag="a-accordion-header" />

<script lang="ts">
  import { onMount } from "svelte";

  let last = false;

  let button;
  const handleClick = () => {
    button.dispatchEvent(
      new CustomEvent("akselAccordionToggle", { bubbles: true, composed: true })
    );
  };
</script>

<button
  bind:this={button}
  class="accordion-header"
  class:accordion-header--last={last}
  type="button"
  part="accordion-header"
  on:click={handleClick}
>
  <div class="accordion-icon-wrapper">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="accordion-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.96967 9.46967C6.26256 9.17678 6.73744 9.17678 7.03033 9.46967L12 14.4393L16.9697 9.46967C17.2626 9.17678 17.7374 9.17678 18.0303 9.46967C18.3232 9.76256 18.3232 10.2374 18.0303 10.5303L12.5303 16.0303C12.2374 16.3232 11.7626 16.3232 11.4697 16.0303L5.96967 10.5303C5.67678 10.2374 5.67678 9.76256 5.96967 9.46967Z"
        fill="#262626"
      />
    </svg>
  </div>
  <div class="accordion-header__text">
    <slot />
  </div>
</button>

<style>
  .accordion-header {
    --__ac-accordion-header-shadow-color: var(
      --ac-accordion-header-border,
      var(--a-border-divider)
    );
    --__ac-accordion-header-shadow: inset 2px 0 0 0 var(--a-transparent),
      inset -2px 0 0 0 var(--a-transparent),
      inset 0 2px 0 0 var(--__ac-accordion-header-shadow-color);

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: var(--a-spacing-2);
    padding: var(--a-spacing-3);
    margin: 0;
    text-align: left;
    background: var(--ac-accordion-header-bg, var(--a-surface-transparent));
    cursor: pointer;
    border: none;
    position: relative;
    box-shadow: var(--__ac-accordion-header-shadow);
    z-index: 1;
  }

  .accordion-header:hover {
    background-color: var(--ac-accordion-header-bg-hover, var(--a-surface-hover));
    text-decoration: underline;
    color: var(--ac-accordion-header-text-hover, inherit);
  }

  .accordion-header__text {
    font-weight: var(--a-font-weight-bold);
    font-size: var(--a-font-size-heading-small);
    letter-spacing: -0.001em;
    line-height: var(--a-font-line-height-heading-small);
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .accordion-icon-wrapper {
    display: grid;
    place-content: center;
    border-radius: var(--a-border-radius-medium);
    height: var(--a-spacing-6);
    width: var(--a-spacing-6);
    align-self: center;
  }

  .accordion-icon {
    border-radius: var(--a-border-radius-medium);
    font-size: 1.5rem;
    height: 1.75rem;
    flex-shrink: 0;
    transition: transform 150ms ease-in-out;
    align-self: center;
  }

  .accordion-header:hover > .accordion-icon-wrapper {
    background-color: var(
      --ac-accordion-header-icon-bg-hover,
      var(--a-surface-neutral-subtle-hover)
    );
  }

  .accordion-header:hover > .accordion-icon-wrapper > .accordion-icon {
    transform: translateY(1px);
  }

  .accordion-header--open > .accordion-icon-wrapper > .accordion-icon {
    transform: translateY(0) rotate(-180deg);
  }

  .accordion-header--open:hover > .accordion-icon-wrapper > .accordion-icon {
    transform: translateY(-1px) rotate(-180deg);
  }

  .accordion-header--last {
    box-shadow: var(--__ac-accordion-header-shadow),
      inset 0 -2px 0 0 var(--__ac-accordion-header-shadow-color);
  }

  .accordion-header--last.accordion-header--open {
    box-shadow: inset 2px 0 0 0 var(--a-transparent),
      inset -2px 0 0 0 var(--a-transparent), inset 0 2px 0 0 var(--a-transparent),
      inset 0 2px 0 0 var(--__ac-accordion-header-shadow-color);
  }

  .accordion-header:focus-visible {
    outline: none;
    box-shadow: var(--a-shadow-focus);
    border-radius: var(--a-border-radius-large);
  }

  @supports not selector(:focus-visible) {
    .accordion-header:focus {
      outline: none;
      box-shadow: var(--a-shadow-focus);
      border-radius: var(--a-border-radius-large);
    }
  }
</style>
