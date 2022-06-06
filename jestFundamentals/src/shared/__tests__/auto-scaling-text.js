/**
 * @jest-environment jsdom
 */


import React from 'react'
import AutoScalingText from '../auto-scaling-text'
import {render} from '@testing-library/react'


test('renders', () => {
  render(<AutoScalingText />)
})

test('mounts', () => {
  const {container} = render(<AutoScalingText value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})
