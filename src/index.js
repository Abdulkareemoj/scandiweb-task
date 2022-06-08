import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache, gql
} from '@apollo/client';


const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
});


const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const EXCHANGE_RATES = gql`
{
    data {
      productName
      productImage
    }
  }
`;
client.query({ query:  EXCHANGE_RATES }).then(console.log)

ReactDOM.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
  document.getElementById('root')
);


