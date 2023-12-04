import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./libs/apollo";
import { Router } from './router';
import { useEffect } from "react";


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>   
    </ApolloProvider>
  )
}

export default App


