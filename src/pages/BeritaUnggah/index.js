import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Gap } from '../../components/atoms';
import { Headers, UnggahBerita } from '../../components/moleculs';
import { colors } from '../../utils';

const BeritaUnggah = ({navigation}) => {
  return (
    <View>
      <View style={styles.page}>
        <Headers
          type="sub-edit"
          title="Berita Terunggah"
          namaButton="EDIT"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => navigation.navigate('Berita')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={24} />
          <UnggahBerita
            title="Universitas Padjadjaran, ptn Terfavorit 2021"
            kategoriBerita="Aktual"
            subkategoriBerita="Berita"
            waktu="SELASA, 23 FEBRUARI 2021 12:16"
            isiBerita="Universitas Padjadjaran alias UNPAD merupakan perguruan tinggi yang paling banyak dicari dan prioritas oleh para pendaftar SNMPTN 2021"
          />
          <Gap height={80} />
        </View>
      </ScrollView>
    </View>
  );
};

export default BeritaUnggah;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.input.background,
  },
});
