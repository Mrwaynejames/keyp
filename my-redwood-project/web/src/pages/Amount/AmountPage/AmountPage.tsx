import AmountCell from 'src/components/Amount/AmountCell'

type AmountPageProps = {
  id: number
}

const AmountPage = ({ id }: AmountPageProps) => {
  return <AmountCell id={id} />
}

export default AmountPage
