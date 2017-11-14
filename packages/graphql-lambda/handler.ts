import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import { schema } from './src/executable-schema';

export const graphql = graphqlLambda({ schema });
export const graphiql = graphiqlLambda({ endpointURL: '/graphql' });
