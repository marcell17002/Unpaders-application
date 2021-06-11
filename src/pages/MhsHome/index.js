import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const MhsHome = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Headers title='Home' type="main-search"/>
            
            <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <View style={styles.kategori}>
                    <Kategori pict={require('../../assets/KatSemua.png')} title="Semua"/>
                    <Kategori pict={require('../../assets/KatAktual.png')} title="Aktual"/>
                    <Kategori pict={require('../../assets/KatAlumni.png')} title="Alumni"/>
                    <Kategori pict={require('../../assets/KatLapak.png')} title="Lapak"/>
                    <Kategori pict={require('../../assets/KatLoker.png')} title="Loker"/>
                </View>
                <View style={styles.event}>
                    <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders' 
                    onPress={() => navigation.navigate('MhsDetailBerita')}/>
                    {/* <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/>
                    <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/>
                    <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/> */}
                </View>

            </View>
            </ScrollView>
        </View>
    );
};

export default MhsHome;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    kategori: {
        flexDirection: 'row',
        marginLeft: 24,
        marginTop: 24,
    },
    event: {
        backgroundColor: 'white',
    }
});