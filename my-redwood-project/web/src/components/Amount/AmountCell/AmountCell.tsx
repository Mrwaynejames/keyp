import type { FindAmountById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Amount from 'src/components/Amount/Amount'

export const QUERY = gql`
  query FindAmountById($id: Int!) {
    amount: amount(id: $id) {
      id
      user
      balance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Amount not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ amount }: CellSuccessProps<FindAmountById>) => {
  return <Amount amount={amount} />
}
