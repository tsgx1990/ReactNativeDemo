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
	// Button,
	TouchableOpacity,
	StyleSheet,
	Text,
	View
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
			initialRoute = {{scene:HomePage, title: "首页"}} 
			configureScene = {this.configureScene.bind(this)}
			renderScene = {this.renderScene.bind(this)}
			navigationBar = {
				<Navigator.NavigationBar
				style = {styles.navigationBar}
				routeMapper = {NavigationBarRouteMapper} />
			}
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

var NavigationBarRouteMapper = {

	LeftButton(route, navigator, index, navState) {
		if (index > 0) {
			return (
				<View style={styles.leftContainer}>
					<TouchableOpacity 
					style={styles.backButton}
					onPress = { () => {
						if (index > 0) {
							navigator.pop();
						}
					}}> 

					<Text style={styles.backText}>
						返回
					</Text>

					</TouchableOpacity>
				</View>
				
			);
		}
		else {
			return null;
		}
	},

	RightButton(route, navigator, index, navState) {
		if (route.onPress) {
			return (
				<Button
				title = "前进" 
				onPress = { () => {
					route.onPress();
				}}
				/>
			);
		}
	},

	Title(route, navigator, index, navState) {
		return (
			<View style={styles.titleContainer}>
				<Text style={styles.titleText}>
					{route.title}{/*alert(JSON.stringify(navState))*/}
				</Text>
			</View>
		);
	},
};

const styles = StyleSheet.create({
	navigationBar: {
		backgroundColor: "green",
	},

	leftContainer: {
		backgroundColor:"white", 
		padding: 0,
	},

	backButton: {
		padding: 8, 
		backgroundColor: "orange",
		margin: 3,
	},

	backText: {
		color: "blue",
		fontSize: 18,
	},

	titleContainer: {
		backgroundColor: "darkgray",
	},

	titleText: {
		color: "white",
		fontSize: 20,
		padding: 10,
	},

});

AppRegistry.registerComponent("HelloRN", () => HelloRN);