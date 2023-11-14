import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, ToastAndroid } from 'react-native';
import { Card } from '@rneui/base';
import axios from 'axios';
import Icon from "react-native-vector-icons/AntDesign"


export interface Product {
    title: string;
    price: string;
    thumbnail: string;
}
const Home = ({ shoppingCart, setShoppingCart, favorites, setFavorites }: any) => {

    const openToast = (message: string) => {
        ToastAndroid.show(message, 3000)
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                if (Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                } else {
                }
            } catch (error) {
                console.error('Erro ao obter produtos');
            }
        };

        fetchProducts();
    }, []);
    
    const removerFavorite = (product: any) => {
        for (let i = 0; favorites.lenght; i++) {
            delete favorites[i]
        }
    }

    const [favorite, setFavorite] = useState(false)
    return (

        <ScrollView>
            {products.map((product, i) => (
                <Card key={i}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: product.thumbnail }} />
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: "8%", marginTop: "3%" }}>
                        <Text style={{ fontSize: 18, marginRight: "5%" }}>Preço: {product.price}</Text>
                    </View>

                    {
                        favorite ?
                            <Icon onPress={() => { setFavorites(false), removerFavorite(product) }} name='heart' size={28} color="red"  ></Icon> :
                            <Icon onPress={() => { setFavorites(true), setFavorites([...favorites, product]) }} name='hearto' size={28} ></Icon>
                    }

                    <Button
                        onPress={() => {
                            openToast("Item Adicionado");
                            setShoppingCart([...shoppingCart, product]);
                        }}
                        title="Adicionar ao Carrinho"
                    />

                </Card>
            ))}
        </ScrollView>
    );
};

export default Home;
