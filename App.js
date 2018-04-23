import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

import Calc from './src/components/screens/Calc';


export default class App extends React.Component {
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Calc />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
})


