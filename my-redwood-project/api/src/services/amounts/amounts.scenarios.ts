import type { Prisma, Amount } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AmountCreateArgs>({
  amount: {
    one: { data: { user: 'String', balance: 654108.0623174622 } },
    two: { data: { user: 'String', balance: 8915998.688823085 } },
  },
})

export type StandardScenario = ScenarioData<Amount, 'amount'>
