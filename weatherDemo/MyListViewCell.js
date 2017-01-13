import React from "react";

import {
	StyleSheet,
	View,
	Text,
	TextInput,
	// Dimensions,
} from "react-native";

export default class MyListViewCell extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			textInputHeight: 40,
		};
	}

	render() {
		return (
			<View style={cellStyles.container}>
				<Text 
				style={cellStyles.text}
				numberOfLines={0}>
					{this.props.title}
				</Text>

				<TextInput  
				style={[cellStyles.textInput, {height:this.state.textInputHeight}]} 
				onChange={this.handleTextChange.bind(this)} 
				placeholder="吼吼12"
				placeholderTextColor="lightgray"
				multiline={true}
				maxLength={30}>

				</TextInput>

				<View style={cellStyles.line} />
			</View>
		);
	}

	handleTextChange(event) {
		console.log(event.nativeEvent.text);
		var height = event.nativeEvent.contentSize.height;
		height = height < 40 ? 40 : height;
		this.setState({
			textInputHeight: height,
		});
	}
}

MyListViewCell.defaultProps = {
	title: "...",
};

MyListViewCell.propTypes = {
	title: React.PropTypes.string,
};

const cellStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	text: {
		margin: 6,
		fontSize: 30,
		backgroundColor: "skyblue",
	},
	textInput: {
		marginLeft: 2,
		marginRight: 2,
		fontSize: 20,
		borderWidth: 3,
		borderRadius: 6,
		borderColor: "red",
		paddingTop: 3,
		paddingLeft: 10,
		paddingBottom: 10,
		paddingRight: 1,
	},
	line: {
		margin: 0,
		height: 1,
		backgroundColor: "lightgray",
	},
});