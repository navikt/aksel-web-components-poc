import React, { useState } from "react";

const meta = {
  title: "Accordion",
  component: "a-accordion",
};

export default meta;

export const Default = {
  render: () => {
    const [state, setState] = useState(false);

    return (
      <div>
        <a-accordion>
          <a-accordion-item open={state}>
            <a-accordion-header onClick={() => setState((x) => !x)}>
              Accordion Header
            </a-accordion-header>
            <a-accordion-content>Accordion content</a-accordion-content>
          </a-accordion-item>
          <a-accordion-item
            open={state}
            onAccordionToggle={(e) => setState(e.detail.open)}
          >
            <a-accordion-header>Accordion Header</a-accordion-header>
            <a-accordion-content>Accordion content</a-accordion-content>
          </a-accordion-item>
        </a-accordion>
        <br />
        <a-accordion variant="neutral">
          <a-accordion-item
            open={state}
            onAccordionToggle={(e) => setState(e.detail.open)}
          >
            <a-accordion-header>Accordion Header</a-accordion-header>
            <a-accordion-content>Accordion content</a-accordion-content>
          </a-accordion-item>
          <a-accordion-item
            open={state}
            onAccordionToggle={(e) => setState(e.detail.open)}
          >
            <a-accordion-header>Accordion Header</a-accordion-header>
            <a-accordion-content>Accordion content</a-accordion-content>
          </a-accordion-item>
        </a-accordion>
      </div>
    );
  },
};
