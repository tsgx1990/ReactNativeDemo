import React from "react";

import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from "react-native";

export default class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zip: "欢迎光临",
		};
	}

	render() {
		return (
			<View>

				<Text style={styles.welcome}>
					I say: {this.state.zip}
				</Text>
				<TextInput 
				style={styles.input} 
				onChange={this.handleTextChange.bind(this)} 
				placeholder="你说啥">

				</TextInput>
			</View>

		);
	}

	handleTextChange(event) {
		console.log(event.nativeEvent.text);
		this.setState({
			zip: event.nativeEvent.text,
		});
	}
}

const styles = StyleSheet.create({
	welcome: {
		fontSize: 25,
		textAlign: "center",
		margin: 10,
		color: "#F85959",
	},
	input: {
		marginLeft: 0,
		marginRight: 0,
		fontSize: 20,
		borderWidth: 3,
		borderRadius: 6,
		borderColor: "#F85959",
		height: 60,
		paddingLeft: 10,
	}
});