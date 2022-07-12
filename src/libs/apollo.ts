import { 
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider, 
    gql 
  } from '@apollo/client';

  export const client = new ApolloClient({
    uri:'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })