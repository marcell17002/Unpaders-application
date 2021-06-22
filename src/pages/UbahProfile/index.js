import {BASE_URL_ROOT} from '@env';
import {Picker} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {Gap, Inputs} from '../../components/atoms';
import {Headers} from '../../components/moleculs';
import {api} from '../../services';
import {
  checkValue,
  colors,
  destroyData,
  filterData,
  fonts,
  notifications,
} from '../../utils';

const UbahProfile = ({navigation, route}) => {
  const payload = route.params;
  delete payload['password'];
  const [profile, setProfile] = useState({...payload});
  const pathImage = `${BASE_URL_ROOT}${profile.image}`;
  const [photo, setPhoto] = useState(pathImage);
  const dispatch = useDispatch();
  const [profileImage, setProfileImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [facultyList, setFacultyList] = useState([
    {label: 'F. Ekonomi dan Bisnis'},
    {label: 'F. Farmasi'},
    {label: 'F. Hukum'},
    {label: 'F. Ilmu Budaya'},
    {label: 'F. Fisip'},
    {label: 'F. Fikom'},
    {label: 'F. Kedokteran'},
    {label: 'F. Kedokteran Gigi'},
    {label: 'F. Keperawatan'},
    {label: 'F. MIPA'},
    {label: 'F. PIK'},
    {label: 'F. Pertanian'},
    {label: 'F. Peternakan'},
    {label: 'F. Psikologi'},
    {label: 'F. Teknik Geologi'},
    {label: 'F. TIP'},
  ]);
  const [prodiList, setProdiList] = useState([
    {label: 'Administrasi Publik', faculty: 'F. Fisip'},
    {label: 'Administrasi Bisnis', faculty: 'F. Fisip'},
    {label: 'Agribisnis', faculty: 'F. Pertanian'},
    {label: 'Agroteknologi', faculty: 'F. Pertanian'},
    {label: 'Aktuaria', faculty: 'F. MIPA'},
    {label: 'Akuntansi', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Antropologi', faculty: 'F. Fisip'},
    {label: 'Biologi', faculty: 'F. MIPA'},
    {label: 'Bisnis Digital', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Ekonomi Islam', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Ekonomi Pembangunan', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Farmasi', faculty: 'F. Farmasi'},
    {label: 'Fisika', faculty: 'F. MIPA'},
    {label: 'Geofisika', faculty: 'F. MIPA'},
    {label: 'Geologi', faculty: 'F. Teknik Geologi'},
    {label: 'Hubungan Internasional', faculty: 'F. Fisip'},
    {label: 'Hubungan Masyarakat', faculty: 'F. Fikom'},
    {label: 'Hukum', faculty: 'F. Hukum'},
    {label: 'Ilmu Kelautan', faculty: 'F. PIK'},
    {label: 'Ilmu Komunikasi', faculty: 'F. Fikom'},
    {label: 'Ilmu Pemerintahan', faculty: 'F. Fisip'},
    {label: 'Ilmu Politik', faculty: 'F. Fisip'},
    {label: 'Ilmu Sejarah', faculty: 'F. Ilmu Budaya'},
    {label: 'Jurnalistik', faculty: 'F. Fikom'},
    {label: 'Kedokteran', faculty: 'F. Kedokteran'},
    {label: 'Kedokteran Gigi', faculty: 'F. Kedokteran Gigi'},
    {label: 'Kedokteran Hewan', faculty: 'F. Kedokteran'},
    {label: 'Keperawatan', faculty: 'F. Keperawatan'},
    {label: 'Kesejahteraan Sosial', faculty: 'F. Fisip'},
    {label: 'Kimia', faculty: 'F. MIPA'},
    {label: 'Manajemen', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Manajemen Komunikasi', faculty: 'F. Fikom'},
    {label: 'Matematika', faculty: 'F. MIPA'},
    {label: 'Perikanan', faculty: 'F. PIK'},
    {label: 'Perpustakaan', faculty: 'F. Fikom'},
    {label: 'Peternakan', faculty: 'F. Peternakan'},
    {label: 'Psikologi', faculty: 'F. Psikologi'},
    {label: 'Sastra Arab', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Indonesia', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Inggris', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Jepang', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Jerman', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Perancis', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Rusia', faculty: 'F. Ilmu Budaya'},
    {label: 'Sastra Sunda', faculty: 'F. Ilmu Budaya'},
    {label: 'Statistika', faculty: 'F. MIPA'},
    {label: 'Sosiologi', faculty: 'F. Fisip'},
    {label: 'Teknik Elektro', faculty: 'F. MIPA'},
    {label: 'Teknik Informatika', faculty: 'F. MIPA'},
    {label: 'Teknik Pertanian', faculty: 'F. TIP'},
    {label: 'Teknologi Pangan', faculty: 'F. TIP'},
    {label: 'Televisi dan Film', faculty: 'F. Fikom'},
    {label: 'T. Industri Pertanian', faculty: 'F. TIP'},
  ]);
  const [prodiTemp, setProdiTemp] = useState([]);
  useEffect(async () => {
    const filteredData = await filterData(
      prodiList,
      'faculty',
      payload.faculty,
    );
    await setProdiTemp(filteredData);
  }, []);

  const filterDataProdi = async props => {
    await setProdiTemp([]);
    filterData(prodiList, 'faculty', props).then(async res => {
      dispatch({type: 'SET_LOADING', value: true});
      setIsLoading(false);
      await setProdiTemp(res);
      changeText('prodi', res[0].label);
      changeText('faculty', props);
    });
  };

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.3, minHeight: 110, minWidth: 110, includeBase64: true},
      response => {
        if (response.didCancel || response.errorMessage) {
          notifications(
            'warning',
            'oops, sepertinya anda tidak jadi upload foto ?',
          );
          setPhoto(pathImage);
        } else {
          const source = `data:${response.type};base64,${response.base64}`;
          setPhoto(source);
          setProfileImage(source);
        }
      },
    );
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const checkValueNull = () => {
    checkValue(profile.email, 'email');
    checkValue(profile.name, 'nama');
    checkValue(profile.phone, 'nomor telepon');
    checkValue(profile.nim, 'npm');
    checkValue(profile.faculty, 'fakultas');
    checkValue(profile.prodi, 'program studi');
    checkValue(profile.level, 'angkatan');
    checkValue(profile.graduated, 'tahun lulus');
  };
  const onSave = async () => {
    await checkValueNull();
    dispatch({type: 'SET_LOADING', value: true});
    const dataEditProfile = {...profile, image: profileImage};
    api.updateProfileUser(dataEditProfile, profile._id).then(
      async res => {
        dispatch({type: 'SET_LOADING', value: false});
        notifications('success', 'data profile berhasil diubah');
        navigation.goBack();
      },
      err => {
        dispatch({type: 'SET_LOADING', value: true});
        console.log('isi data :', dataEditProfile, profile._id);
      },
    );
  };
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Ubah Profil Saya"
          namaButton="SIMPAN"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <TouchableOpacity
            onPress={() => getImage()}
            style={styles.profileWrapper}>
            <Image style={styles.photoUser} source={{uri: photo}} />
            <View>
              <Image
                style={styles.iconAdd}
                source={require('../../assets/addImage.png')}
              />
            </View>
          </TouchableOpacity>
          <Gap height={24} />
          <View>
            <Text style={styles.section}>Informasi Personal</Text>
            <Inputs
              value={profile.email}
              onChangeText={value => changeText('email', value)}
              title="Email"
              placeholder="Masukkan Email"
            />
            <Gap height={24} />
            <Inputs
              value={profile.name}
              onChangeText={value => changeText('name', value)}
              title="Nama Lengkap"
              placeholder="Masukkan Nama Lengkap"
            />
            <Gap height={24} />
            <Inputs
              value={profile.phone}
              onChangeText={value => changeText('phone', value)}
              title="Nomor Telepon"
              placeholder="Masukkan Nomor Telepon"
            />
            <Text style={styles.note}>
              *Nomor WA tidak akan ditampilkan pada profile
            </Text>
            <Gap height={24} />
          </View>
          <Gap height={32} />
          <View>
            <Text style={styles.section}>Latar Belakang Pendidikan</Text>
            <Inputs
              value={profile.nim}
              onChangeText={value => changeText('nim', value)}
              title="Nomor Pokok Mahasiswa"
              placeholder="Masukkan Nomor Pokok Mahasiswa"
            />
            <Gap height={24} />
            <View>
              <Text style={styles.titleText}>Fakultas</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={profile.faculty}
                  onValueChange={value => filterDataProdi(value)}>
                  {facultyList.map(item => {
                    dispatch({type: 'SET_LOADING', value: false});
                    return (
                      <Picker.Item label={item.label} value={item.label} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Gap height={24} />
            <View>
              <Text style={styles.titleText}>Program Studi</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={profile.prodi}
                  onValueChange={value => changeText('prodi', value)}>
                  {isLoading === true ? (
                    <Picker.Item label={payload.prodi} value={payload.prodi} />
                  ) : (
                    prodiTemp.map(item => {
                      return (
                        <Picker.Item label={item.label} value={item.label} />
                      );
                    })
                  )}
                </Picker>
              </View>
            </View>

            <Gap height={24} />
            <Inputs
              value={profile.level}
              onChangeText={value => changeText('level', value)}
              title="Angkatan"
              placeholder="Masukkan Angkatan"
            />
            <Gap height={24} />
            {payload.status === 'alumni' ? (
              <Inputs
                value={profile.graduated}
                onChangeText={value => changeText('graduated', value)}
                title="Tahun Lulus"
                placeholder="Masukkan Tahun Lulus"
              />
            ) : null}
          </View>
          <Gap height={88} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UbahProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
    paddingLeft: 24,
    paddingRight: 20,
  },
  profileWrapper: {
    height: 80,
    width: 80,
    alignSelf: 'center',
  },
  photoUser: {
    height: 80,
    width: 80,
    resizeMode: 'cover',
    borderRadius: 40,
  },
  iconAdd: {
    height: 24,
    width: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  section: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 20,
  },
  note: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.input.text,
    marginTop: 12,
  },
  contTambah: {
    alignSelf: 'flex-start',
  },
  contPicker: {
    backgroundColor: colors.backgroundgrey,
    borderRadius: 5,
    borderColor: colors.input.outline,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  contText: {
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
