import gql from 'graphql-tag'

export const extensionsSchema = gql`
  type Extension {
    name: String!
    version: String!
    id: String!
    icon: String!
  }

  extend type Query {
    extensions: [Extension!]!
    manifest: Extension!
  }

  extend type Mutation {
    requestManagementPermission: Boolean!
  }
`
