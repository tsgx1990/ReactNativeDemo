import React from "react";
import {
	StyleSheet,
	View,
	Button,
	Text,
	Navigator,
} from "react-native";
import SecondPage from "./SecondPage.js";

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}> 
				<Text> 
					This is home page!!!
				</Text>
				<Button title="点我进入下一个场景" onPress={this.pushBtnPressed.bind(this)} />
			</View>
		);
	}

	pushBtnPressed() {
		if (this.props.navigator) {
			this.props.navigator.push({
				scene: SecondPage,
				title: "第二页",
				sceneConfig: Navigator.SceneConfigs.PushFromRight,
				params: {
					backTitle: "返回上一场景1",
				},
			});
		}
	}

}

HomePage.defaultProps = {
	navigator: null,
};

HomePage.propTypes = {
	navigator: React.PropTypes.object,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "skyblue",
	},


});