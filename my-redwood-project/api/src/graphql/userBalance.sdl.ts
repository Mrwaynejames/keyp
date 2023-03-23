export const schema = gql`

const  {ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider
(`https://mainnet.infura.io/v3/ae7232a84d4447e2bd8a2c4e31b82393`)

const main = async () => {
  const balance = await provider.getBalance('0x73BCEb1d57711feaC4224D062b0F6ff338501e')
}

main()
`
