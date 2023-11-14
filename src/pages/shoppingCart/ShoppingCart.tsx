import React from 'react';
import { Text, View } from 'react-native';

const ShoppingCart = ({ route }: any) => {
    const { shoppingCart } = route.params;

    const calculateTotal = () => {
        return shoppingCart.reduce((total: number, prod: any) => total + parseFloat(prod.price), 0).toFixed(2);
    };

    return (
        <View>
            {shoppingCart.map((prod: any, i: number) => (
                <View key={i}>
                    <Text>Nome: {prod.title}</Text>
                    <Text>Preço: {prod.price}</Text>
                </View>
            ))}
            <Text>Total da Compra: R${calculateTotal()}</Text>
        </View>
    );
};

export default ShoppingCart;
