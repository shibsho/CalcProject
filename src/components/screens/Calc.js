import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import CalcButton from '../presentation/CalcButton'

class Calc extends React.Component{

  constructor(){
  	super()
  	this.state = {
  		inputText: "",
  		pendingOperation: null,
  		firstOperand: "",
  	}
  	this.validKeys = [
  		"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "/", "*", "=", "C", 
  	]
  }

	handleInput(text){
		this.setState({
			inputText: text,
		})
	}

	handleButtonInput(text){
		if (["+", "-", "/", "*"].indexOf(text)>-1){
			this.setState({
				pendingOperation: text,
				firstOperand: this.state.inputText,
				inputText: "",
			})
			return;
		}else if (text==="="){
			this.calculate()
			return;
		}else if(text==="C"){
			this.setState({
				inputText: "",
				pendingOperation: null,
				firstOperand: "",
			})
			return;
		}
		this.setState({
			inputText: this.state.inputText + text,
		})
	}

	calculate(){
		let result = null;
		switch(this.state.pendingOperation){
			case "+":
				result = (Number(this.state.firstOperand) + Number(this.state.inputText));
				break;
			case "-":
				result = (Number(this.state.firstOperand) - Number(this.state.inputText));
				break;
			case "/":
				result = (Number(this.state.firstOperand) / Number(this.state.inputText));
				break;
			case "*":
				result = (Number(this.state.firstOperand) * Number(this.state.inputText));
				break;
			default:
				return;
		}
		result = result.toString();
		this.setState({
			inputText: result,
			pendingOperation: null,
			firstOperand: "",
		})
	}

render(){
		return(
			<View style={{ flex:1, backgroundColor: "#fff",}}>
				<TextInput 
					style={styles.input}
					value={this.state.inputText}
					onChangeText={this.handleInput.bind(this)}
				/>
				<View style={{ flex:1}}>
					{this.validKeys.map((key, i, array)=>{
						if(i%2!=0){
							return;
						}
						return(
							<View style={styles.row}>
								<CalcButton value={array[i]} handleButtonInput={this.handleButtonInput.bind(this)}/>
								<CalcButton value={array[i+1]} handleButtonInput={this.handleButtonInput.bind(this)}/>
							</View>
						)
					})}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: { 
		height: 100,
		backgroundColor: "rgb(41,41,41)",
		color:"#FFF",
		fontSize:48,
		textAlign:'right',
	},
	row: {
		flex:1,
		flexDirection: "row",
	},
})

export default Calc;

