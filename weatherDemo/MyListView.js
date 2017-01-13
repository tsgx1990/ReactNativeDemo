import React from "react";

import {
	StyleSheet,
	ListView,
	// Dimensions,
} from "react-native";

import MyListViewCell from "./MyListViewCell.js";
import MyListViewHeader from "./MyListViewHeader.js";

/* MyListView */
export default class MyListView extends React.Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			getSectionData: this.getSectionData,
			sectionHeaderHasChanged: this.sectionHeaderHasChanged,
			getRowData: this.getRowData,
			rowHasChanged: this.rowHasChanged,
		});

		// var data = [
		// 	"peng", "ming", "hao", "qing",
		// 	"long qweqweqw afjo asofijwepofjq oasjf",
		// 	"我的背啊的说法哦", "好爱发 is 发 i 你你", "姐姐哦 i 佛啊嗯的那地方",
		// 	"欢喜哦生聚光灯我却不能真的我还能幽默掉", "眼泪又怕人看破顾虑好多",
		// 	"woxianggeguduhuanzheasdfadf",
		// 	"外向的孤独患者有何不可，大家哦哦额就哦啊传鉴明月光疑是地上霜举头姚明也疑似地上霜 shaun"
		// ];

		var data = {
			"apple": ["xiaopeng", "qiangqiang", "mingming", "huazai"],
			"bananer": ["longge", "rongrong", "chenyuyu"],
		};

		this.state = {
			ds: ds,
			data: data,
		};

		// this.requestList();
	}

	render() {
		return (
			<ListView
			style = {listStyles.listView}
			dataSource = {this.state.ds.cloneWithRowsAndSections(this.state.data)}
			renderRow = {this.renderRowData.bind(this)} 
			renderSectionHeader = {this.renderSectionHeader.bind(this)}
			/>
		);
	}

	processedRowData(rowData) {

		return rowData;

		// if (typeof rowData == "string") {
		// 	return rowData;
		// } else {
		// 	return rowData.title + "\n" + rowData.releaseYear;
		// }
	}

	// render components
	renderRowData(rowData, sectionID, rowID, highlightRow) {
		return (
			<MyListViewCell title={this.processedRowData(rowData)} />
		);
	}

	renderSectionHeader(sectionData, sectionID) {
		return (
			<MyListViewHeader title={sectionID} />
		);
	}

	// create dataSource
	getSectionData(dataBlob, sectionID) {
		return sectionID;
	}

	sectionHeaderHasChanged(s1, s2) {
		console.log("s1=> " + s1);
		console.log("s1=> " + s2);
		return s1 !== s2;
	}

	getRowData(dataBlob, sectionID, rowID) {
		var r = dataBlob[sectionID][rowID];
		return r;
	}

	rowHasChanged(r1, r2) {
		console.log("r1=> " + r1);
		console.log("r2=> " + r2);
		return r1 !== r2;
	}

	// fetch data
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