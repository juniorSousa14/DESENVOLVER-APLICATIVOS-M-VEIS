import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from '@rneui/base';
import { Button } from '@rneui/themed';

const ShoppingCart = ({ route }: any) => {
    const [shoppingCart, setShoppingCart] = useState(route.params.shoppingCart);

    const calculateTotal = () => {
        return shoppingCart.reduce((total: number, prod: any) => total + parseFloat(prod.price), 0).toFixed(2);
    };

    const removeItem = (index: number) => {
        const updatedCart = [...shoppingCart];
        updatedCart.splice(index, 1);
        setShoppingCart(updatedCart);
    };

    return (
        <ScrollView>
            <View>
                {shoppingCart.map((prod: any, i: number) => (
                    <Card key={i}>
                        <Card.Title style={{ fontSize: 18 }}>{prod.title}                            Price: {prod.price}</Card.Title>
                        <Card.Divider />
                        <Button
                            onPress={() => {
                                removeItem(i);
                            }}
                            title="Remove"
                        />
                    </Card>
                ))}
                <Card >
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: "3%", marginTop: "3%" }}>
                        <Text style={{ fontSize: 18 }}> SubTotal: ${calculateTotal()}</Text>
                    </View>
                </Card>
            </View>
        </ScrollView>
    );
};

export default ShoppingCart;
