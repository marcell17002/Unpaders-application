import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, Kategori, Event, ListAlumni,} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import { fonts, colors } from '../../utils';

const AlumniList = ({navigation}) => {
    return (
    <View>    
        <View style={styles.contHeader}>
            <Headers title='Temukan Alumni' type='three-icon' 
                onPressBack={() => navigation.goBack()}/>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>
            <ListAlumni nama="Baby Cattleya" 
            fakultas="MIPA" jurusan="Teknik Informatika" angkatan="2016"/>


            </View>


        </ScrollView>

        </View>
    );
};

export default AlumniList;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    }
});