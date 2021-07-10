import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../components/atoms';
import { Headers } from '../../components/moleculs';
import { colors, fonts } from '../../utils';

const Kontak = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='Kontak' type='sub-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                <Gap height={20}/>

                <Text style={styles.contText}>UNPADERS, website komunitas Alumni Universitas Padjadjaran, menjalin masa, menginspirasi dunia.</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Founder:</Text>
                <Text style={styles.contText}>Irawati Hermawan</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Co-Founder:</Text>
                <Text style={styles.contText}>Teguh Santosa</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Chief Editor:</Text>
                <Text style={styles.contText}>Sonny Muhammad</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Managing Editor:</Text>
                <Text style={styles.contText}>Alexander Manurung</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Editorial Staff:</Text>
                <Text style={styles.contText}>Amelia Putri Pertiwi, Ikbal Tawakal</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Alamat:</Text>
                <Text style={styles.contText}>Jalan Pelajar Pejuang 45 No. 104, Bandung, Jawa Barat</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>Telp/WA:</Text>
                <Text style={styles.contText}>085156507180</Text>
                <Gap height={20}/>

                <Text style={styles.contJudul}>E-mail:</Text>
                <Text style={styles.contText}>redaksi@unpaders.id</Text>
                <Gap height={20}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default Kontak;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    contJudul: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 14, 
        fontFamily: fonts.primary.bold,
        color: colors.text.primary,
    },
    contText: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 14, 
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    }
});