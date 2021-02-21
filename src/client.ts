import { DocumentNode, GraphQLFormattedError } from 'graphql';
import gql from 'graphql-tag';
import { sendMessage } from './browser';
import { GenericVariables, FinchMessageKey, FinchQueryOptions } from './types';
import { isDocumentNode } from './utils';

const messageCreator = <Variables extends GenericVariables = {}>(
  query: string | DocumentNode,
  variables: Variables,
  messageKey?: string,
) => {
  return {
    type: messageKey ?? FinchMessageKey.Generic,
    query: isDocumentNode(query) ? query : gql(query),
    variables,
  };
};

export const queryApi = async <
  Query extends {} = {},
  Variables extends GenericVariables = {}
>(
  query: string | DocumentNode,
  variables?: Variables,
  options: FinchQueryOptions = {},
) => {
  const { id: extensionId, messageKey } = options;
  const args: [string, unknown] | [unknown] = [
    messageCreator<Variables>(query, variables, messageKey),
  ];

  if (extensionId) {
    args.unshift(extensionId);
  }

  const resp = sendMessage<{
    data: Query | null;
    errors?: GraphQLFormattedError[];
  }>(...args);
  return resp;
};
