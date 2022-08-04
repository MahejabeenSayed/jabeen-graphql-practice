import React from "react";
import "./App.css";
import Layout from "./components/layout";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:9000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    </div>
  );
}

export default App;
