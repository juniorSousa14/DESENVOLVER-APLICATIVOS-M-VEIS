import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Button, ToastAndroid } from 'react-native';
import { Card } from '@rneui/base';
import axios from 'axios';
import Icon from "react-native-vector-icons/AntDesign";
import { Pressable } from 'react-native';

export interface Product {
    title: string;
    price: string;
    thumbnail: string;
}

interface Favorito {
    shoppingCart: Product[];
    setShoppingCart: (cart: Product[]) => void;
    favorites: Product[];
    setFavorites: (favorites: Product[]) => void;
}

const Home: React.FC<Favorito> = ({ shoppingCart, setShoppingCart, favorites, setFavorites }: Favorito) => {
    const openToast = (message: string) => {
        ToastAndroid.show(message, 3000);
    }

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                if (Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                } else {
                    console.log('Erro ao obter produtos');
                }
            } catch (error) {

            }
        };

        fetchProducts();
    }, []);

    const removeFromFavorites = (product: Product) => {
        const updatedFavorites = favorites.filter((fav: Product) => fav !== product);
        setFavorites(updatedFavorites);
    }

    const addToFavorites = (product: Product) => {
        setFavorites([...favorites, product]);
    }

    const isProductInFavorites = (product: Product) => {
        return favorites.some((fav: Product) => fav === product);
    }

    return (
        <ScrollView>
            {products.map((product, i) => (
                <Card key={i}>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image source={{ uri: product.thumbnail }} />
                    <Card.Divider />
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: "8%", marginTop: "3%" }}>
                        <Text style={{ fontSize: 18, marginRight: "5%" }}>Price: ${product.price}</Text>
                    </View>

                    {isProductInFavorites(product) ? (
                        <Icon onPress={() => { removeFromFavorites(product) }} name='heart' size={26} color="red" />
                    ) : (
                        <Icon onPress={() => { addToFavorites(product) }} name='hearto' size={26} />
                    )}

                    {/* <Button
                        onPress={() => {
                            openToast("Item Adicionado aos Favoritos");
                            setShoppingCart([...shoppingCart, product]);
                        }}
                        title="Adicionar ao Carrinho"
                    />*/
                    }
                    <Pressable onPress={() => {
                        openToast("Item Adicionado aos Favoritos");
                        setShoppingCart([...shoppingCart, product]);
                    }}
                        style={
                            ({ pressed }: any) => (
                                {
                                    backgroundColor: pressed ? "green" : "blue",
                                    height: 40,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 5
                                }
                            )
                        }
                    >
                        <Text style={{ fontSize: 18, color: "white" }}>Add to Cart</Text>
                    </Pressable>
                </Card>
            ))}
        </ScrollView>
    );
};

export default Home;