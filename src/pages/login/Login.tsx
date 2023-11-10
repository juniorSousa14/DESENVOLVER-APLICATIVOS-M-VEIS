import React from 'react'
import { Button, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './LoginStyle';

const Login = ({ navigation }: any) => {

  const goToPage = (path: String) => {
    navigation.navigate(path)
  }
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="isv" size={150} color="#2089DC" ></Icon>
        <Text style={styles.text}>Mercado</Text>
      </View>
      <Text>Login</Text>
      <TextInput style={styles.input} />
      <Text>Password</Text>
      <TextInput secureTextEntry={true} style={styles.input} />
      <View style={styles.createForgotLink}>
        <Text onPress={() => { goToPage("createAccount") }} style={styles.link}> Create Account </Text>
        <Text onPress={() => { goToPage("forgotPassword") }} style={styles.link}> Forgot Password </Text>
      </View>
      <Button onPress={() => { goToPage("home") }} title='Login'></Button>
    </View>
  )
}
export default Login