import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Headers, Kategori, Event, Berita, Comment} from '../../components/moleculs';
import {Gap, Buttons} from '../../components/atoms';
import { fonts, colors } from '../../utils';

const AlumniChat = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='DETAIL BERITA' type='sub-main' 
                onPressBack={() => navigation.goBack()}/>
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Gap height={24}/>
                <Berita title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi"
                author="Tim Unpaders"
                waktu="SELASA, 23 FEBRUARI 2021 12:16"
                isiBerita="Ikatan Alumni Universitas Padjadjaran (IKA Unpad) akan menyelenggarakan Konferensi Internasional untuk mengatasi pandemi Covid-19 dari aspek kesehatan, ekonomi, serta perspektif sosial. Konferensi tersebut diselenggarakan secara daring dari tanggal 23 hingga 25 Februari 2021 serta diikuti oleh berbagai tokoh dari beberapa negara."/>
                <Gap height={24}/>
            </View> 
            <View style={styles.ghap}>
                <Gap height={12}/>
            </View>
            <View>
                <Gap height={24}/>
                <Comment author="Tim Unpaders"
                waktu="SELASA, 23 FEBRUARI 2021 12:16" 
                onPress={() => navigation.navigate('AlumniProfileAuthor')}/>
                
                <View style={styles.secButtons}>
                    <Buttons
                        status="secondary" title="LIHAT KOMENTAR"
                        onPress={() => navigation.navigate('AlumniKomentar')}/>
                    <Gap height={24}/>
                </View>
            </View>
            
            <View style={styles.ghap}>
                <Gap height={12}/>
            </View>
            <View>
                <Gap height={24}/>
                <Text style={styles.sectionLainnya}>Berita Terbaru Lainnya</Text>
                <Event category="AKTUAL" time="3 JAM YANG LALU" 
                title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders' 
                onPress={() => navigation.navigate('AlumniHome')}/>
            </View>
        </ScrollView>
    </View>
    );
};

export default AlumniChat;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    },
    ghap: {
        backgroundColor: colors.text.grey,
    },
    sectionLainnya: {
        fontSize: 20,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        marginLeft: 24,
    },
    secButtons: {
        marginLeft: 24,
        marginRight: 20,
    }
});