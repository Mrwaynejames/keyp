import EditAmountCell from 'src/components/Amount/EditAmountCell'

type AmountPageProps = {
  id: number
}

const EditAmountPage = ({ id }: AmountPageProps) => {
  return <EditAmountCell id={id} />
}

export default EditAmountPage
