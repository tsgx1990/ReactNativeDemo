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
	Navigator,
	// StyleSheet,
	// View
} from "react-native";
// import Weather from "./weatherDemo/Weather.js";
import HomePage from "./navigatorDemo/HomePage.js";

export default class HelloRN extends Component {
	render() {

		// return (
		// 	<Weather />
		// );

		return (
			<Navigator 
			initialRoute = {{scene:HomePage}} 
			configureScene = {this.configureScene.bind(this)}
			renderScene = {this.renderScene.bind(this)}
			/>
		);

	}

	configureScene(router, routerStack) {

		if (router.sceneConfig) {
			return router.sceneConfig;
		}
		return Navigator.SceneConfigs.PushFromRight;
	}

	renderScene(router, routerStack) {
		let Scene = router.scene;
		return (
			<Scene {...router.params}
			navigator = {routerStack}
			/>
		);
	}

}

AppRegistry.registerComponent("HelloRN", () => HelloRN);