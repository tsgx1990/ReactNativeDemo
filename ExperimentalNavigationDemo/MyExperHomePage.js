import React from "react";
import {
	StyleSheet,
	View,
	Button,
	Text,
	Animated,
} from "react-native";
import MyExperSecondPage from "./MyExperSecondPage.js";

export default class MyExperHomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scaleValue: new Animated.Value(0.0),
		};
	}

	render() {

		var tmp = "下一";

		return (
			<View style={styles.container}> 
				<Text> 
					This is home page!!!
				</Text>
				<Button title={`点我进入${tmp}场景`} onPress={this.pushBtnPressed.bind(this)} />

				<Animated.Image 
				source = {{uri:"http://pic6.huitu.com/res/20130116/84481_20130116142820494200_1.jpg"}}
				style = {[
					styles.image,
					{
						transform: [
							{
								scale: this.state.scaleValue,
							}
						]
					}
				]} />
			</View>
		);
	}

	componentDidMount() {
		this.state.scaleValue.setValue(1);
		Animated.spring(
			this.state.scaleValue,
			{
				toValue: 1.5,
				duration: 9,
				friction: 0.1,	// 影响弹性动画的次数，值越大，弹得次数越少
				tension: 10,  	// 影响弹性动画的快慢，值越大，弹得越快
			}
		).start();
	}

	pushBtnPressed() {
		this.props.onPushRoute({
			key: "MyExperSecondPage",
			scene: MyExperSecondPage,
			params: null,
		});
	}

}

MyExperHomePage.defaultProps = {
	route: null,
	onPushRoute() {},
	onPopRoute() {},
};

MyExperHomePage.propTypes = {
	route: React.PropTypes.object,
	onPushRoute: React.PropTypes.func,
	onPopRoute: React.PropTypes.func,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(123, 46, 23, 0.5)",
	},

	image: {
		marginTop: 40,
		width: 100,
		height: 80,
	}

});