import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("a-button")
export class AButton extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    .testclass {
      color: var(--my-var, blue);
    }
  `;

  // Declare reactive properties
  @property({ type: String })
  name?: string = "World";

  // Render the UI as a function of component state
  render() {
    return html`<button type="submit" class="testclass">${this.name}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "a-button": AButton;
  }
}
