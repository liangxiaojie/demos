import React from 'react';
import Hello from './helloWorld.jsx';
import Hello1 from './helloWorld1.jsx';

export default class DemoList extends React.Component {
  constructor () {
    super();
    this.state = {
      currentTab: 'helloWorld'
    };
  }
  tabChange (tabName) {
    this.setState({currentTab: tabName});
  };
  render () {
    return (
      <div>
        <ul>
          <li onClick={this.tabChange.bind(this, 'helloWorld')}>helloWorld</li>
          <li onClick={this.tabChange.bind(this, 'helloWorld1')}>helloWorld1</li>
        </ul>
        <div>{this.state.currentTab}</div>
      </div>
    );
  };
};
