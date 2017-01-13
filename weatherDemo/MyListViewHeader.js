import React from "react";

import {
	StyleSheet,
	View,
	Text,
} from "react-native";

export default class MyListViewHeader extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					{this.props.title}
				</Text>
			</View>
		);
	}
}

MyListViewHeader.defaultProps = {
	title: "",
};

MyListViewHeader.propTypes = {
	title: React.PropTypes.string,
};

const styles = StyleSheet.create({

	container: {
		margin: 0,
		backgroundColor: "green",
	},
	text: {
		margin: 10,
		backgroundColor: "white",
		fontSize: 20,
	}
});