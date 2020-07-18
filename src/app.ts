import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

import {} from 'graphql';

import * as webApplicationService from './services/web-application-service';

var schema = buildSchema(`
  type WebApplication {
    id: Int
    name: String
    description: String
    url: String
    iconName: String
  }

  type Query {
    hello: String
    webApplication: [WebApplication]
  }
`);

const root = {
  hello: () => 'Hello world!',
  webApplication: () => webApplicationService.getWebApplications()
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

export const startApp = () => app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));