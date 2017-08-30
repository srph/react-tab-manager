import React from 'react'
import T from 'prop-types'
import Tabs, {TabItem} from '../'
import {shallow, mount} from 'enzyme'

test('it should display active classname and switch to given index when clicked', () => {
  const wrapper = mount(
    <Tabs>
      <div>
        <TabItem index={0}>foo</TabItem>
        <TabItem index={1}>bar</TabItem>
      </div>
    </Tabs>
  )

  expect(wrapper.find(TabItem).first().hasClass('active')).toBe(true)
  expect(wrapper.find(TabItem).at(1).hasClass('active')).toBe(false)
  wrapper.find(TabItem).at(1).simulate('click')
  expect(wrapper.find(TabItem).first().hasClass('active')).toBe(false)
  expect(wrapper.find(TabItem).at(1).hasClass('active')).toBe(true)
})

test('it should pass through props to the node element except index, href, and role', () => {
  const onMouseOver = jest.fn()
  const onClick = jest.fn()
  const wrapper = mount(<Tabs><TabItem index={0} href="xD" target="_blank" onMouseOver={onMouseOver} onClick={onClick} data-cool="69">foo</TabItem></Tabs>)
  expect(wrapper.find('a').prop('index')).toBe(undefined)
  expect(wrapper.find('a').prop('href')).toBe('#')
  expect(wrapper.find('a').prop('role')).toBe('button')
  expect(wrapper.find('a').prop('onClick')).not.toBe(onClick)
  expect(wrapper.find('a').prop('data-cool')).toBe('69')
  expect(wrapper.find('a').prop('target')).toBe('_blank')
  expect(wrapper.find('a').prop('onMouseOver')).toBe(onMouseOver)
})

test('it should call onClick prop when clicked', () => {
  const onClick = jest.fn()
  const wrapper = mount(<Tabs><TabItem index={0} onClick={onClick}>foo</TabItem></Tabs>)
  expect(onClick.mock.calls.length).toEqual(0)
  wrapper.find('a').simulate('click')
  expect(onClick.mock.calls.length).toEqual(1)
})