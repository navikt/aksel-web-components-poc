import "./App.css";

function App() {
  return (
    <div>
      <a-accordion variant="neutral" id="testId" data-testid="mytestid">
        <a-accordion-item>
          <a-accordion-header>Accordion Header</a-accordion-header>
          <a-accordion-content>Accordion content</a-accordion-content>
        </a-accordion-item>
        <a-accordion-item>
          <a-accordion-header>Accordion Header</a-accordion-header>
          <a-accordion-content>Accordion content</a-accordion-content>
        </a-accordion-item>
      </a-accordion>
    </div>
  );
}

export default App;
