import type { FindAmounts } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Amounts from 'src/components/Amount/Amounts'

export const QUERY = gql`
  query FindAmounts {
    amounts {
      id
      user
      balance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No amounts yet. '}
      <Link
        to={routes.newAmount()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ amounts }: CellSuccessProps<FindAmounts>) => {
  return <Amounts amounts={amounts} />
}
