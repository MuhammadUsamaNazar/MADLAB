import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Text, TextInput, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Login({navigation}) {
    const [enterEmail, setEnterEmail] = useState();
    const [enterPassword, setEnterPassword] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const getValueLocally=()=>{
        AsyncStorage.getItem("email")
        .then((value)=>setEmail(value));
        AsyncStorage.getItem("password")
        .then((value)=>setPassword(value));
        if(email==enterEmail&password==enterPassword){
            navigation.navigate("Home");
            console.log("Pass")
        }
        else{
            Alert.alert("Your email or password is incorrect");
        }
        
    }
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setEnterEmail} 
             placeholder='Enter your email' placeholderTextColor="#1f1d1d"/>
            <TextInput style={styles.input} onChangeText={setEnterPassword}
            placeholder='Enter your password' placeholderTextColor="#1f1d1d"/>
            <TouchableOpacity onPress={getValueLocally} style={styles.button}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      },
      input: {
        backgroundColor: "#f0ebeb",
        borderRadius: 25,
        borderColor: "#000",
        borderWidth: 1,
        flexDirection: "row",
        padding: 10,
        width: "80%",
        margin: 10
      },
      button:{
        alignItems: 'center',
        backgroundColor: "#d68636",
        borderRadius: 25,
        marginVertical: 10,
        borderColor: "#1f1e1d",
        borderWidth: 1.5,
        padding: 10,
        width: "30%"
    },
    text:{
        color: "#000",
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default Login;
