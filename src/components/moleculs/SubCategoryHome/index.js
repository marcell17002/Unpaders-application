import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';
import { Gap } from '../../atoms';
import SubKategori from '../SubKategori';

const SubCategoryHome = ({props, parentCallBack}) => {
  const SubCategory = () => {
    switch (props) {
      case 'Aktual':
        return (
          <View>
            <View style={styles.textSubkat}>
              <Text style={styles.judulKategori}>Aktual</Text>
              <Gap height={4} />
              <Text style={styles.descKategori}>
                Berita teraktual seputar kegiatan dan acara yang diadakan IKA
                Unpad
              </Text>
            </View>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Subkat}>
              <SubKategori
                onPress={() => parentCallBack('Berita')}
                pict={require('../../../assets/Ak-Berita.png')}
                title="Berita"
              />
              <SubKategori
                onPress={() => parentCallBack('Acara')}
                pict={require('../../../assets/Ak-Acara.png')}
                title="Acara"
              />
              <SubKategori
                onPress={() => parentCallBack('Opini')}
                pict={require('../../../assets/Ak-Opini.png')}
                title="Opini"
              />
              <SubKategori
                onPress={() => parentCallBack('Akademis')}
                pict={require('../../../assets/Ak-Akademis.png')}
                title="Akademis"
              />
              <Gap width={20} />
            </ScrollView>
            <Gap height={8}/>
          </View>
        );
      case 'Alumni':
        return (
          <View>
            <View style={styles.textSubkat}>
              <Text style={styles.judulKategori}>Alumni</Text>
              <Gap height={4} />
              <Text style={styles.descKategori}>
                Artikel seputar Alumni Unpad dan Universitas Padjadjaran
              </Text>
            </View>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Subkat}>
              <SubKategori
                onPress={() => parentCallBack('Alumni')}
                pict={require('../../../assets/Al-Terkini.png')}
                title="Terkini"
              />
              <SubKategori
                onPress={() => parentCallBack('Wikialumni')}
                pict={require('../../../assets/Al-Wikialumni.png')}
                title="WikiAlumni"
              />
              <SubKategori
                onPress={() => parentCallBack('Berkabar')}
                pict={require('../../../assets/Al-Berkabar.png')}
                title="Berkabar"
              />
              <Gap width={20} />
            </ScrollView>
            <Gap height={8}/>
          </View>
        );
      case 'Lapak':
        return (
          <View>
            <View style={styles.textSubkat}>
              <Text style={styles.judulKategori}>Lapak</Text>
              <Gap height={4} />
              <Text style={styles.descKategori}>
                Artikel seputar kegiatan bisnis mandiri Alumni Unpad{' '}
              </Text>
            </View>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Subkat}>
              <SubKategori
                onPress={() => parentCallBack('UMKM Center')}
                pict={require('../../../assets/La-Umkm.png')}
                title="UMKM Center"
              />
              <SubKategori
                onPress={() => parentCallBack('Kuliner')}
                pict={require('../../../assets/La-Kuliner.png')}
                title="Kuliner"
              />
              <SubKategori
                onPress={() => parentCallBack('Kiat Bisnis')}
                pict={require('../../../assets/La-Bisnis.png')}
                title="Kiat Bisnis"
              />
              <SubKategori
                onPress={() => parentCallBack('Merchandise')}
                pict={require('../../../assets/La-Merchandise.png')}
                title="Merchandise"
              />
              <SubKategori
                onPress={() => parentCallBack('Preloved')}
                pict={require('../../../assets/La-Preloved.png')}
                title="Preloved"
              />
              <Gap width={20} />
            </ScrollView>
            <Gap height={8}/>
          </View>
        );
      case 'Loker':
        return (
          <View>
            <View style={styles.textSubkat}>
              <Text style={styles.judulKategori}>Loker</Text>
              <Gap height={4} />
              <Text style={styles.descKategori}>
                Artikel seputar informasi lowongan kerja baik Internship,
                Fulltime, dan Freelance
              </Text>
            </View>
            <Gap height={20} />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.Subkat}>
              <SubKategori
                onPress={() => parentCallBack('Internship')}
                pict={require('../../../assets/Lo-Internship.png')}
                title="Internship"
              />
              <SubKategori
                onPress={() => parentCallBack('Fulltime')}
                pict={require('../../../assets/Lo-Fulltime.png')}
                title="Fulltime"
              />
              <SubKategori
                onPress={() => parentCallBack('Freelance')}
                pict={require('../../../assets/Lo-Freelance.png')}
                title="Freelance"
              />
              <Gap width={20} />
            </ScrollView>
            <Gap height={8}/>
          </View>
        );
      default:
        return null;
    }
  };
  return (
    <View>
      <SubCategory />
    </View>
  );
};

export default SubCategoryHome;

const styles = StyleSheet.create({
  textSubkat: {
    marginLeft: 24,
    marginRight: 20,
  },
  judulKategori: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  descKategori: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  Subkat: {
    paddingLeft: 24,
  },
});
