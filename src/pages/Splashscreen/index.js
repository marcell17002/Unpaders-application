import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Pengenalan');
        }, 3000)
    }, [])
    return (
        <View style={styles.container}> 
            <Image
                source={require("../../assets/Splash.png")}
                style={{width: '80%', height: '100%',}}
                resizeMode='contain'/>
        </View>
    );
};

export default Splashscreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
})