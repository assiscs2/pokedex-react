import { 
    ApolloClient, 
    InMemoryCache, 
  } from '@apollo/client';

  export const client = new ApolloClient({
    // uri:'https://mighty-fjord-76016.herokuapp.com/https://beta.pokeapi.co/graphql/v1beta',
    uri:'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })
  