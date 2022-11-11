import React from 'react';
import { StyleSheet, View } from 'react-native';
import Box from './Box';

function HomeBox({outerColor="#e3050b", innerColor="#a30206"}) {
    return (
        <View style={[styles.container, {backgroundColor: outerColor}]}>
            <View style={[styles.innerBox,{backgroundColor: innerColor}]}>
                <View style={styles.bulls}>
                    <Box borderRadius={9}/>
                    <Box borderRadius={9}/>
                </View>
                <View style={styles.bulls}>
                    <Box borderRadius={9}/>
                    <Box borderRadius={9}/>
                </View>
            </View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#e3050b",
        justifyContent: 'center',
        width: 121,
        height: 121,
    },
    innerBox: {
        
        backgroundColor: "#b00409",
        height: 90,
        width: 90,
    },
    bulls: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginLeft: 12,
        marginRight: 12,
        marginTop: 18
    }
  });
  
export default HomeBox;
