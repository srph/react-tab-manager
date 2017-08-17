import React from 'react';
import {storiesOf} from '@storybook/react';
import Tabs, {TabItem, TabView} from '../src';

storiesOf('Tab', module)
  .add('basic', () => (
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
  ))