# React Tab Manager [![npm version](https://img.shields.io/npm/v/@srph/react-tab-manager.svg?style=flat-square)](https://npmjs.com/packages/@srph/react-tab-manager) [![Build Status](https://img.shields.io/travis/srph/react-tab-manager.svg?style=flat-square)](https://travis-ci.org/srph/react-tab-manager?branch=master)
[WIP] Build tab functionalities for complicated layouts. An advanced alternative for react-tabs.

View [demo](http://usher-diana-72251.netlify.com).

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

## API Documentation
Here's a list of props you may use to customize the component for your use-case:

### Tabs

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| activeClassName | `function` | The classname to pass to the active `TabItem`. Defaults to `active`. |

> **NOTE**: `Tabs` render all of the children you provide. It doesn't wrap it with a `div`. If you're using `React <= v15`, you will have to wrap the children you pass with div.

### TabItem

All other props are passed down to the `a` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| index | `number` (required) | The number to be set as active when clicked. |

> **NOTE**: `TabItem` ignores `href`.

### TabView

All other props are passed down to the `div` root element as usual.

| Prop  | Type | Description |
| ----- | ---- | ----------- |
| index | `number` (required) | The number to identify if tab is active |

## Setup
You can check the [demo](http://usher-diana-72251.netlify.com), or build it yourself locally:
```bash
npm install
npm run start
```

### Bundling package
```
npm run bundle
```

### Publish storybook
```
npm run storybook:publish
```