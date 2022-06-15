import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const httpLink = createHttpLink({
  uri: 'http://localhost:4000/'
});


export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});



ReactDOM.render(
<BrowserRouter>
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
</BrowserRouter>,
  document.getElementById('root')
);


