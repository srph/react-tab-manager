import React from 'react'
import T from 'prop-types'
import Tabs, {TabView} from '../'
import {shallow, mount} from 'enzyme'


test('it should display active tab', () => {
  const wrapper = mount(
    <Tabs>
      <div>
        <TabView index={0}><span>foo</span></TabView>
        <TabView index={1}><span>bar</span></TabView>
      </div>
    </Tabs>
  )

  expect(wrapper.find('span').text()).toBe('foo')
  expect(wrapper.find('span').text()).not.toBe('bar')
  wrapper.setState({ view: 1 })
  expect(wrapper.find('span').text()).toBe('bar')
  expect(wrapper.find('span').text()).not.toBe('foo')
})
