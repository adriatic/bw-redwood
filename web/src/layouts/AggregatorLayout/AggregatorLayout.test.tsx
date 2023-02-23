import { render } from '@redwoodjs/testing/web'

import AggregatorLayout from './AggregatorLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AggregatorLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AggregatorLayout />)
    }).not.toThrow()
  })
})
