import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/login/Login";
import createAccount from "./src/pages/createAccount/createAccount";
import forgotPassword from "./src/pages/forgotPassword/forgotPassword";
import Home, { Product } from "./src/pages/home/Home";
import Icon from 'react-native-vector-icons/AntDesign';
import { useState } from "react";
import ShoppingCart from "./src/pages/shoppingCart/ShoppingCart";
import Favorite from "./src/pages/favorites/Favorites";


const App = (): JSX.Element => {
  const Stack = createNativeStackNavigator()
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{ title: "Back", headerTintColor: "#000" }} name="createAccount" component={createAccount}></Stack.Screen>
        <Stack.Screen options={{ title: "Back", headerTintColor: "#000" }} name="forgotPassword" component={forgotPassword}></Stack.Screen>
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} ></Stack.Screen>
        <Stack.Screen name="favorites">
          {
            () => (
              <Favorite favorites={favorites} setFavorite={setFavorites} > </Favorite>
            )
          }
        </Stack.Screen>

        <Stack.Screen options={({ navigation }) => {
          return {
            title: "Offers",
            headerBackVisible: false,
            headerTitleAlign: "center",
            headerRight: () => (
              <Icon onPress={() => (navigation.navigate("ShoppingCart", { shoppingCart }))} name="shoppingcart" size={28} > </Icon>),
            headerLeft: () => (
              <Icon onPress={() => (navigation.navigate("login"))} name="logout" size={24} > </Icon>)
          }
        }} name="home">
          {
            () => (
              <Home shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} favorites={favorites} setFavorite={setFavorites}></Home>
            )
          }</Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App
