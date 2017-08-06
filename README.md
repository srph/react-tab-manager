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
import Tabs from '@srph/react-tab-manager';

class App extends React.Component {
  render() {
    return (
      <Tabs>
        <div>
          <nav>
            <Tabs.Item index={0}>All</Tabs.Item>
            <Tabs.Item index={1}>Other</Tabs.Item>
          </nav>

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
```