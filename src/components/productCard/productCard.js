import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './productCard.style';

const productCard = ({products}) => {

  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: products.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>
        {products.inStock == true ? (<></>) : (<Text style={styles.in_stock}>Stokta Yok</Text>)}
        {/* <Text style={styles.in_stock}>{products.inStock == true ? "" : "Stokta Yok"}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default productCard;
