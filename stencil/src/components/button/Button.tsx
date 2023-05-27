import { Component, h } from "@stencil/core";

/**
 *  a-button component
 */
@Component({
  tag: "a-button",
  styleUrl: "button.css",
  shadow: true,
})
export class AccordionItem {
  render() {
    return (
      <div class="button" part="button">
        Button
      </div>
    );
  }
}
