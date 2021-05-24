import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Headers, Kategori, Event, ListAlumniChat} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import { fonts, colors } from '../../utils';

const AlumniChat = ({navigation}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
            <View >
                <Headers title="CHAT" type="main"/>
            </View>
            <View style={styles.page}>
                <View>
                    <ListButton namaTombol="Temukan Alumni"
                    onPress={() => navigation.navigate('AlumniList')}/>
                </View>
                <View style={styles.ghap}>
                    <Gap height={12}/>
                    <Text style={styles.textGap}>CHAT</Text>
                    <Gap height={12}/>
                </View>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"
                onPress={() => navigation.navigate('AlumniChatting')}/>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"/>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"/>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"/>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"/>
                <ListAlumniChat nama="Dzakia Rayhana" 
                lastText="Wilujeng Enjing, kang Malik"/>
            </View>
        </View>    
    </ScrollView>    
    
    );
};

export default AlumniChat;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
    ghap: {
        backgroundColor: colors.text.grey,
    },
    textGap: {
        marginLeft: 24,
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.tertiary,
    }
});