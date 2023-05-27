import { newSpecPage } from "@stencil/core/testing";
import { Accordion } from "./accordion";

describe("accordion", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [Accordion],
      html: "<accordion></accordion>",
    });
    expect(root).toEqualHtml(`
      <accordion>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </accordion>
    `);
  });

  it("renders with values", async () => {
    const { root } = await newSpecPage({
      components: [Accordion],
      html: `<accordion first="Stencil" last="'Don't call me a framework' JS"></accordion>`,
    });
    expect(root).toEqualHtml(`
      <accordion first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </accordion>
    `);
  });
});
