import { Component, Prop, h } from "@stencil/core";

/**
 * @parent accordion
 */

@Component({
  tag: "a-accordion-content",
  styleUrl: "accordion-content.css",
  shadow: true,
})
export class AccordionContent {
  /**
   * @internal
   */
  @Prop() open: boolean;

  render() {
    return (
      <div
        class={{
          "accordion-content": true,
          "accordion-content--closed": !this.open,
        }}
        part="accordion-content"
      >
        <slot></slot>
      </div>
    );
  }
}
