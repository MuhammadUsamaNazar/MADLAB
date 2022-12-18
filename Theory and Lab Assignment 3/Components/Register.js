import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
function Register({navigation}) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
  const setValueLocally=()=>{

        AsyncStorage.setItem('name', name);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('phone', phone);
        AsyncStorage.setItem('password', password);
        navigation.navigate("Login");
        console.log("data saved");   
      }
      
    
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={setName}
            placeholder='Enter your name' placeholderTextColor="#1f1d1d"/>
            <TextInput style={styles.input} onChangeText={setEmail}
             placeholder='Enter your email' placeholderTextColor="#1f1d1d"/>
            <TextInput style={styles.input} onChangeText={setPhone}
            placeholder='Enter your phone' placeholderTextColor="#1f1d1d"/>
            <TextInput style={styles.input} onChangeText={setPassword}
            placeholder='Enter your password' placeholderTextColor="#1f1d1d"/>
            <TouchableOpacity onPress={setValueLocally} style={styles.button}>
                <Text style={styles.text}>Sign Up</Text>
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
export default Register;
