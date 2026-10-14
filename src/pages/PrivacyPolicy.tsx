import React from 'react';
import { APP_NAME, APP_STORE_URL, DEVELOPER } from '../constants';

const EFFECTIVE_DATE = 'October 14, 2026';

function PrivacyPolicy() {
  return (
    <section className="page">
      <div className="page__inner">
        <h1 className="section__title">
          <span>Privacy Policy</span>
        </h1>
        <div className="prose">
          <p className="prose__meta">Effective {EFFECTIVE_DATE}</p>

          <p className="prose__summary">
            <strong>The short version:</strong> {APP_NAME} does not collect, track, or share
            any of your data. Everything you create stays on your device.
          </p>

          <h2>Information we collect</h2>
          <p>
            None. {APP_NAME} has no accounts or sign-ups, and it does not include analytics,
            advertising, or tracking of any kind. The developer cannot see your countdowns,
            your settings, or how you use the app.
          </p>

          <h2>Data stored on your device</h2>
          <p>
            Your countdowns, themes, and settings are stored locally on your device so the
            app and its widgets can display them. This data is managed entirely by you. You
            can edit or delete it at any time, and deleting the app removes it.
          </p>
          <p>
            If you back up your device using iCloud or a computer, those backups may include
            this data. Backups are handled by Apple and are covered by Apple's privacy policy.
          </p>

          <h2>In-app tips</h2>
          <p>
            {APP_NAME} offers optional tips through in-app purchase. These payments are
            processed entirely by Apple. The developer does not receive your name, payment
            details, or any other personal information when you leave a tip.
          </p>

          <h2>Sharing with third parties</h2>
          <p>
            Your data is never sold, rented, or shared with anyone, including the developer.
          </p>

          <h2>Children's privacy</h2>
          <p>
            {APP_NAME} is suitable for all ages. Because the app does not collect personal
            information from anyone, it does not collect personal information from children.
          </p>

          <h2>This website</h2>
          <p>
            This website does not use cookies, analytics, or tracking. It loads fonts from
            Google Fonts, which means your browser connects to Google's servers to download
            them.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, the updated version will be posted on this page with a
            new effective date.
          </p>

          <h2>Contact</h2>
          <p>
            {APP_NAME} is developed by {DEVELOPER}. If you have questions about this policy,
            you can reach the developer through the{' '}
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App Store listing
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
