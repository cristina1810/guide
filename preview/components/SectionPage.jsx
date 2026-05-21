// Página de sección: cabecera + lista de StepCards.
function SectionPage({ section }) {
  const [drawerStep, setDrawerStep] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const openExplain = (step) => {
    setDrawerStep(step);
    setDrawerOpen(true);
  };
  const closeExplain = () => setDrawerOpen(false);

  return (
    <React.Fragment>
      <div className="section">
        <header className="section-head" data-screen-label={section.title}>
          <div className="section-eyebrow">Tealium iQ</div>
          <h1 className="section-title">{section.title}</h1>
          <p className="section-lead">{section.lead}</p>
        </header>

        <div className="section-steps">
          {section.steps.map((step, i) => (
            <window.StepCard
              key={i}
              index={i + 1}
              step={step}
              onExplain={openExplain}
            />
          ))}
        </div>
      </div>

      <window.ExplanationDrawer
        open={drawerOpen}
        onClose={closeExplain}
        step={drawerStep}
      />
    </React.Fragment>
  );
}

window.SectionPage = SectionPage;
