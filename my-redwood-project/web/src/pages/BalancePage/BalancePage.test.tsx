import { render } from '@redwoodjs/testing/web'

import BalancePage from './BalancePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BalancePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BalancePage />)
    }).not.toThrow()
  })
})
