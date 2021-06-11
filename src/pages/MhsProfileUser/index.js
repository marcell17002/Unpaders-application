import React from 'react';
import {StyleSheet, View, } from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap} from '../../components/atoms/';

const MhsProfileUser = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.contHeader}>
                <Headers type="sub-edit" title="Profil"
                namaButton="EDIT" onPressBack={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("MhsEditProfile")}/>
            </View>
            <Gap height={24}/>
            <View >
                <ProfileUser type = "mhs" 
                nama="Agnes Hata" 
                fakultas="MIPA"
                jurusan="Teknik Informatika" 
                angkatan="2017"
                email="agneshata68@gmail.com" 
                password="*******"
                npm="140810170011" 
                telepon="087780133076" />
            </View>
            <Gap height={24}/>
        </View>
    );
};

export default MhsProfileUser;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
});