import type { ComponentMeta } from '@storybook/react'

import BalancePage from './BalancePage'

export const generated = () => {
  return <BalancePage />
}

export default {
  title: 'Pages/BalancePage',
  component: BalancePage,
} as ComponentMeta<typeof BalancePage>
