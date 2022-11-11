import React from 'react';
import { View } from 'react-native';
function Box({size=20, colors="#fff", borderColors="#000", borderRadius}) {
    return (
        <View style={
        {width: size,
        height: size,
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 1,
        borderRadius: borderRadius
        }}>
      
        </View>
    );
}



export default Box;
