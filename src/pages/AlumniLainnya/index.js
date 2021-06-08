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
import {api, Fire} from '../../services';
import {fonts, colors, destroyData} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';

const AlumniLainnya = ({navigation}) => {
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
        navigation.replace('Intro');
      },
      err => {},
    );
    Fire.destroyToken(user.id);
  };
  return (
    
      <View style={styles.page}>
        <View style={styles.contHeader}>
          <Headers type="main" title="LAINNYA" />
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
            onPress={() => navigation.navigate('AlumniProfileUser')}
          />
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
          type="secondary"
          image={require('../../assets/facebook.png')}
          namaTombol="Facebook"
        />
        <ListButton
          type="secondary"
          image={require('../../assets/twitter.png')}
          namaTombol="Twitter"
        />
        <ListButton
          type="secondary"
          image={require('../../assets/instagram.png')}
          namaTombol="Instagram"
        />
        <ListButton
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
          <Text style={styles.logout}>Logout Akun</Text>
        </TouchableOpacity>
      
    </ScrollView>
    </View>
  );
};

export default AlumniLainnya;

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
});
