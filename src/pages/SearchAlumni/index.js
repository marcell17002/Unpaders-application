import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const SearchAlumni = ({navigation}) => {
    return (
        <View>
            {/* belum dipakein header */}
            <View> 
                <Headers title='Cari alumni...' type='search-alumni' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>  
                {/* biar keliatan warna bg nya */}
                <Gap height={700}/>
            </ScrollView>
        </View>
    );
};

export default SearchAlumni;

const styles = StyleSheet.create({
    page: {
        //flex: 1,
        backgroundColor: colors.primaryWhite,
    }
});