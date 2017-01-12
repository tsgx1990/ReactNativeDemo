import React from "react";

import {
	StyleSheet,
	View,
	Text,
	Image,
	Button,
	TextInput,
} from "react-native";

import MyListView from "./MyListView.js";

export default class Weather extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			zip: "",
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
			<View style={styles.container}>

				<Text style={styles.welcomeText}>
					I say: {this.state.zip}
				</Text>

				<TextInput  
				style={styles.input} 
				ref="textInput"
				onChange={this.handleTextChange.bind(this)} 
				placeholder="你说啥好呢！"
				placeholderTextColor="yellow">

				</TextInput>

				<Image style={styles.image} source={pic} /> 

				<MyListView ref="myListView"/>

				<Button 
				style={{backgroundColor: "red"}} 
				title="刷新"
				onPress={this.buttonPressed.bind(this)}>

				</Button>
			
			</View>
		);
	}

	handleTextChange(event) {
		console.log(event.nativeEvent.text);
		this.setState({
			zip: event.nativeEvent.text,
		});
	}

	buttonPressed(event) {
		event; // 消除警告
		var inputString = this.state.zip;
		console.log("urlString1->" + inputString);
		if (inputString.length == 0 || inputString == null || inputString == undefined) {
			// inputString = "http://172.25.16.17:8000/movies.json";
			inputString = "http://localhost:8000/movies.json";
			// inputString = "http://facebook.github.io/react-native/movies.json";
		}

		console.log("urlString2->" + inputString);
		this.refs.myListView.requestList(inputString);
	}
}

const styles = StyleSheet.create({

	container: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "space-around",
		alignItems: "stretch",
		backgroundColor: "powderblue",
	},
	welcomeText: {
		// flex: 1,
		fontSize: 20,
		color: "#F85959",
		fontWeight: "bold",
		textAlign: "left",
		margin: 20,
		backgroundColor: "black",
	},
	input: {
		// flex: 2,
		marginLeft: 10,
		marginRight: 10,
		fontSize: 20,
		borderWidth: 3,
		borderRadius: 6,
		borderColor: "steelblue",
		height: 40,
		paddingLeft: 10,
	},
	image: {
		// flex: 0.5,
		margin: 10,
		width: 40,
		height: 40,
		backgroundColor: "#123456",
	},

});