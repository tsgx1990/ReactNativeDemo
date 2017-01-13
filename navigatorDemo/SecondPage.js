import React from "react";

import {
	StyleSheet,
	View,
	Button,
} from "react-native";

export default class SecondPage extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View style={styles.container}>
				<Button title={this.props.backTitle} onPress={this.btnPressed.bind(this)} />
			</View>
		);
	}

	btnPressed() {
		var {
			navigator
		} = this.props;
		if (navigator) {
			navigator.pop();
		}
	}
}

SecondPage.defaultProps = {
	navigator: null,
	backTitle: "",
};

SecondPage.propTypes = {
	navigator: React.PropTypes.object,
	backTitle: React.PropTypes.string,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "red",
	},
});