# React Tab Manager
[WIP] Build tab functionalities for complicated layouts. An advanced alternative for react-tabs.

## Why?
react-tabs works very well, but there are projects where the layout is slightly different from your usual tabs. Usual tabs use the following layout:
<!-- Insert Image -->

But this isn't intuitive when you have layout like the following:
<!-- Insert Image -->

### How It Works

This library takes advantage of context to pass down data to the navigation and view. react-tabs uses clones the element (via `React.cloneElement`), and passes down its props directly.

## Installation
```
npm i @srph/react-tab-manager
```

## Usage
```js
import React from 'react';
import Tabs, {TabView, TabItem} from '@srph/react-tab-manager';

class App extends React.Component {
  render() {
    return (
      <Tabs>
        <div className="app">
          <div className="panel">
            <h4 className="title">Subtasks</h4>
            <div className="nav">
              <TabItem index={0}>All</TabItem>
              <TabItem index={1}>Other</TabItem>
            </div>
          </div>

          <div className="content">
            <TabView index={0}>
              Baz!! 
            </TabView>

            <TabView index={1}>
              Bar!!
            </TabView>
          </div>
        </div>
      </Tabs>
    );
  }
}

export default App;
```