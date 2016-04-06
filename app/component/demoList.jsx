import React from 'react';
import Hello from './helloWorld.jsx';
import Hello1 from './helloWorld1.jsx';

export default class DemoList extends React.Component {
  tabChange (tabName) {
    // this.setState({currentTab: tabName});
    console.log(tabName);
  };
  render () {
    return (
      <ul>
        <li onClick={this.tabChange.bind(this, 'helloWorld')}>helloWorld</li>
        <li onClick={this.tabChange.bind(this, 'helloWorld1')}>helloWorld1</li>
      </ul>

    );
  };
};
