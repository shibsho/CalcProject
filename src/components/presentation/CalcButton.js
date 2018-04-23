import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

class CalcButton extends React.Component{
	render(){
		return(
				<TouchableOpacity
					style={styles.button}
					onPress={this.props.handleButtonInput.bind(this, this.props.value)}>
					<Text style={styles.btnText}>{this.props.value}</Text>
				</TouchableOpacity>
		)
	}
}


const styles = StyleSheet.create({
	button: {
		flex:1,
		borderWidth:1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnText: {
		fontSize: 40,
	}
})


export default CalcButton;