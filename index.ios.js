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
} from "react-native";

// import Weather from "./weatherDemo/Weather.js";
import CustomNavigator from "./navigatorDemo/CustomNavigator.js";

export default class HelloRN extends Component {
	render() {

		// return (
		// 	<Weather />
		// );

		return (
			<CustomNavigator />
		);

	}

}

AppRegistry.registerComponent("HelloRN", () => HelloRN);