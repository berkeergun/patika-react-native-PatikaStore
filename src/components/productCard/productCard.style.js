import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#eee",
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
        resizeMode: "contain",
    },
    inner_container: {
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        padding: 5,
    },
    title: {
        marginTop:5,
        color:"#000",
        fontWeight: "bold",
        fontSize: 20,
    },
    price: {
        marginTop: 5,
        color: "#444",
        fontWeight: "bold",
        fontSize: 18,
    },
    in_stock: {
        color: "red",
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 18,
    },
})