import React from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './createAccountStyle';

const createAccount = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Icon name="user" size={100} color="#2089DC" ></Icon>
                <Text style={styles.text}>Create Account</Text>
            </View>
            <Text>Name</Text>
            <TextInput style={styles.input} />
            <Text>Email</Text>
            <TextInput style={styles.input} />
            <Text>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
            <Text>Confirm Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
            <View style={styles.createForgotLink}>
            </View>
            <Button title=' Create '></Button>
        </View>
    )
}

export default createAccount