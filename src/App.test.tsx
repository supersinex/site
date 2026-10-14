import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page with an App Store link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/count down in style/i);
  expect(screen.getAllByAltText('Download on the App Store').length).toBeGreaterThan(0);
});
