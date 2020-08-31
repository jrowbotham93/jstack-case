import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    // TODO do something with graphql error
    console.log(`error from graphql:  ${graphQLErrors}`);
  }
  if (networkError) {
    // TODO do something with network error
    console.log(`error from network:  ${networkError}`);
  }
});

// TODO  In production mode setup an error tracking service like Sentry.
const httpLink = createHttpLink({
  uri: window.GRAPHQL_API_URL
});

const link = ApolloLink.from([errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});
console.log(client);
export default client;
