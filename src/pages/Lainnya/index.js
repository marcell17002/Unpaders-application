import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, ListButton} from '../../components/atoms';
import {Headers} from '../../components/moleculs';
import {api, Fire} from '../../services';
import {colors, destroyData, fonts} from '../../utils';

const Lainnya = ({navigation}) => {
  const user = useSelector(state => state).user;
  const dispatch = useDispatch();
  const data = {
    id: '',
    email: '',
    name: '',
    status: '',
    token: '',
    refreshToken: '',
  };
  const onLogOut = () => {
    api.deleteRefreshToken(user.id).then(
      res => {
        destroyData();
        dispatch({type: 'SET_PROFILE', value: data});
        navigation.replace('Pengenalan');
      },
      err => {},
    );
    Fire.destroyToken(user.id);
  };
  return (
    <View style={styles.page}>
      <View style={styles.contHeader}>
        <Headers type="main" title="PROFIL" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>PROFILE</Text>
          <Gap height={12} />
        </View>
        <View>
          <ListButton
            type="primary"
            namaTombol="Profil"
            onPress={() => navigation.navigate('ProfilPengguna')}
          />
          <ListButton
            type="primary"
            namaTombol="Ubah Kata Sandi"
            onPress={() => navigation.navigate('UbahPassword')}
          />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>UNPADERS</Text>
          <Gap height={12} />
        </View>
        <ListButton
          type="primary"
          namaTombol="Unpaders"
          onPress={() => navigation.navigate('TentangKami')}
        />
        <ListButton
          type="primary"
          namaTombol="Kontak"
          onPress={() => navigation.navigate('Kontak')}
        />
        {/* <ListButton
          type="primary"
          namaTombol="Disclaimer"
          onPress={() => navigation.navigate('Disclaimer')}
        /> */}
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
          <Text style={styles.textGap}>LOGOUT</Text>
          <Gap height={12} />
        </View>
        <TouchableOpacity onPress={() => onLogOut()}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  textGap: {
    marginLeft: 24,
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.title,
  },
  logout: {
    marginVertical: 16,
    marginLeft: 24,
    fontSize: 14,
    fontFamily: fonts.primary.bold,
    color: colors.text.primdonker1,
  },
});
