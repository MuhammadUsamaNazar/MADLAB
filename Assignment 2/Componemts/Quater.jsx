import React from 'react';
import HomeBox from './HomeBox';
import Slots from './Slots';
import Sort1 from './Sort1';
import { StyleSheet, View } from 'react-native';

function Quater({rotation, colors_1, colors_2, style}) {
    return (
            <View style ={[style,{transform: [{ rotate: rotation}]}]}>
                <HomeBox outerColor='#0239eb' innerColor='#01228c' />
                <View> 
                    <Slots colors_1={colors_1} colors_2={colors_2}/>
                </View>
                <View style={styles.container}> 
                    <Sort1 colors_1={colors_1} colors_2={colors_2}/>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "column"
  },
  
  });
export default Quater;
