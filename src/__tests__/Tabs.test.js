import React from 'react'
import T from 'prop-types'
import Tabs from '../'
import {shallow, mount} from 'enzyme'


test('it should render children', () => {
  const CoolKid = () => <div />
  const wrapper = shallow(<Tabs><CoolKid /></Tabs>)
  expect(wrapper.contains(<CoolKid />)).toBe(true)
})

test('it should default active to first tab', () => {
  const wrapper = shallow(<Tabs><div /></Tabs>)
  expect(wrapper.state('view')).toBe(0)
})

test('switch should change current active tab', () => {
  const wrapper = shallow(<Tabs><div /></Tabs>)
  wrapper.setState({ view: 255 })
  expect(wrapper.state('view')).toBe(255)
})

test('prop.activeClassName should default to "active"', () => {
  const wrapper = mount(<Tabs><div /></Tabs>)
  expect(wrapper.prop('activeClassName')).toBe('active')
})

test('it should pass down context', () => {
  function ShouldReceiveProps() {
    return <div />
  }

  function ShouldReceiveContext(props, context) {
    return <ShouldReceiveProps {...context.tabs} />
  }

  ShouldReceiveContext.contextTypes = {
    tabs: T.object
  }

  const wrapper = mount(<Tabs><ShouldReceiveContext /></Tabs>)
  expect(Object.keys(wrapper.find(ShouldReceiveProps).props('tabs'))).toEqual(['view', 'switch', 'activeClassName'])
})