
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {  } from 'src/lib/formatters'

import type { DeleteAmountMutationVariables, FindAmountById } from 'types/graphql'

const DELETE_AMOUNT_MUTATION = gql`
  mutation DeleteAmountMutation($id: Int!) {
    deleteAmount(id: $id) {
      id
    }
  }
`

interface Props {
  amount: NonNullable<FindAmountById['amount']>
}

const Amount = ({ amount }: Props) => {
  const [deleteAmount] = useMutation(DELETE_AMOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('Amount deleted')
      navigate(routes.amounts())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteAmountMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete amount ' + id + '?')) {
      deleteAmount({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Amount {amount.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{amount.id}</td>
            </tr><tr>
              <th>User</th>
              <td>{amount.user}</td>
            </tr><tr>
              <th>Balance</th>
              <td>{amount.balance}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAmount({ id: amount.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(amount.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Amount
