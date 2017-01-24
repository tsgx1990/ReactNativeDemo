import React from "react";
import {
	NavigationExperimental,
} from "react-native";

const {
	CardStack: NavigationCardStack,
	StateUtils: NavigationStateUtils,
	Header: NavigationHeader,
} = NavigationExperimental;

import MyExperHomePage from "./MyExperHomePage.js";

export default class MyExperimentalNavigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navigationState: {
				index: 0,
				routes: [{key: "MyExperHomePage", scene: MyExperHomePage, params: null}],
			}
		};
		this._onPushRoute = this._onPushRoute.bind(this);
		this._onPopRoute = this._onPopRoute.bind(this);
		this._renderScene = this._renderScene.bind(this);
		this._renderHeader = this._renderHeader.bind(this);
	}

	_renderScene(sceneProps) {
		console.log(JSON.stringify(sceneProps));
		var route = sceneProps.scene.route;
		return (
			<route.scene
			route = {route}
			{...route.params}
			onPushRoute = {this._onPushRoute}
			onPopRoute = {this._onPopRoute} />
		);
	}

	_renderHeader(sceneProps, backAction){
		// NavigationHeader
		// alert(JSON.stringify(sceneProps));
		return (
			// <View style={{backgroundColor:"orange", height: 64}}/>

			<NavigationHeader
			style={{backgroundColor:"yellow"}}
			{...sceneProps}
			onNavigateBack={backAction}
			// renderTitleComponent={props => this._renderHeaderTitle(props)}
			/>
		);
	}

	_onPushRoute(route) {
		let {navigationState} = this.state;
		navigationState = NavigationStateUtils.push(navigationState, route);
		// alert(JSON.stringify(navigationState));
		if (navigationState !== this.state.navigationState) {
			this.setState({ navigationState });
		}
	}

	_onPopRoute() {
		let {navigationState} = this.state;
		navigationState = NavigationStateUtils.pop(navigationState);
		// alert(JSON.stringify(navigationState));
		if (navigationState !== this.state.navigationState) {
			this.setState({ navigationState });
		}
	}

	render() {
		return (
			<NavigationCardStack 
			navigationState = {this.state.navigationState}
			onNavigateBack = {this._onPopRoute}
			renderScene = {this._renderScene} 
			renderHeader = {this._renderHeader}
			enableGestures = {true}
			/>
		);
	}

}