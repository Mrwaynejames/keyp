import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const amounts: QueryResolvers['amounts'] = () => {
  return db.amount.findMany()
}

export const amount: QueryResolvers['amount'] = ({ id }) => {
  return db.amount.findUnique({
    where: { id },
  })
}

export const createAmount: MutationResolvers['createAmount'] = ({ input }) => {
  return db.amount.create({
    data: input,
  })
}

export const updateAmount: MutationResolvers['updateAmount'] = ({
  id,
  input,
}) => {
  return db.amount.update({
    data: input,
    where: { id },
  })
}

export const deleteAmount: MutationResolvers['deleteAmount'] = ({ id }) => {
  return db.amount.delete({
    where: { id },
  })
}
