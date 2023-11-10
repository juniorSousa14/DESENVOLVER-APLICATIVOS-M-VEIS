import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import createAccount from "./src/pages/createAccount/createAccount";
import forgotPassword from "./src/pages/forgotPassword/forgotPassword";
import Home from "./src/pages/home/Home";
import Icon from 'react-native-vector-icons/AntDesign';

const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ title: "Back", headerTintColor: "#000" }} name="createAccount" component={createAccount}></Stack.Screen>
        <Stack.Screen options={{ title: "Back", headerTintColor: "#000" }} name="forgotPassword" component={forgotPassword}></Stack.Screen>
        <Stack.Screen options={{
          title: "Offers",
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerRight: () => (<Icon name="shoppingcart" size={36} > </Icon>),
          headerLeft: () => (<Icon name="logout" size={36} > </Icon>)

        }} name="home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App
