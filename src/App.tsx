export default function App() {
  return (
    <main className="home">
      <header className="home__header">
        <div className="brand">
          <span className="brand__dot" aria-hidden="true" />
          <span className="brand__name">Pixeliahq</span>
        </div>
      </header>

      <section className="home__hero">
        <p className="home__eyebrow">
          Welcome
          <span className="home__dot" aria-hidden="true" />
        </p>
        <h1 className="home__title">
          Pixeliahq
          <span className="home__dot" aria-hidden="true" />
        </h1>
        <p className="home__lead">
          A calm, focused space for your pixel work. Start creating and explore what's new.
        </p>
        <div className="home__actions">
          <button type="button" className="btn btn--primary">
            Get started
          </button>
          <button type="button" className="btn btn--ghost">
            Learn more
          </button>
        </div>
      </section>
    </main>
  );
}
