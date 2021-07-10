import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../components/atoms';
import { Headers } from '../../components/moleculs';
import { colors, fonts } from '../../utils';

const TentangKami = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='Unpaders' type='sub-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View >
                <Gap height={20}/>
                    <Text style={styles.contJudul}>Unpaders</Text>
                    <Gap height={16}/>
                    <Text style={styles.contPage}>Ada banyak media daring dan beragam jenisnya. Unpaders memilih menjadi portal komunitas, untuk alumni Universitas Padjadjaran. Kami berkomitmen menjadi wadah lintas angkatan, lintas generasi; lintas fakultas pun lintas perkubu-kubuan (seandainya itu pun ada). Kami berkomitmen menaungi semua perspektif, hobi, hingga gaya hidup.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Para penggagas Unpaders berasal dari angkatan dan fakultas yang berbeda-beda pula. Bersua dan berurun-rembuk secara daring. Sebagian di antaranya belum pernah saling mengenal satu sama lain. Kami disatukan semangat yang sama: mengisi kekosongan medium komunikasi antar sesama alumni Unpad.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Unpaders tak terafiliasi pada struktur keorganisasian manapun, termasuk IKA Unpad. Bagi kami, ini pilihan yang strategis. Dengan cara ini kami ingin memastikan Unpaders selalu ada dan terus berkembang, tak tergantung pergantian kepengurusan dan dinamika yang menyertainya.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Melalui Unpaders, kami berharap alumni dapat saling berjejaring, berkolaborasi mewujudkan potensinya masing-masing pun memberi kontribusi pada bangsa dan dunia.</Text>
                    <Gap height={20}/>
                    
                    <Text style={styles.contJudul}>Disclaimer</Text>
                    <Gap height={16}/>
                    <Text style={styles.contPage}>UNPADERS adalah aplikasi komunitas alumni Universitas Padjadjaran dan memberi kesempatan kepada semua alumni untuk menjadi Kontributor. Alumni dan anggota masyarakat umum diperkenankan memberikan komentar atas naskah/artikel/informasi yang dimuat UNPADERS.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS sangat menganjurkan agar Kontributor dan Pembaca yang hendak mempublikasikan naskah/artikel serta opini dan pendapat tidak menyinggung suku, agama, ras dan antar-golongan (SARA), tidak menyebarkan fitnah, tidak menggunakan kata-kata kotor, tidak menggunakan nickname atau nama samaran.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS sangat berharap informasi yang dikirimkan Kontributor dan komentar Pembaca berisi pokok-pokok pikiran, ide dan gagasan yang konstruktif.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>Kontributor dan Pembaca pun sangat dianjurkan untuk menggunakan bahasa Indonesia yang baik dan benar.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS tidak bertanggung jawab atas naskah/artikel yang dipublikasikan Kontributor, juga komentar yang diberikan Pembaca.</Text>
                    <Gap height={20}/>
                    <Text style={styles.contPage}>UNPADERS tidak bertanggung jawab atas semua bentuk pelanggaran hukum yang dilakukan pihak lain dengan menggunakan atau memanfaatkan berita atau materi lain yang dipublikasikan UNPADERS, baik sebagian atau keseluruhan.</Text>
                    <Gap height={20}/>
                </View>
            </ScrollView>
        </View>
    );
};

export default TentangKami;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    contJudul: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 20, 
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
    },
    contPage: {
        marginRight: 20,
        marginLeft: 24,
        fontSize: 14, 
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
    }
});