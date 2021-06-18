import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Gap, Inputs} from '../../components/atoms';
import { colors, fonts } from '../../utils';

const UbahPassword = ({navigation}) => {
    return (
        <View style={styles.page}>
        <View style={styles.contHeader}>
            <Headers
            type="sub-edit"
            title="Ubah Kata Sandi"
            namaButton="SIMPAN"
            onPressBack={() => navigation.goBack()}
            onPressRight={() => onSave()}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.pages}>
            <View >
                <Gap height={24}/>
                <Inputs
                    // value={profile.password}
                    // secure
                    //onChangeText={value => changeText('password', value)}
                    title="Kata Sandi Lama"
                    //placeholder="Masukkan Password"
                />
                <Gap height={24}/>
                <Inputs
                    // value={profile.password}
                    // secure
                    //onChangeText={value => changeText('password', value)}
                    title="Kata Sandi Baru"
                    placeholder="Masukkan kata sandi baru"
                />
                <Gap height={24}/>
                <Inputs
                    // value={profile.password}
                    // secure
                    //onChangeText={value => changeText('password', value)}
                    title="Konfirmasi Kata Sandi Baru"
                    placeholder="Masukkan kata sandi baru"
                />

            </View>
        </ScrollView>
        </View>
    );
};

export default UbahPassword;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    pages:{
        paddingLeft: 24,
        paddingRight: 20,
    }
});