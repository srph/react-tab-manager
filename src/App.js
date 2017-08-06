import React, { Component } from 'react';
import Tabs from './Tabs';
import './App.css';

class App extends Component {
  render() {
    return (
      <Tabs>
        <div className="app">
          <div className="panel">
            <h4 className="title">Subtasks</h4>
            <div className="nav">
              <Tabs.Item index={0}>All</Tabs.Item>
              <Tabs.Item index={1}>Other</Tabs.Item>
            </div>
          </div>

          <div className="content">
            <Tabs.View index={0}>
              Baz!! 
            </Tabs.View>

            <Tabs.View index={1}>
              Bar!!
            </Tabs.View>
          </div>
        </div>
      </Tabs>
    );
  }
}

export default App;
