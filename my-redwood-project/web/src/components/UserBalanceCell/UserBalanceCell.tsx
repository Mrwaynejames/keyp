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
  return userBalance.map((userBalance) => (
    <userBalance key={userBalance.id}>
      <header>
        <h2>
          <u>{userBalance.user}</u>
        </h2>
      </header>
      <p>
        Remaining Balance: <strong>${userBalance.balance}</strong>
      </p>
    </userBalance>
  ))
}
