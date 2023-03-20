import { Prisma, Amount } from '@prisma/client'

import {
  amounts,
  amount,
  createAmount,
  updateAmount,
  deleteAmount,
} from './amounts'
import type { StandardScenario } from './amounts.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('amounts', () => {
  scenario('returns all amounts', async (scenario: StandardScenario) => {
    const result = await amounts()

    expect(result.length).toEqual(Object.keys(scenario.amount).length)
  })

  scenario('returns a single amount', async (scenario: StandardScenario) => {
    const result = await amount({ id: scenario.amount.one.id })

    expect(result).toEqual(scenario.amount.one)
  })

  scenario('creates a amount', async () => {
    const result = await createAmount({
      input: { user: 'String', balance: 5535052.340553093 },
    })

    expect(result.user).toEqual('String')
    expect(result.balance).toEqual(new Prisma.Decimal(5535052.340553093))
  })

  scenario('updates a amount', async (scenario: StandardScenario) => {
    const original = (await amount({ id: scenario.amount.one.id })) as Amount
    const result = await updateAmount({
      id: original.id,
      input: { user: 'String2' },
    })

    expect(result.user).toEqual('String2')
  })

  scenario('deletes a amount', async (scenario: StandardScenario) => {
    const original = (await deleteAmount({
      id: scenario.amount.one.id,
    })) as Amount
    const result = await amount({ id: original.id })

    expect(result).toEqual(null)
  })
})
