import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("simple-greeting")
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    .testclass {
      color: var(--my-var, blue);
    }
  `;

  // Declare reactive properties
  @property({ type: String })
  name?: string = "World";

  createRenderRoot() {
    return this;
  }

  // Render the UI as a function of component state
  render() {
    return html`<button type="submit" class="testclass">
      Hello, ${this.name}!
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "simple-greeting": SimpleGreeting;
  }
}
