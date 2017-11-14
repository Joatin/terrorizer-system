import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';
import schemaDef from './schema';

const executableSchema = makeExecutableSchema({
  typeDefs: [
    ...schemaDef
  ],
  resolvers: {}
});


addMockFunctionsToSchema({ schema: executableSchema });

export const schema = executableSchema;
