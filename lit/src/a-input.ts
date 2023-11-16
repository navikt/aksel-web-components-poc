import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
/* import { FormControlController } from "./internals/FormController"; */

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("a-input")
export class AInput extends LitElement {
  /* private readonly formControlController = new FormControlController(this, {
    assumeInteractionOn: ["a-input"],
  }); */

  static formAssociated = true;
  private _internals: ElementInternals;
  value = "";

  constructor() {
    super();
    this._internals = this.attachInternals();
  }

  connectedCallback() {
    super.connectedCallback();
    this._internals.setFormValue(this.value);
  }

  private handleInput(e: any) {
    this.value = e.target.value;
    this._internals.setFormValue(this.value);
  }

  @property()
  label = "Placeholder label";

  render() {
    return html`
      <div class="form-wrapper">
        <label>${this.label}</label>
        <input type="text" @change=${this.handleInput} />
      </div>
    `;
  }

  static styles = css`
    .form-wrapper {
      display: grid;
      gap: 0.25rem;
    }

    label {
      font-weight: 600;
    }

    input {
      min-height: 32px;
      border-radius: 8px;
      border: 1.5px solid #be185d;
      padding-inline: 0.25rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "a-input": AInput;
  }
}
