import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../components/atoms';
import { Headers } from '../../components/moleculs';
import { colors, fonts } from '../../utils';

const KetentuanKontributor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View>
                <Headers title='Ketentuan Kontributor' type='sub-back' 
                onPressBack={() => navigation.goBack()}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}> 
            <View style={styles.pages}>
                <View style={styles.container}> 
                    <Text style={styles.Judul}>Kontributor</Text>
                    {/* ini yg flex row */}
                    <View style={styles.subKontrib}>
                        <View style={styles.subKontrib1}>
                            <Image
                                style={styles.photo1}
                                source={require('../../assets/Kontrib1.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.textKet1}>Kontributor adalah Alumni Universitas Padjadjaran</Text>
                        </View>
                        {/* <Gap width={12}/> */}
                        <View style={styles.subKontrib2}>
                            <Image
                                style={styles.photo1}
                                source={require('../../assets/Kontrib2.png')}
                                resizeMode='contain'
                            />
                            <Text style={styles.textKet1}>Kontributor melengkapi data diri dengan sebenar-benarnya pada form Registrasi</Text>
                        </View>
                    </View>
                </View>
                <Gap height={20}/>
                <View style={styles.container}>
                    <Text style={styles.Judul}>Ketentuan Artikel</Text>
                    <View>
                        <Image
                            style={styles.photoArtikel}
                            source={require('../../assets/Kontrib3.png')}
                            resizeMode='contain'
                        />
                        <Text style={styles.textArtikel}>1. Artikel dikirimkan dengan bahasa Indonesia yang baik dan benar dan memperhatikan kaidah penulisan.</Text>
                        <Text style={styles.textArtikel}>2. Artikel juga dapat menggunakan bahasa Sunda dan bahasa Inggris, dengan memperhatikan kaidah penulisan yang baik dan benar.</Text>
                        <Text style={styles.textArtikel}>3. Apabila artikel maupun foto berupa saduran dari sumber lain, kontributor wajib menyebutkan sumber.</Text>
                        <Text style={styles.textArtikel}>4. Informasi UMKM yang dikirimkan harus mengandung informasi mengenai Nama Alumni, Fakultas/Angkatan, Kategori Usaha, Nomor Kontak, Lokasi Usaha, dan Media Sosial, serta Deskripsi mengenai produk UMKM.</Text>
                    </View>
                </View>
                <Gap height={24}/>
                <View style={styles.container}> 
                    <Text style={styles.Judul}>Publikasi Artikel</Text>
                    {/* ini yg flex row */}
                    <View style={styles.subPublikasi}>
                        <View style={styles.subPublikasi1}>
                            <Image
                            style={styles.photoPublikasi}
                            source={require('../../assets/Kontrib4.png')}
                            resizeMode='contain'
                            />
                            <Text style={styles.textPublikasi}>Profile yang ditampilkan berupa Nama, Fakultas, Jurusan, dan Angkatan</Text>
                        </View>
                        {/* <Gap width={16}/> */}
                        <View style={styles.subPublikasi2}>
                            <Image
                            style={styles.photoPublikasi}
                            source={require('../../assets/Kontrib5.png')}
                            resizeMode='contain'
                            />
                            <Text style={styles.textPublikasi}>Unpaders akan melakukan kurasi/editing tanpa mengurangi substansi</Text>
                        </View>
                    </View>
                    <View style={styles.subPublikasi}>
                        <View style={styles.subPublikasi1}>
                            <Image
                            style={styles.photoPublikasi}
                            source={require('../../assets/Kontrib6.png')}
                            resizeMode='contain'
                            />
                            <Text style={styles.textPublikasi}>Bila diperlukan, Tim Unpaders akan menghubungi untuk mengonfirmasi artikel</Text>
                        </View>
                        {/* <Gap width={16}/> */}
                        <View style={styles.subPublikasi2}>
                            <Image
                            style={styles.photoPublikasi}
                            source={require('../../assets/Kontrib7.png')}
                            resizeMode='contain'
                            />
                            <Text style={styles.textPublikasi}>Kontributor bertanggung jawab atas Artikel yang dikirim dan dipublikasikan</Text>
                        </View>
                    </View>
                </View>
                <Gap height={20}/>
            </View>
            </ScrollView>
        </View>
    );
};

export default KetentuanKontributor;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primaryWhite,
    },
    pages: {
        paddingTop: 20,
        paddingLeft: 24,
        paddingRight: 20,
    },
    container: {
        borderColor: colors.backgroundgrey,
        borderWidth: 2,
        borderRadius: 10,
    },
    subKontrib: {
        flexDirection: 'row',
        alignContent: 'center',
        maxWidth: '100%',
    },
    subKontrib1: {
        flex: 1,
        width: '100%',
        backgroundColor: 'yellow',
    },
    subKontrib2: {
        flex: 1,
        width: '100%',
    },
    photo1: {
        marginVertical: 16,
        alignSelf: 'center',
        maxHeight: '40%',
        maxWidth: '50%',
        //backgroundColor: 'yellow',
    },
    textKet1: {
        maxWidth: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        //backgroundColor: 'yellow',
    },
    subPublikasi: {
        flexDirection: 'row',
        alignContent: 'center',
        maxWidth: '100%',
    },
    subPublikasi1: {
        flex: 1,
        width: '100%',
        backgroundColor: 'yellow',
    },
    subPublikasi2: {
        flex: 1,
        width: '100%',
    },
    photoPublikasi: {
        marginVertical: 16,
        alignSelf: 'center',
        maxHeight: '40%',
        maxWidth: '50%',
        //backgroundColor: 'yellow',
    },
    textPublikasi: {
        maxWidth: '90%',
        textAlign: 'center',
        alignSelf: 'center',
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        //backgroundColor: 'yellow',
    },
    textArtikel: {
        flex:1,
        fontSize: 12,
        fontFamily: fonts.primary.reguler,
        color: colors.text.primary,
        paddingHorizontal: 14,
        backgroundColor: 'yellow',
    },
    photoArtikel: {
        marginVertical: 16,
        alignSelf: 'center',
        maxHeight: '25%',
        maxWidth: '25%',
    },
    Judul: {
        fontSize: 16,
        fontFamily: fonts.primary.semibold,
        color: colors.text.primary,
        marginLeft: 16,
        paddingTop: 4,
        marginBottom: 16,
    },

});