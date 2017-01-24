
import React from "react";
import {
	Navigator,
	// Button,
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	Dimensions,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

import HomePage from "./HomePage.js";

export default class CustomNavigator extends React.Component {
	render() {

		return (
			<Navigator 
			initialRoute = {{scene:HomePage, title: "首页1"}}
			configureScene = {this.configureScene}
			renderScene = {this.renderScene}
			navigationBar = {
				<Navigator.NavigationBar
				style = {styles.navigationBar}
				routeMapper = {NavigationBarRouteMapper} />
			}
			/>
		);

	}

	configureScene(router, routerStack) {
		var sceneConfig = Navigator.SceneConfigs.PushFromRight;
		if (router.sceneConfig) {
			sceneConfig = router.sceneConfig;
		}

		// 修改pop手势的行为
		var popGesture = Object.assign({}, sceneConfig.gestures.pop, {
			snapVelocity: 0.8,
			edgeHitWidth: SCREEN_WIDTH / 2.0,
		});

		// 重置场景切换的部分配置
		sceneConfig = Object.assign({}, sceneConfig, {
			springTension: 60, // 控制弹性动画的快慢，值越大，动画越快
			springFriction: 6,
			gestures: {
				pop: popGesture,
			}
		});
		return sceneConfig;
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
		justifyContent: "center",
		height: 44,
	},

	backButton: {
		backgroundColor: "orange",
	},

	backText: {
		color: "blue",
		fontSize: 18,
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
	},

	titleContainer: {
		backgroundColor: "darkgray",
		justifyContent: "center",
		height: 44,
	},

	titleText: {
		color: "white",
		fontSize: 20,
	},

});