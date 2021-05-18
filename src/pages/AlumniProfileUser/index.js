import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap} from '../../components/atoms/';
import { fonts, colors } from '../../utils';

const AlumniProfileUser = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.contHeader}>
                <Headers type="sub-edit" title="Profil"
                namaButton="EDIT" onPressBack={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("AlumniEditProfile")}/>
            </View>
            <Gap height={24}/>
            <View >
                <ProfileUser nama="Malik Zulfikar Gantina" 
                fakultas="MIPA"
                jurusan="Teknik Informatika" 
                angkatan="2017"
                email="malikzulfikar98@gmail.com" 
                password="malikganteng123"
                npm="140810160036" 
                thnlulus="2020" 
                telepon="087708770877" />
            </View>
            <Gap height={24}/>
        </View>
    );
};

export default AlumniProfileUser;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },

});