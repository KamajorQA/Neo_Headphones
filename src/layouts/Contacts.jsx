function Contacts() {
  return (
    <main className="wrapper">
      <h1 className="title">Contacts</h1>

      <ul className="content">
        <li className="content__item">
          <h2 className="subtitle">Location</h2>
          <p>Saint-Petersburg, Russia</p>
        </li>
        <li className="content__item">
          <h2 className="subtitle">Phone / WhatsApp</h2>
          <p>
            <a href="tel:+79641872190">+7 (964) 187-21-90</a>
          </p>
        </li>
        <li className="content__item">
          <h2 className="subtitle">Telegram</h2>
          <p>
            <a href="https://t.me/KamajorQA" target="_blank" rel="noreferrer">
              @KamajorQA
            </a>
          </p>
        </li>
        <li className="content__item">
          <h2 className="subtitle">Email</h2>
          <p>
            <a href="mailto:kamajor@mail.ru">kamajor@mail.ru</a>
          </p>
        </li>
      </ul>
    </main>
  );
}

export { Contacts };
