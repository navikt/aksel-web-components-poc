import { Component, Prop, Element, h } from "@stencil/core";

const ChevronArrow = () => {
  return (
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
  );
};

/**
 * @parent accordion
 */

@Component({
  tag: "a-accordion-header",
  styleUrl: "accordion-header.css",
  shadow: true,
})
export class AccordionHeader {
  @Element() el: HTMLAAccordionHeaderElement;

  /**
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Prop() toggleState: any = () => {};

  /**
   * @internal
   */
  @Prop() open = false;
  /**
   * @internal
   */
  @Prop() last = false;

  /**
   * @internal
   */
  @Prop() type: "default" = "default";

  /**
   * render the slot content directly
   * @returns {JSX.Element}
   */
  render(): JSX.Element {
    return (
      <button
        class={{
          "accordion-header": true,
          "accordion-header--open": this.open,
          "accordion-header--last": this.last,
        }}
        onClick={this.toggleState}
        aria-expanded={this.open.toString()}
        type="button"
        part="accordion-header"
      >
        <div class="accordion-icon-wrapper">
          <ChevronArrow />
        </div>
        <div
          class={{
            "accordion-header__text": true,
          }}
        >
          <slot></slot>
        </div>
      </button>
    );
  }
}
