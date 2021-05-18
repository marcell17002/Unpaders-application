import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap, Inputs} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniTulisBerita = ({navigation}) => {
    return (
        <View>
            <View>
            <Headers type="sub-edit" title="Tulis Berita"
                namaButton="UNGGAH" onPressBack={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("AlumniBeritaUnggah")}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}> 
                <View style={styles.page}>
                <Gap height={24}/>
                <View>
                    <Inputs title="Judul" placeholder="Judul Berita"/>
                    <Gap height={24}/>
                    <Inputs title="Foto" placeholder="Pilih Foto"/>
                    <Gap height={24}/>
                    <Inputs title="Kategori" placeholder="Pilih Kategori"/>
                    <Gap height={24}/>
                    <Inputs title="Sub Kategori" placeholder="Pilih Sub Kategori"/>
                    <Gap height={24}/>
                    <Inputs title="Isi Berita" placeholder="Masukkan isi berita"/>
                    <Gap height={24}/>
                </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default AlumniTulisBerita;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 24,
        paddingRight: 20,
    }
});