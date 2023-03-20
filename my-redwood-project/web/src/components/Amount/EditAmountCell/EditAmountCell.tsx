import type { EditAmountById, UpdateAmountInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AmountForm from 'src/components/Amount/AmountForm'

export const QUERY = gql`
  query EditAmountById($id: Int!) {
    amount: amount(id: $id) {
      id
      user
      balance
    }
  }
`
const UPDATE_AMOUNT_MUTATION = gql`
  mutation UpdateAmountMutation($id: Int!, $input: UpdateAmountInput!) {
    updateAmount(id: $id, input: $input) {
      id
      user
      balance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ amount }: CellSuccessProps<EditAmountById>) => {
  const [updateAmount, { loading, error }] = useMutation(
    UPDATE_AMOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Amount updated')
        navigate(routes.amounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateAmountInput,
    id: EditAmountById['amount']['id']
  ) => {
    updateAmount({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Amount {amount?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <AmountForm amount={amount} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
