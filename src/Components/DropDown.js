import React, { Component } from 'react'
// import eur from '../eur.svg'
// import usd from '../usd.svg'
// import jpy from '../jpy.svg'
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
