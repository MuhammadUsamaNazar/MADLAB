import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from './componemts/Box';
import HomeBox from './componemts/HomeBox';
import Quater from './componemts/Quater';
import Slots from './componemts/Slots';

export default function App() {
  return (
    <View style={styles.container}>
      <Quater colors_1='blue' colors_2='red' rotation='0deg'/>
      <Quater colors_1='red' colors_2='blue' rotation='0deg'/>
      <Quater colors_1='green' colors_2='red' rotation='0deg'/>
      <Quater colors_1='yellow' colors_2='green' rotation='0deg'/>
    </View>      

    
  );
}



const styles = StyleSheet.create({
  container: {
  flexDirection:'column',
},
box: {
  marginTop: 10
}

});
