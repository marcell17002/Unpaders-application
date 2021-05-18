import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import navigationHandler from '../../router/navigationHandler';

const AlumniHome = ({navigation}) => {
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
            <Headers title='Home' type="main-search"/>
            
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
                    onPress={() => navigation.navigate('AlumniDetailBerita')}/>
                    {/* <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/>
                    <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/>
                    <Event category="AKTUAL" time="3 JAM YANG LALU" 
                    title="Irawati Hermawan: Penanganan Covid-19 Perlu Kolaborasi" author='Tim Unpaders'/> */}
                </View>

            </View>
            
        </View>
    </ScrollView>
    );
};

export default AlumniHome;

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