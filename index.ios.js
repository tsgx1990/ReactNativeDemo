/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from "react";
import {
	AppRegistry,
	// StyleSheet,
	// View
} from "react-native";


import Weather from "./weatherDemo/Weather.js";
export default class HelloRN extends Component {
	render() {

		return (
			<Weather />
		);

	}
}

AppRegistry.registerComponent("HelloRN", () => HelloRN);