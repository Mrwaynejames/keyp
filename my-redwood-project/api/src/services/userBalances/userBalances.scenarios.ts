import type { Prisma, userBalance } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.userBalanceCreateArgs>({
  userBalance: {
    one: { data: { name: 'String', type: 'String' } },
    two: { data: { name: 'String', type: 'String' } },
  },
})

export type StandardScenario = ScenarioData<userBalance, 'userBalance'>
