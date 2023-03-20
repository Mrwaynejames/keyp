import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AmountForm from 'src/components/Amount/AmountForm'

import type { CreateAmountInput } from 'types/graphql'

const CREATE_AMOUNT_MUTATION = gql`
  mutation CreateAmountMutation($input: CreateAmountInput!) {
    createAmount(input: $input) {
      id
    }
  }
`

const NewAmount = () => {
  const [createAmount, { loading, error }] = useMutation(
    CREATE_AMOUNT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Amount created')
        navigate(routes.amounts())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateAmountInput) => {
    createAmount({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Amount</h2>
      </header>
      <div className="rw-segment-main">
        <AmountForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAmount
