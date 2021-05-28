import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Headers, Kategori, Event, SubKategori} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import navigationHandler from '../../router/navigationHandler';
import { fonts, colors} from '../../utils';

const AlumniHome = ({navigation}) => {
    return (
    <View style={styles.page}>
        <Headers title='Home' type="main-search"/>
        <ScrollView showsVerticalScrollIndicator={false}>            
            <View>
                <View style={styles.kategori}>
                    <Kategori onPress pict={require('../../assets/KatSemua.png')} title="Semua"/>
                    <Kategori onPress pict={require('../../assets/KatAktual.png')} title="Aktual"/>
                    <Kategori onPress pict={require('../../assets/KatAlumni.png')} title="Alumni"/>
                    <Kategori onPress pict={require('../../assets/KatLapak.png')} title="Lapak"/>
                    <Kategori onPress pict={require('../../assets/KatLoker.png')} title="Loker"/>
                </View>
                {/* SUB KATEGORI AKTUAL */}
                <View>
                    <View style={styles.textSubKat}>
                        <Text style={styles.judulKategori}>Aktual</Text>
                        <Gap height={12}/>
                        <Text style={styles.descKategori}>Berita teraktual seputar kegiatan dan acara yang diadakan IKA Unpad</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.subKategori}>
                            <SubKategori onPress={() => navigation.navigate('AlumniTentangKami')} pict={require('../../assets/Ak-Berita.png')} title="Berita"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Ak-Acara.png')} title="Acara"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Ak-Opini.png')} title="Opini"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Ak-Akademis.png')} title="Akademis"/>
                            <Gap width={16}/>
                        </View>
                    </ScrollView>
                </View>
                {/* SUB KATEGORI ALUMNI */}
                <View>
                    <View style={styles.textSubKat}>
                        <Text style={styles.judulKategori}>Alumni</Text>
                        <Gap height={12}/>
                        <Text style={styles.descKategori}>Artikel seputar Universitas Padjadjaran dan Alumni Unpad</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.subKategori}>
                            <SubKategori onPress pict={require('../../assets/Al-Terkini.png')} title="Terkini"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Al-Wikialumni.png')} title="WikiAlumni"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Al-Berkabar.png')} title="Berkabar"/>
                            <Gap width={16}/>
                        </View>
                    </ScrollView>
                </View>
                {/* SUB KATEGORI LAPAK */}
                <View>
                    <View style={styles.textSubKat}>
                        <Text style={styles.judulKategori}>Lapak</Text>
                        <Gap height={12}/>
                        <Text style={styles.descKategori}>Artikel seputar kegiatan bisnis mandiri Alumni Unpad </Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.subKategori}>
                            <SubKategori onPress pict={require('../../assets/La-Umkm.png')} title="UMKM"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/La-Kuliner.png')} title="Kuliner"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/La-Bisnis.png')} title="Bisnis"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/La-Merchandise.png')} title="Merchandise"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/La-Preloved.png')} title="Preloved"/>
                            <Gap width={16}/>
                        </View>
                    </ScrollView>
                </View>
                {/* SUB KATEGORI LOKER */}
                <View>
                    <View style={styles.textSubKat}>
                        <Text style={styles.judulKategori}>Loker</Text>
                        <Gap height={12}/>
                        <Text style={styles.descKategori}>Artikel seputar informasi lowongan kerja baik Internship, Fulltime dan Freelance</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.subKategori}>
                            <SubKategori onPress pict={require('../../assets/Lo-Internship.png')} title="Internship"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Lo-Fulltime.png')} title="Fulltime"/>
                            <Gap width={10}/>
                            <SubKategori onPress pict={require('../../assets/Lo-Freelance.png')} title="Freelance"/>
                            <Gap width={16}/>
                        </View>
                    </ScrollView>
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
        </ScrollView>        
    </View>
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
    subKategori: {
        flexDirection: 'row',
        marginLeft: 24,
        marginTop: 24,
    },
    event: {
        backgroundColor: 'white',
    },
    judulKategori: {
        fontSize: 20,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
    },
    descKategori: {
        fontSize: 16,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    },
    textSubKat: {
        marginLeft: 24,
        marginRight: 20,
    }

});