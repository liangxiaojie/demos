import React from 'react';
import Hello from './helloWorld.jsx';
import Hello1 from './helloWorld1.jsx';

export default class DemoList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentTab: Hello
    };
  }
  tabChange (tabName) {
    this.setState({currentTab: tabName});
  };
  render () {
    const CurrentTab = this.state.currentTab;
    return (
      <div>
        <ul>
          <li onClick={this.tabChange.bind(this, Hello)}>helloWorld</li>
          <li onClick={this.tabChange.bind(this, Hello1)}>helloWorld1</li>
        </ul>
        <CurrentTab />
      </div>
    );
  };
};
