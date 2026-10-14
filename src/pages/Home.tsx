import React from 'react';
import AppStoreButton from '../components/AppStoreButton';
import PhoneMockup from '../components/PhoneMockup';

const FEATURES = [
  {
    title: 'Every countdown, one place',
    body: 'Create as many countdowns as you like and keep track of every day that matters.',
  },
  {
    title: 'Widgets that steal the show',
    body: 'Put your next big day on your Home Screen and Lock Screen so it is always in view.',
  },
  {
    title: 'Make it yours',
    body: 'Choose from built-in themes, or build your own custom style for each countdown.',
  },
  {
    title: 'Always up to date',
    body: 'Your countdowns and widgets refresh on their own every day. No tapping required.',
  },
  {
    title: 'Track it your way',
    body: 'Count down to an exact date, a set number of days, or an event with no date yet.',
  },
  {
    title: 'Repeating countdowns',
    body: 'Set up repeating events that start counting down again automatically.',
  },
];

const PLATFORMS = ['iPhone', 'iPad', 'Mac'];

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">A Persona-themed countdown app</p>
            <h1 className="hero__title">
              <span>Count down</span>{' '}
              <span className="hero__title-accent">in style.</span>
            </h1>
            <p className="hero__lede">
              Phantom Countdown tracks the days until everything you are looking forward
              to, with bold themes and widgets inspired by the Persona series.
            </p>
            <div className="hero__actions">
              <AppStoreButton />
              <span className="hero__price">Free on the App Store</span>
            </div>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="features" id="features">
        <div className="section__inner">
          <h2 className="section__title">
            <span>Features</span>
          </h2>
          <ol className="feature-grid">
            {FEATURES.map((feature, index) => (
              <li className="feature" key={feature.title}>
                <span className="feature__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="platforms">
        <div className="section__inner">
          <p className="platforms__label">Available on</p>
          <ul className="platforms__list">
            {PLATFORMS.map((platform) => (
              <li key={platform}>{platform}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="section__inner cta__inner">
          <h2 className="cta__title">Lookin' cool!</h2>
          <p>Download Phantom Countdown for free and start counting.</p>
          <AppStoreButton className="app-store-button--large" />
        </div>
      </section>
    </>
  );
}

export default Home;
