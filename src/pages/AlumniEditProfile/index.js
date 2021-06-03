import React, {useState} from 'react';
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
} from '../../utils';
import {Icon} from 'native-base';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BASE_URL_ROOT} from '@env';
import {api} from '../../services';

const AlumniEditProfile = ({navigation, route}) => {
  const payload = route.params;
  const [profile, setProfile] = useState({...payload, password: ''});
  const pathImage = `${BASE_URL_ROOT}${profile.image}`;
  const [photo, setPhoto] = useState(pathImage);
  const [profileImage, setProfileImage] = useState('');

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
    navigation.replace('Masuk');
    // tagcomment
    // const dataEditProfile = {...profile, image: profileImage};
    // api.updateProfileUser(dataEditProfile, profile._id).then(
    //   async res => {
    //     notifications(
    //       'success',
    //       'data profile berhasil diubah silahkan login kembali',
    //     );
    //     destroyData();
    //     navigation.replace('Masuk');
    //   },
    //   err => console.log('isi data :', dataEditProfile, err),
    // );
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

            {/* PICKER FAKULTAS */}
            <View>
                <Text style={styles.titleText}>Fakultas</Text>
                <View style={styles.contPicker}>  
                  <Picker style={styles.contText}
                  // placeholder="Pilih Kategori"
                  // mode="dropdown"
                  >
                    <Picker.Item label="Pilih Kategori" value="disabled"/>
                    <Picker.Item label="F. Ekonomi dan Bisnis"/>
                    <Picker.Item label="F. Farmasi"/>
                    <Picker.Item label="F. Hukum"/>
                    <Picker.Item label="F. Ilmu Budaya"/>
                    <Picker.Item label="F. Ilmu Komunikasi"/>
                    <Picker.Item label="F. ISIP"/>
                    <Picker.Item label="F. Kedokteran"/>
                    <Picker.Item label="F. Kedokteran Gigi"/>
                    <Picker.Item label="F. Keperawatan"/>
                    <Picker.Item label="F. MIPA"/>
                    <Picker.Item label="F. PIK"/>
                    <Picker.Item label="F. Pertanian"/>
                    <Picker.Item label="F. Peternakan"/>
                    <Picker.Item label="F. Psikologi"/>
                    <Picker.Item label="F. T. Geologi"/>
                    <Picker.Item label="F. T. Industri Pertanian"/>
                  </Picker>
                </View>
            </View>
            <Gap height={24} />
            {/* PICKER PROGRAM STUDI */}
          <View>
              <Text style={styles.titleText}>Program Studi</Text>
              <View style={styles.contPicker}>  
                <Picker style={styles.contText}
                // placeholder="Pilih Kategori"
                // mode="dropdown"
                >
                  <Picker.Item label="Pilih Kategori" value="disabled"/>
                  <Picker.Item label="Administrasi Bisnis"/>
                  <Picker.Item label="Administrasi Publik"/>
                  <Picker.Item label="Agribisnis"/>
                  <Picker.Item label="Agroteknologi"/>
                  <Picker.Item label="Aktuaria"/>
                  <Picker.Item label="Akuntansi"/>
                  <Picker.Item label="Antropologi"/>
                  <Picker.Item label="Biologi"/>
                  <Picker.Item label="Bisnis Digital"/>
                  <Picker.Item label="Ekonomi Islam"/>
                  <Picker.Item label="Ekonomi Pembangunan"/>
                  <Picker.Item label="Farmasi"/>
                  <Picker.Item label="Fisika"/>
                  <Picker.Item label="Geofisika"/>
                  <Picker.Item label="Geologi"/>
                  <Picker.Item label="Hubungan Internasional"/>

                  <Picker.Item label="Hubungan Masyarakat"/>
                  <Picker.Item label="Hukum"/>
                  <Picker.Item label="Ilmu Kelautan"/>
                  <Picker.Item label="Ilmu Komunikasi"/>
                  <Picker.Item label="Ilmu Pemerintahan"/>
                  <Picker.Item label="Ilmu Politik"/>
                  <Picker.Item label="Ilmu Sejarah"/>
                  <Picker.Item label="Jurnalistik"/>
                  <Picker.Item label="Kedokteran"/>
                  <Picker.Item label="Kedokteran Gigi"/>
                  <Picker.Item label="Keperawatan"/>
                  <Picker.Item label="Kesejahteraan Sosial"/>
                  <Picker.Item label="Kimia"/>
                  <Picker.Item label="Manajemen"/>
                  <Picker.Item label="Manajemen Komunikasi"/>
                  <Picker.Item label="Matematika"/>

                  <Picker.Item label="Perikanan"/>
                  <Picker.Item label="Perpustakaan"/>
                  <Picker.Item label="Peternakan"/>
                  <Picker.Item label="Psikologi"/>
                  <Picker.Item label="Sastra Arab"/>
                  <Picker.Item label="Sastra Indonesia"/>
                  <Picker.Item label="Sastra Inggris"/>
                  <Picker.Item label="Sastra Jepang"/>
                  <Picker.Item label="Sastra Jerman"/>
                  <Picker.Item label="Sastra Perancis"/>
                  <Picker.Item label="Sastra Rusia"/>
                  <Picker.Item label="Sastra Sunda"/>
                  
                  <Picker.Item label="Statistika"/>
                  <Picker.Item label="Sosiologi"/>
                  <Picker.Item label="Teknik Elektro"/>
                  <Picker.Item label="Teknik Informatika"/>
                  <Picker.Item label="Teknik Pertanian"/>
                  <Picker.Item label="Teknologi Pangan"/>
                  <Picker.Item label="Televisi dan Film"/>
                  <Picker.Item label="T. Industri Pertanian"/>
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
  contText: { //INI GAMAU KE GANTI STYLENYA
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  }, 
});
