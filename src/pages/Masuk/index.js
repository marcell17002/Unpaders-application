//import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { color } from 'react-native-reanimated';
import { NavigationEvents, withOrientation } from 'react-navigation';
import { Buttons, Gap, Inputs, Link } from '../../components/atoms';
import { fonts, colors } from '../../utils';

const Masuk = ({navigation}) => {
    return (
    //<ScrollView>
        <View style={styles.page}>
        <View style={styles.contImage}>
            <Image source={require("../../assets/LogoBesar.png")}
            style={StyleSheet.image} 
            />
            <Text style={styles.title}>Masuk</Text>
        </View>
        <Gap height={52}/>
        <View style={styles.inputan}>
            <Inputs title="Email" placeholder="Masukkan Email"/>
            <Gap height={24}/>
            <Inputs title="Password" placeholder="Masukkan Password"/>
        </View>
        <Gap height={100}/>
        <View style={styles.button}>
            <Buttons title="Masuk" 
            onPress={() => navigation.navigate('Home')} />
            <Text style={styles.buttonlink}>Belum punya Akun?</Text>
            <Link title="Daftar disini"/>
        </View>
            
        </View>
    //</ScrollView>
    );
};

export default Masuk;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    contImage: {
        marginTop: 100,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        marginTop: 12,
        textAlign: 'center',
        color: colors.text.primdonker2,
        fontFamily: fonts.primary.bold,
    },
    inputan: {
        paddingLeft: 24,
        paddingRight: 20,
        marginBottom: 28,
    },
    button: {
        paddingLeft: 24,
        paddingRight: 20,
    },
    buttonlink: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        marginTop: -8,
    }
});