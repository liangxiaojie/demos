import React from 'react';
import Hello from './helloWorld.jsx';
import Hello1 from './helloWorld1.jsx';

export default class DemoList extends React.Component {
  render () {
    this.state = this.state || {};
    var compNames = this.state.compNames || [];
    var compMap = {
      hello: Hello,
      hello1: Hello1
    }
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({compNames: 'hello'})
          }}>helloWorld</li>
          <li onClick={() => {
            this.setState({compNames: 'hello1'})
          }}>helloWorld1</li>
        </ul>
        <div>
          {compNames.map((name, idx) => {
            return compMap[name];
          }).toArray()}
        </div>
      </div>
    );
  }
};
