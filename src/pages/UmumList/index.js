import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Headers, ListAlumni,} from '../../components/moleculs';

const UmumList = ({navigation}) => {
    return (
        <View>    
        <View style={styles.contHeader}>
            <Headers title='Temukan Alumni' type='two-icon' 
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

export default UmumList;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    }
});