import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const getValueLocally=()=>{
        AsyncStorage.getItem("name")
        .then((value)=>setName(value));
        AsyncStorage.getItem("email")
        .then((value)=>setEmail(value));
        AsyncStorage.getItem("phone")
        .then((value)=>setPhone(value));
        AsyncStorage.getItem("password")
        .then((value)=>setPassword(value));
    }
    useEffect(()=>{
        getValueLocally()
    },[])
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.user}>User Profile</Text>
                <Text style={styles.text}>Name : {name}</Text>
                <Text style={styles.text}>Email : {email}</Text>
                <Text style={styles.text}>Phone : {phone}</Text>
                <Text style={styles.text}>Password : {password}</Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        
        alignItems: 'center',
        backgroundColor: "#b3b2b1",
        flex: 1,
        justifyContent: 'center',
        
    },
    box: {
        backgroundColor: "#d68636",
        width: "80%",
        height: "50%",
        borderRadius: 34,
        borderWidth: 5,
        borderColor: "#000"
        
    },
    text: {
        fontSize: 20, 
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 10
    },
    user: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 30,
        alignSelf: 'center'

    }
})
export default Home;
