import React from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './forgotPasswordStyle';

const forgotPassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Icon name="key" size={100} color="#2089DC" ></Icon>
                <Text style={styles.text}>Forgot Password</Text>
            </View>
            <Text>Email</Text>
            <TextInput style={styles.input} />
            <Button title='To Send'></Button>
            <Text>Code</Text>
            <TextInput style={styles.input} />
            <View style={styles.createForgotLink}>
            </View>
            <Button title='To Recover'></Button>
        </View>

    )
}

export default forgotPassword