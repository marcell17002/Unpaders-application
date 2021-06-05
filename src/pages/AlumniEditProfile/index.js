import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Headers, ProfileUser} from '../../components/moleculs/';
import {Gap, Inputs, Buttons} from '../../components/atoms/';
import {
  fonts,
  colors,
  notifications,
  checkValue,
  destroyData,
  filterData,
} from '../../utils';
import {Icon} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BASE_URL_ROOT} from '@env';
import {api} from '../../services';
import {Picker} from 'native-base';

const AlumniEditProfile = ({navigation, route}) => {
  const payload = route.params;
  const [profile, setProfile] = useState({...payload, password: ''});
  const pathImage = `${BASE_URL_ROOT}${profile.image}`;
  const [photo, setPhoto] = useState(pathImage);
  const [profileImage, setProfileImage] = useState('');
  const [facultyList, setFacultyList] = useState([
    {label: 'F. Ekonomi dan Bisnis'},
    {label: 'F. Farmasi'},
    {label: 'F. Hukum'},
    {label: 'F. Ilmu Budaya'},
    {label: 'F. Fisip'},
    {label: 'F. Kedokteran'},
    {label: 'F. Kedokteran Gigi'},
    {label: 'F. MIPA'},
    {label: 'F. PIK'},
    {label: 'F. Pertanian'},
    {label: 'F. Peternakan'},
    {label: 'F. Psikologi'},
    {label: 'F. Geologi'},
    {label: 'F. Industri Pertanian'},
  ]);
  const [prodiList, setProdiList] = useState([
    {label: 'Administrasi Publik', faculty: 'F. MIPA'},
    {label: 'Agribisnis', faculty: 'F. MIPA'},
    {label: 'Agroteknologi', faculty: 'F. MIPA'},
    {label: 'Aktuaria'},
    {label: 'Akuntansi'},
    {label: 'Antropologi', faculty: 'F. Fisip'},
    {label: 'Biologi'},
    {label: 'Bisnis Digital'},
    {label: 'Ekonomi Islam'},
    {label: 'Ekonomi Pembangunan'},
    {label: 'Farmasi'},
    {label: 'Fisika'},
    {label: 'Geofisika'},
    {label: 'Geologi'},
    {label: 'Hubungan Internasional', faculty: 'F. Fisip'},
    {label: 'Hubungan Masyarakat'},
    {label: 'Hukum'},
    {label: 'Ilmu Kelautan'},
    {label: 'Ilmu Komunikasi'},
    {label: 'Ilmu Pemerintahan'},
    {label: 'Ilmu Politik'},
    {label: 'Ilmu Sejarah'},
    {label: 'Jurnalistik'},
    {label: 'Kedokteran'},
    {label: 'Kedokteran Gigi'},
    {label: 'Keperawatan'},
    {label: 'Kesejahteraan Sosial'},
    {label: 'Kimia'},
    {label: 'Manajemen'},
    {label: 'Manajemen Komunikasi'},
    {label: 'Matematika'},
    {label: 'Perikanan'},
    {label: 'Perpustakaan'},
    {label: 'Peternakan'},
    {label: 'Psikologi'},
    {label: 'Sastra Arab'},
    {label: 'Sastra Indonesia'},
    {label: 'Sastra Inggris'},
    {label: 'Sastra Jepang'},
    {label: 'Sastra Jerman'},
    {label: 'Sastra Perancis'},
    {label: 'Sastra Rusia'},
    {label: 'Sastra Sunda'},
    {label: 'Statistika'},
    {label: 'Sosiologi'},
    {label: 'Teknik Elektro'},
    {label: 'Teknik Informatika'},
    {label: 'Teknik Pertanian'},
    {label: 'Teknologi Pangan'},
    {label: 'Televisi dan Film'},
    {label: 'T. Industri Pertanian'},
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
    const filteredData = await filterData(prodiList, 'faculty', props);
    await setProdiTemp(filteredData);
    console.log('isi data faculty : ', props, filteredData[1].label);
    changeText('prodi', filteredData[1].label);
    changeText('faculty', props);
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
    checkValue(profile.password, 'password');
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
    const dataEditProfile = {...profile, image: profileImage};
    api.updateProfileUser(dataEditProfile, profile._id).then(
      async res => {
        notifications(
          'success',
          'data profile berhasil diubah silahkan login kembali',
        );
        destroyData();
        navigation.replace('Masuk');
      },
      err => console.log('isi data :', dataEditProfile, err),
    );
  };
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          type="sub-edit"
          title="Edit Profil"
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
              value={profile.password}
              secure
              onChangeText={value => changeText('password', value)}
              title="Password"
              placeholder="Masukkan Password"
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

            {/* <Inputs
              value={profile.faculty}
              onChangeText={value => changeText('faculty', value)}
              title="Fakultas"
              placeholder="Masukkan Fakultas"
            />
            <Gap height={24} />
            <Inputs
              value={profile.prodi}
              onChangeText={value => changeText('prodi', value)}
              title="Program Studi"
              placeholder="Masukkan Program Studi"
            /> */}

            <View>
              <Text style={styles.titleText}>Fakultas</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={profile.faculty}
                  onValueChange={value => filterDataProdi(value)}>
                  {facultyList.map(item => {
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
                  {prodiTemp.map(item => {
                    return (
                      <Picker.Item label={item.label} value={item.label} />
                    );
                  })}
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
          <Gap height={24} />
          {/* Button yg kalo ditambahin bakal nambah fieldnya sendiri */}
          {/* <View style={styles.contTambah}>
            <Buttons status="quarternary" title="+ Tambah Pendidikan" />
          </View> */}
          <Gap height={88} />
          {/* <View>
                <Link title="+ Tambah Pendidikan" type='secondary'/>
            </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniEditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
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
    //backgroundColor: colors.primary,
    height: 24,
    width: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  section: {
    fontSize: 18,
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
    //paddingHorizontal: 16,
    borderColor: colors.input.outline,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  contText: {
    //INI GAMAU KE GANTI STYLENYA
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
