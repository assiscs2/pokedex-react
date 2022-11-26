import { 
    ApolloClient, 
    InMemoryCache, 
  } from '@apollo/client';

  // import { expressMiddleware } from '@apollo/server/express4';
  // import cors from 'cors';


  export const client = new ApolloClient({
    uri:'https://mighty-fjord-76016.herokuapp.com/https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache(),
  })