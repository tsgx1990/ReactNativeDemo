import React from "react";

import {
	StyleSheet,
	View,
	Text,
	Image,
	TextInput,
} from "react-native";

import MyListView from "./MyListView.js";

export default class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zip: "欢迎光临",
		};

		// setInterval(() => {
		// 	this.setState({
		// 		zip: "huohuo",
		// 	});
		// }, 2000);
	}

	render() {

		// require("../imgs/test_top.png");
		let pic = {
			uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
		};

		return (
			<View style={styles.view}>

				<Text style={styles.welcome}>
					I: {this.state.zip}
				</Text>

				<TextInput  
				style={styles.input} 
				onChange={this.handleTextChange.bind(this)} 
				placeholder="你说啥好呢！"
				placeholderTextColor="yellow">

				</TextInput>

				<Image style={styles.image} source={pic} /> 

				<MyListView />
			
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

	view: {
		flex: 0,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "powderblue",
	},
	welcome: {
		// flex: 1,
		fontSize: 20,
		color: "#F85959",
		fontWeight: "bold",
		textAlign: "center",
		margin: 10,
	},
	input: {
		// flex: 2,
		marginLeft: 0,
		marginRight: 0,
		fontSize: 20,
		borderWidth: 3,
		borderRadius: 6,
		borderColor: "steelblue",
		height: 40,
		paddingLeft: 10,
	},
	image: {
		// flex: 0.5,
		// marginLeft: 10,
		// marginTop: 20,
		width: 40,
		height: 40,
		backgroundColor: "#123456",
	},
});