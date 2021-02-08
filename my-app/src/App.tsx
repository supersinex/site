import React from 'react';
import pc_icon from './dagger_icon_v3.png';
import app_store from './Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/privacy">
            <PrivacyPolicy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div className="App">
    <header className="App-header">
      <h2>Matthew Sinex</h2>
      <h5>Software Engineer</h5>
      <img src={pc_icon} className="App-logo" alt="logo" />
      <p>
        Phantom Countdown
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={app_store} className="app-store-button" alt="logo" />
      </a>
      <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
    </header>
  </div>
}

function PrivacyPolicy() {
  return <div className="App">
    <header className="App-header">
      <h2>Privacy Policy</h2>
      <p className="policy-text">
        All data in Phantom Countdown is stored locally on your device. None of your data is shared with the app developer or
        any oter entities; furthermore, it is managed entirely by the end user.
    </p>
    </header>
  </div>
}

export default App;
