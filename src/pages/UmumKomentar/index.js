import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const UmumKomentar = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='KOMENTAR' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={24}/>
            <View>
                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/>

                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/> 

                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/>

                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/>
                
                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/>

                <CommentUser 
                user="Malik Zulfikar G"
                waktu="1 jam yang lalu" 
                komentar="Keren banget sekarang kampus kita yang tercinta! Selamat datang para mahasiswa baru, terus harumkan nama almamater"/>
            </View>
            </ScrollView>
        </View>
    );
};

export default UmumKomentar;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    }
});