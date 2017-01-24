import React from "react";

import {
	StyleSheet,
	View,
	Button,
} from "react-native";

export default class MyExperSecondPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Button title="back" onPress={this.btnPressed.bind(this)} />
			</View>
		);
	}

	btnPressed() {
		this.props.onPopRoute();
	}
}

MyExperSecondPage.defaultProps = {
	route: null,
	onPushRoute() {},
	onPopRoute() {},
};

MyExperSecondPage.propTypes = {
	route: React.PropTypes.object,
	onPushRoute: React.PropTypes.func,
	onPopRoute: React.PropTypes.func,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "red",
	},
});