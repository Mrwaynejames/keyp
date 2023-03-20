// import type {
//   FindUserBalanceQuery,
//   FindUserBalanceQueryVariables,
// } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query UserBalanceQuery {
    userBalance: amounts {
      id
      user
      balance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ userBalance }) => {
  return (
    <ul>
      {userBalance.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
