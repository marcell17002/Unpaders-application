import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';

const SubKategori = ({title, onPress, pict}) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.ImageCont}>
            <Image style={styles.image} source={pict} />
        </View>
        <Gap height={8}/>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
};

export default SubKategori;

const styles = StyleSheet.create({
    container: {
        height: 130,
        width: 90,
        backgroundColor: 'white',
        borderRadius: 5, 
        marginRight: 20,
        marginBottom: 20,
        alignContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
    },
    ImageCont: {
        justifyContent: 'space-between',
        alignContent: 'stretch',
    },
    image: {
        alignSelf: 'center',
    },
    text: {
        marginLeft: 8,
        fontSize: 13,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
    }
});