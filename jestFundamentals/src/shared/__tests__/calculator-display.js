
import React from 'react'
import CalculatorDisplay from '../calculator-display'
import {render} from '@testing-library/react'

test('mounts', () => {
  const {container} = render(<CalculatorDisplay value="0" />)
  expect(container.firstChild).toMatchSnapshot()
})
