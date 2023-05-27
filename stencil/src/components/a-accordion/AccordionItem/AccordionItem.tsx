import { Component, Element, Method, Prop, Watch, h } from "@stencil/core";

export interface AccordionToggleEvent {
  open: boolean;
}

/**
 * @parent accordion
 */
@Component({
  tag: "a-accordion-item",
  styleUrl: "accordion-item.css",
  shadow: true,
})
export class AccordionItem {
  @Element() el: HTMLAAccordionItemElement;

  private accordionHeader: HTMLAAccordionHeaderElement;

  private accordionContent: HTMLAAccordionContentElement;
  /**
   * @internal
   */
  @Prop() last = false;
  /**
   * @internal
   */
  @Prop() variant: "default" | "neutral" = "default";
  /**
   * To manage accordion open or collapsed state
   */
  @Prop({ mutable: true, reflect: true }) open = false;

  /**
   * Method available from the component to toggle open or collapsed state of accordion
   * @returns promise that resolves to true
   */
  @Method()
  async toggle() {
    this.toggleState();
    return true;
  }

  @Watch("open")
  watchopen(newValue: boolean): void {
    this.open = newValue;
    this.updateState();
  }

  toggleState = (): void => {
    this.open = !this.open;

    this.updateState();
  };

  updateState(): void {
    this.accordionHeader.open = this.open;
    this.accordionContent.open = this.open;
  }

  componentWillLoad() {
    this.accordionHeader = this.el.querySelector("a-accordion-header");
    this.accordionContent = this.el.querySelector("a-accordion-content");
    this.accordionHeader.toggleState = this.toggleState.bind(this);
    this.accordionHeader.last = this.last;
    this.updateState();
  }

  render() {
    return (
      <div
        class={{
          "accordion-item": true,
          "accordion-item--open": this.open,
          "accordion-item--last": this.last,
          "accordion-item--neutral": this.variant === "neutral",
        }}
        part="accordion-item"
      >
        <slot></slot>
      </div>
    );
  }
}
