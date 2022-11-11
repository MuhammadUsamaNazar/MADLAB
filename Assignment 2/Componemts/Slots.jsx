import React from 'react';
import {StyleSheet, View } from 'react-native';
import Box from './Box';
function Slots({ colors_1="#fff",colors_2="#fff",rotation}) {
    return (
        <View style={styles.container1}>
            <View style={styles.container}>
            <Box></Box>
            <Box colors={colors_1}></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            </View>
            <View style={styles.container}>
            <Box></Box>
            <Box colors={colors_1}></Box>
            <Box colors={colors_1}></Box>
            <Box colors={colors_1}></Box>
            <Box colors={colors_1}></Box>
            <Box colors={colors_1}></Box>
            </View>
            <View style={styles.container}>
            <Box></Box>
            <Box></Box>
            <Box colors={colors_2}></Box>
            <Box></Box>
            <Box></Box>
            <Box></Box>
            </View>
  
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
    flexDirection:'row',
    
  },
  container1: {
      //flexDirection: "column"
  }

});

export default Slots;
