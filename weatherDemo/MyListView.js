import React from "react";

import {
	StyleSheet,
	View,
	ListView,
	Text,
	TextInput,
	// Dimensions,
} from "react-native";

class MyListViewCell extends React.Component {
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

/* MyListView */
export default class MyListView extends React.Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: this.rowHasChanged,
		});
		this.state = {
			ds: ds,
			data: [
				"peng", "ming", "hao", "qing",
				"long qweqweqw afjo asofijwepofjq oasjf",
				"我的背啊的说法哦", "好爱发 is 发 i 你你", "姐姐哦 i 佛啊嗯的那地方",
				"欢喜哦生聚光灯我却不能真的我还能幽默掉", "眼泪又怕人看破顾虑好多",
				"woxianggeguduhuanzheasdfadf",
				"外向的孤独患者有何不可，大家哦哦额就哦啊传鉴明月光疑是地上霜举头姚明也疑似地上霜 shaun"
			],
		};

		// this.requestList();
	}

	render() {
		return (
			<ListView
			style = {listStyles.listView}
			dataSource = {this.state.ds.cloneWithRows(this.state.data)}
			renderRow = {this.renderRowData.bind(this)} 
			/>
		);
	}

	processedRowData(rowData) {
		// alert(typeof rowData);
		if (typeof rowData == "string") {
			return rowData;
		} else {
			return rowData.title + "\n" + rowData.releaseYear;
		}
	}

	renderRowData(rowData) {
		return (
			<MyListViewCell title={this.processedRowData(rowData)} />
		);
	}

	rowHasChanged(r1, r2) {
		console.log(r1);
		console.log(r2);
		return r1 !== r2;
	}

	requestList(urlString) {
		console.log("requestList...->" + urlString);
		return fetch(urlString)
			.then((response) => {
				console.log("response->" + JSON.stringify(response));
				return response.json();
			})
			.then((responseJson) => {
				console.log("responseJson->" + JSON.stringify(responseJson));
				this.setState({
					data: responseJson.movies,
				});

			})
			.catch((error) => {
				console.log("error->");
				console.error(error);
			});
	}

}

// var winWidth = Dimensions.get("window").width;

const listStyles = StyleSheet.create({
	listView: {
		margin: 10,
		backgroundColor: "#F85959",
	}
});