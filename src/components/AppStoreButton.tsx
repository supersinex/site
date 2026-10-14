import React from 'react';
import badge from '../app-store-badge.svg';
import { APP_STORE_URL } from '../constants';

type Props = {
  className?: string;
};

function AppStoreButton({ className = '' }: Props) {
  return (
    <a
      className={`app-store-button ${className}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={badge} alt="Download on the App Store" />
    </a>
  );
}

export default AppStoreButton;
