import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers} from '../../components/moleculs';
import {BtnFilter, Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniFilter = () => {
    return (
        <View>
            <View>
                <Headers title='Filter' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>  
            <View style={styles.page}>
                <View style={styles.ghap}>
                    <Gap height={12}/>
                    <Text style={styles.textGap}>FAKULTAS</Text>
                    <Gap height={12}/>
                </View>
                <Gap height={20}/>
                <View>
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Ekonomi dan Bisnis"
                        title2="F. Farmasi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Hukum"
                        title2="F. Ilmu Budaya"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Ilmu Komunikasi"
                        title2="F. ISIP"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Kedokteran"
                        title2="F. Kedokteran Gigi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Keperawatan"
                        title2="F. MIPA"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. PIK"
                        title2="F. Pertanian"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. Peternakan"
                        title2="F. Psikologi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="F. T. Geologi"
                        title2="F. T. Industri Pertanian"
                        />
                </View>
                <View style={styles.ghap}>
                    <Gap height={12}/>
                    <Text style={styles.textGap}>PROGRAM STUDI</Text>
                    <Gap height={12}/>
                </View>
                <Gap height={20}/>
                <View>
                    <BtnFilter 
                        type="kanan-kiri" title1="Administrasi Bisnis"
                        title2="Administrasi Publik"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Agribisnis"
                        title2="Agroteknologi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Aktuaria"
                        title2="Akuntansi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Antropologi"
                        title2="Biologi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Bisnis Digital"
                        title2="Ekonomi Islam"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Ekonomi Pembangunan"
                        title2="Farmasi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Fisika"
                        title2="Geofisika"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Geologi"
                        title2="Hubungan Internasional"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Hubungan Masyarakat"
                        title2="Hukum"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Ilmu Kelautan"
                        title2="Ilmu Komunikasi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Ilmu Pemerintahan"
                        title2="Ilmu Politik"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Ilmu Sejarah"
                        title2="Jurnalistik"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Kedokteran"
                        title2="Kedokteran Gigi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Keperawatan"
                        title2="Kesejahteraan Sosial"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Kimia"
                        title2="Manajemen"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Manajemen Komunikasi"
                        title2="Matematika"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Perikanan"
                        title2="Perpustakaan"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Peternakan"
                        title2="Psikologi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Sastra Arab"
                        title2="Sastra Indonesia"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Sastra Inggris"
                        title2="Sastra Jepang"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Sastra Jerman"
                        title2="Sastra Perancis"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Sastra Rusia"
                        title2="Sastra Sunda"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Statistika"
                        title2="Sosiologi"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Teknik Elektro"
                        title2="Teknik Informatika"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Teknik Pertanian"
                        title2="Teknologi Pangan"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Teknik Pertanian"
                        title2="Teknologi Pangan"
                        />
                    <BtnFilter 
                        type="kanan-kiri" title1="Televisi dan Film"
                        title2="T. Industri Pertanian"
                        />
                </View>
                <Gap height={70}/>
            </View>
            </ScrollView>
        </View>
    );
};

export default AlumniFilter;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.primaryWhite,
        flex: 1,
    },
    ghap: {
        backgroundColor: colors.text.grey,
    },
    textGap: {
        marginLeft: 24,
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
    },
});