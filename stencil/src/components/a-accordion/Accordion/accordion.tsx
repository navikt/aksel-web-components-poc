import { Component, Element, Prop, h } from "@stencil/core";

@Component({
  tag: "a-accordion",
  shadow: true,
})
export class Accordion {
  @Element() el: HTMLAAccordionElement;

  /**
   * The type of accordion to be displayed.
   */
  @Prop() variant: "default" | "neutral" = "default";

  componentWillLoad() {
    this.el.lastElementChild.setAttribute("last", "true");

    this.el.childNodes.forEach(
      (child: HTMLAAccordionItemElement) => (child.variant = this.variant)
    );
  }

  render() {
    return (
      <div
        class={{
          accordion: true,
        }}
        part="accordion"
      >
        <slot />
      </div>
    );
  }
}
