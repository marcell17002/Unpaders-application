import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../../components/atoms';
import { colors, fonts } from '../../../utils';

const NotFound = ({type}) => {
    const SectionNotFound = () => {
        switch(type) {
            case "ChatKosong" :
                return (
                    <View style={styles.page}>
                        <Text style={styles.Judul}>Belum ada percakapan</Text>
                        <Gap height={24}/>
                        <Text style={styles.deskripsi}>Silahkan mulai percakapan dengan teman Anda</Text>
                    </View>
                );
            case "Search" :
                return (
                    <View style={styles.page}>
                        <Text style={styles.Judul}>Tidak ada hasil yang ditemukan</Text>
                        <Gap height={24}/>
                        <Text style={styles.deskripsi}>Coba cari dengan kata kunci lain</Text>
                    </View>
                );
            default:
                return null;
        }
    };
    return (
        <View>
            <SectionNotFound/>
        </View>
    );
};

export default NotFound;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    Judul: {
        fontSize: 20,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        alignSelf: 'center',
        
    },
    deskripsi: {
        fontSize: 16,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
        alignSelf: 'center',
    }
});