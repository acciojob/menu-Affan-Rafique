import React from 'react';
import ReactDOM from 'react-dom';

// This path is CRITICAL.
// It must point to your App.js file inside the 'components' folder.
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


