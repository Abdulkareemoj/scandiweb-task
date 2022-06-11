import React, { Component } from 'react'
// import eur from '../eur.svg'
// import usd from '../usd.svg'
// import jpy from '../jpy.svg'
import {ApolloClient, gql} from '@apollo/client';

	const EXCHANGE_RATES = gql`
{
    data {
      productName
      productImage
    }
  }
`;
client.query({ query:  EXCHANGE_RATES }).then(console.log)
export default class DropDown extends Component {
  render() {
    return (
			<select>
				<option value="$USD">usd</option>
				<option value="€EUR">eur</option>
				<option value="¥JPY">jpy</option>
			</select>
		);
  }
}
