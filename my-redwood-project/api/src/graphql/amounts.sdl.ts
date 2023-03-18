export const schema = gql`
  type Amount {
    id: Int!
    user: String!
    balance: Float!
  }

  type Query {
    amounts: [Amount!]! @requireAuth
    amount(id: Int!): Amount @requireAuth
  }

  input CreateAmountInput {
    user: String!
    balance: Float!
  }

  input UpdateAmountInput {
    user: String
    balance: Float
  }

  type Mutation {
    createAmount(input: CreateAmountInput!): Amount! @requireAuth
    updateAmount(id: Int!, input: UpdateAmountInput!): Amount! @requireAuth
    deleteAmount(id: Int!): Amount! @requireAuth
  }
`
