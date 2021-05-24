import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import {Headers, Kategori, Event} from '../../components/moleculs';
import { fonts, colors } from '../../../utils';
import {Gap} from '../../atoms';

const ProfileUser = ({
    type, photoUser, nama, fakultas, jurusan, angkatan,
    email, password, npm, thnlulus, telepon
    }) => { 
        const ProfileUser = () => { 
            if (type == 'alumni') { //alumni
                return (
                <>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <View style={styles.center}>
                        <View> 
                            <Image
                            style={styles.photoUser}
                            source={require('../../../assets/LogoUnpadersKecil.png')}
                            />    
                        </View>
                        <Gap height={16}/>
                        <View>
                            <Text style={styles.nama}>{nama}</Text>
                            <Gap height={12}/>
                            <View style={styles.contPendidikan}>
                                <Text style={styles.pendidikan}>{fakultas}</Text>
                                <Text style={styles.pendidikan}> - </Text>
                                <Text style={styles.pendidikan}>{jurusan}</Text>
                                <Text style={styles.pendidikan}>{angkatan}</Text>
                            </View>
                        </View>
                    </View>
                    <Gap height={24}/>
                    <View style={styles.ghap}>
                        <Gap height={12}/>
                    </View>
                    <Gap height={24}/>
                        <View style={styles.secData}>
                            <Text style={styles.judulSection}>Email</Text>
                            <Text style={styles.dataSection}>{email}</Text>
                            <Text style={styles.judulSection}>Password</Text>
                            <Text style={styles.dataSection}>{password}</Text>
                            <Text style={styles.judulSection}>Nomor Pokok Mahasiswa</Text>
                            <Text style={styles.dataSection}>{npm}</Text>
                            <Text style={styles.judulSection}>Tahun Lulus</Text>
                            <Text style={styles.dataSection}>{thnlulus}</Text>
                            <Text style={styles.judulSection}>Nomor Telepon/Whats App</Text>
                            <Text style={styles.dataSection}>{telepon}</Text>
                        </View>
                    
                </View>
            </ScrollView>
            </>
                );
            } else if (type == "mhs") { //mahasiswa
                return (
                    <>
                    <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <View style={styles.center}>
                        <View> 
                            <Image
                            style={styles.photoUser}
                            source={require('../../../assets/LogoUnpadersKecil.png')}
                            />    
                        </View>
                        <Gap height={16}/>
                        <View>
                            <Text style={styles.nama}>{nama}</Text>
                            <Gap height={12}/>
                            <View style={styles.contPendidikan}>
                                <Text style={styles.pendidikan}>{fakultas}</Text>
                                <Text style={styles.pendidikan}> - </Text>
                                <Text style={styles.pendidikan}>{jurusan}</Text>
                                <Text style={styles.pendidikan}>{angkatan}</Text>
                            </View>
                        </View>
                    </View>
                    <Gap height={24}/>
                    <View style={styles.ghap}>
                        <Gap height={12}/>
                    </View>
                    <Gap height={24}/>
                        <View style={styles.secData}>
                            <Text style={styles.judulSection}>Email</Text>
                            <Text style={styles.dataSection}>{email}</Text>
                            <Text style={styles.judulSection}>Password</Text>
                            <Text style={styles.dataSection}>{password}</Text>
                            <Text style={styles.judulSection}>Nomor Pokok Mahasiswa</Text>
                            <Text style={styles.dataSection}>{npm}</Text>
                            <Text style={styles.judulSection}>Nomor Telepon/Whats App</Text>
                            <Text style={styles.dataSection}>{telepon}</Text>
                        </View>
                </View>
                </ScrollView>
                </>
                );
            }
        };
        return (
            <View style={styles.profileuser}>
                <ProfileUser/>
            </View>
    );
};

export default ProfileUser;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    center: {
        alignSelf: 'center',
    },
    secData: {
        marginLeft: 24,
        marginRight: 20,
    },
    photoUser: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 40,
        marginRight: 16,
        alignSelf: 'center',
    },
    nama: {
        fontSize: 18,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        textAlign: 'center',
    },
    pendidikan: {
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        marginRight: 5,
        textAlign: 'center',
    },
    contPendidikan: {
        flexDirection: 'row',
    },
    ghap: {
        backgroundColor: colors.text.grey,
    },
    judulSection: {
        fontSize: 16,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        marginBottom: 12,
    },
    dataSection: {
        fontSize: 14,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        marginBottom: 24,
    }
});