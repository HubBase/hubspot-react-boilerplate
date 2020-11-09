import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const targetModulesData = document.querySelectorAll(
  '.reactive-module > script[type="application/json"]',
);
targetModulesData.forEach(({ dataset, textContent }) => {
  const root = document.getElementById(`App--${dataset.moduleInstance}`);
  return ReactDOM.render(
      <App
        portalId={dataset.portalId}
        moduleData={JSON.parse(textContent)}
        moduleInstance={dataset.moduleInstance}
      />,
    root,
  );
});
