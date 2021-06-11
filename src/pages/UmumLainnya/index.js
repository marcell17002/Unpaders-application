import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Gap, ListButton} from '../../components/atoms/';
import {Headers} from '../../components/moleculs/';
import {fonts, colors, destroyData} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {Fire} from '../../services';

const UmumLainnya = ({navigation}) => {
  const user = useSelector(state => state).user;
  const dispatch = useDispatch();
  const onLogOut = () => {
    const data = {
      id: '',
      email: '',
      name: '',
      status: '',
      token: '',
      refreshToken: '',
    };
    dispatch({type: 'SET_PROFILE', value: data});
    destroyData();
    navigation.replace('Intro');
    Fire.destroyToken(user.id);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.contHeader}>
          <Headers type="main" title="LAINNYA" />
        </View>

        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>UNPADERS</Text>
          <Gap height={12} />
        </View>
        <ListButton
          type="primary"
          namaTombol="Tentang Kami"
          onPress={() => navigation.navigate('AlumniTentangKami')}
        />
        <ListButton
          type="primary"
          namaTombol="Kontak"
          onPress={() => navigation.navigate('AlumniKontak')}
        />
        <ListButton
          type="primary"
          namaTombol="Disclaimer"
          onPress={() => navigation.navigate('AlumniDisclaimer')}
        />
        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>SOCIAL MEDIA UNPADERS</Text>
          <Gap height={12} />
        </View>
        <ListButton
          onPress={() =>
            Linking.openURL(
              'https://www.facebook.com/Unpadersid-105495914506441/?_rdc=2&_rdr',
            )
          }
          type="secondary"
          image={require('../../assets/facebook.png')}
          namaTombol="Facebook"
        />
        <ListButton
          onPress={() => Linking.openURL('https://twitter.com/UnpadersID?s=08')}
          type="secondary"
          image={require('../../assets/twitter.png')}
          namaTombol="Twitter"
        />
        <ListButton
          onPress={() =>
            Linking.openURL('https://www.instagram.com/unpaders.id/')
          }
          type="secondary"
          image={require('../../assets/instagram.png')}
          namaTombol="Instagram"
        />
        <ListButton
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCoa32lUgboiVxtyei6OXBxg',
            )
          }
          type="secondary"
          image={require('../../assets/youtube.png')}
          namaTombol="Youtube"
        />
        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>Ganti Akun</Text>
          <Gap height={12} />
        </View>

        <TouchableOpacity onPress={() => onLogOut()}>
          <Text style={styles.logout}>Keluar Aplikasi</Text>
        </TouchableOpacity>
        <Gap height={20} />
      </View>
    </ScrollView>
  );
};

export default UmumLainnya;

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
  },
  logout: {
    marginVertical: 16,
    marginLeft: 24,
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.text.primdonker1,
  },
  textGap: {
    marginLeft: 24,
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
  },
  logout: {
    marginVertical: 16,
    marginLeft: 24,
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.text.primdonker1,
  },
});
