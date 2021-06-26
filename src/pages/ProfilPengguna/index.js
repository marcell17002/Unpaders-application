import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Gap} from '../../components/atoms';
import {Headers, ProfileUser} from '../../components/moleculs';
import {api} from '../../services';
import {colors, notifications} from '../../utils';

const ProfilPengguna = ({navigation}) => {
  const user = useSelector(state => state).user;
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      api.getProfileUser(user.id).then(
        res => {
          setProfile(res.data[0]);
          console.log('image : ', res.data[0].image);
        },
        err => notifications('danger', 'anda tidak terknoneksi ke internet'),
      );
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.page}>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Profil"
          namaButton="UBAH"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => navigation.navigate('UbahProfile', profile)}
        />
      </View>
      <Gap height={24} />
      <View>
        <ProfileUser
          type={user.status === 'alumni' ? 'alumni' : 'mahasiswa'}
          nama={profile.name}
          photoUser={profile.image}
          fakultas={profile.faculty}
          jurusan={profile.prodi}
          angkatan={profile.level}
          email={profile.email}
          password={profile.password} //jangan ditampilin
          npm={profile.nim}
          thnlulus={profile.graduated}
          telepon={profile.phone}
        />
      </View>
      <Gap height={24} />
    </View>
  );
};

export default ProfilPengguna;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
});
