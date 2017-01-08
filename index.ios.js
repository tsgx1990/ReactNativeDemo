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
	StyleSheet,
	View
} from "react-native";


import Weather from "./weatherDemo/Weather.js";
export default class HelloRN extends Component {
	render() {

		return (
			<View style={styles.container}> 
				<Weather />
			</View>
		);

		// return (
		//   <View style={styles.container}>
		//     <Text style={styles.welcome}>
		//       Welcome to React Native!
		//     </Text>
		//     <Text style={styles.instructions}>
		//       To get started, edit index.ios.js
		//     </Text>
		//     <Text style={styles.instructions}>
		//       Press Cmd+R to reload,{'\n'}
		//       Cmd+D or shake for dev menu
		//     </Text>
		//   </View>
		// );

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 30,
		textAlign: "center",
		margin: 10,
		color: "#F85959",
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});

AppRegistry.registerComponent("HelloRN", () => HelloRN);