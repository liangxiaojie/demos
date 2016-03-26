import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component/helloWorld.jsx';

main();

function main() {
  ReactDOM.render(<Hello />, document.getElementById('app'));
};
