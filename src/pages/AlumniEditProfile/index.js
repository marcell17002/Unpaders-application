import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap, Inputs, Buttons} from '../../components/atoms/';
import { fonts, colors } from '../../utils';
import {Icon} from 'native-base';

const AlumniEditProfile = ({navigation}) => {
    return (
        <View >
            <View style={styles.contHeader}>
                <Headers type="sub-edit" title="Edit Profil"
                namaButton="SIMPAN" onPressBack={() => navigation.goBack()}
                onPressRight={() => navigation.navigate("AlumniHome")}/>
            </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
            <Gap height={24}/> 
            <View style={styles.profileWrapper}>
                <Image
                    style={styles.photoUser}
                    source={require('../../assets/user.png')}
                    />
                <TouchableOpacity>
                    <View>
                        <Image
                            style={styles.iconAdd}
                            source={require('../../assets/addImage.png')}
                            />
                    </View>
                </TouchableOpacity>
            </View>
            <Gap height={24}/>
            <View>
                <Text style={styles.section}>Informasi Personal</Text>
                <Inputs title="Email" placeholder="Masukkan Email"/>
                <Gap height={24}/>
                <Inputs title="Password" placeholder="Masukkan Password"/>
                <Gap height={24}/>
                <Inputs title="Nama Lengkap" placeholder="Masukkan Nama Lengkap"/>
                <Gap height={24}/>
                <Inputs title="Nomor Telepon" placeholder="Masukkan Nomor Telepon"/>
                <Text style={styles.note}>*Nomor WA tidak akan ditampilkan pada profile</Text>
                <Gap height={24}/>
            </View>
            <Gap height={32}/>
            <View>
                <Text style={styles.section}>Latar Belakang Pendidikan</Text>
                <Inputs title="Nomor Pokok Mahasiswa" placeholder="Masukkan Nomor Pokok Mahasiswa"/>
                <Gap height={24}/>
                {/* ini harusnya bentuk pilihan!! */}
                <Inputs title="Fakultas" placeholder="Masukkan Fakultas"/>
                <Gap height={24}/>
                <Inputs title="Program Studi" placeholder="Masukkan Program Studi"/>
                <Gap height={24}/>
                <Inputs title="Angkatan" placeholder="Masukkan Angkatan"/>
                <Gap height={24}/>
                <Inputs title="Tahun Lulus" placeholder="Masukkan Tahun Lulus"/>
            </View>
            <Gap height={24}/>
            {/* Button yg kalo ditambahin bakal nambah fieldnya sendiri */}
            <View style={styles.contTambah}> 
                <Buttons
                status="quarternary" title="+ Tambah Pendidikan" />
            </View>
            <Gap height={88}/>
            {/* <View>
                <Link title="+ Tambah Pendidikan" type='secondary'/>
            </View> */}
        </View>
        </ScrollView>


        </View>
    );
};

export default AlumniEditProfile;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 24,
        paddingRight: 20,
    },
    profileWrapper: {
        height: 80,
        width: 80,
        alignSelf: 'center'
    },
    photoUser: {
        height: 80,
        width: 80,
        resizeMode: 'cover',
        borderRadius: 40,
    },
    iconAdd: {
        //backgroundColor: colors.primary,
        height: 24,
        width: 24,
        resizeMode: 'cover',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    section: {
        fontSize: 18,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        marginBottom: 20,
    },
    note: {
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.input.text,
        marginTop: 12,
    },
    contTambah: {
        alignSelf: "flex-start",
    }
});