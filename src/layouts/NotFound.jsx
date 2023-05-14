import Vincent from '../assets/img/Vincent.jpg';
// import s from './notFound.module.css';

function NotFound() {
  return (
    <main className="wrapper">
      <h1 className="title">404</h1>
      <article className="content">
        <figure>
          <h2 className="subtitle">Not Found</h2>
          <img
            src={Vincent}
            alt="Frustrated Vincent Vega img"
            className="vincent"
          />
          <figcaption>...looks like you took a wrong path</figcaption>
        </figure>
      </article>
    </main>
  );
}

export { NotFound };
