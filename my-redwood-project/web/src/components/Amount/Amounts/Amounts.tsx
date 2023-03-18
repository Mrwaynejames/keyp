import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Amount/AmountsCell'
import { truncate } from 'src/lib/formatters'

import type { DeleteAmountMutationVariables, FindAmounts } from 'types/graphql'

const DELETE_AMOUNT_MUTATION = gql`
  mutation DeleteAmountMutation($id: Int!) {
    deleteAmount(id: $id) {
      id
    }
  }
`

const AmountsList = ({ amounts }: FindAmounts) => {
  const [deleteAmount] = useMutation(DELETE_AMOUNT_MUTATION, {
    onCompleted: () => {
      toast.success('Amount deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteAmountMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete amount ' + id + '?')) {
      deleteAmount({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User</th>
            <th>Balance</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {amounts.map((amount) => (
            <tr key={amount.id}>
              <td>{truncate(amount.id)}</td>
              <td>{truncate(amount.user)}</td>
              <td>{truncate(amount.balance)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.amount({ id: amount.id })}
                    title={'Show amount ' + amount.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAmount({ id: amount.id })}
                    title={'Edit amount ' + amount.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete amount ' + amount.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(amount.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AmountsList
