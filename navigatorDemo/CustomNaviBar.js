import React from "react";

import {
	StyleSheet,
	View,
	Button,
	Text,
} from "react-native";

export default class CustomNaviBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>

					<View style={styles.leftItemsContainer}>
						<Button 
						title="后退" 
						onPress={this.leftBtnPressed.bind(this)} />
					</View>

					<View style={styles.titleView}>
						<Text style={styles.titleText}>
							{this.props.title}
						</Text>
					</View>

					<View style={styles.rightItemsContainer}>
						<Button 
						title="前进" 
						onPress={this.rightBtnPressed.bind(this)} />
					</View>

				</View>
				
			</View>
		);
	}

	leftBtnPressed() {
		alert("leftBtnPressed");
	}

	rightBtnPressed() {
		alert("rightBtnPressed");
	}

}

CustomNaviBar.defaultProps = {
	title: "标题",
};

CustomNaviBar.propTypes = {
	title: React.PropTypes.string,
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "flex-end",
		alignItems: "stretch",
		backgroundColor: "#F85858",
		height: 64,
	},
	subContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		height: 44,
	},

	leftItemsContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	rightItemsContainer: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
	},

	titleView: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		// backgroundColor: "purple",
	},

	titleText: {
		textAlign: "center",
		fontSize: 22,
		color: "white",
		backgroundColor: "black",
	},
});