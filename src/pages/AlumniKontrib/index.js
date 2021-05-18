import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const AlumniKontrib = ({navigation}) => {
    return (
        <View>
            <View>
                <Headers title='Ketentuan Kontributor' type='sub-main-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>  
            </ScrollView>
        </View>
    );
};

export default AlumniKontrib;

const styles = StyleSheet.create({});