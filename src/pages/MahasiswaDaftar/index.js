import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {color} from 'react-native-reanimated';
import {NavigationEvents, withOrientation} from 'react-navigation';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {fonts, colors, useForm, checkValue, notifications} from '../../utils';
import {api} from '../../services';
import {BASE_IMG} from '@env';
import {Picker} from 'native-base';

const MahasiswaDaftar = ({navigation, route}) => {
  const status = route.params.status;
  const [form, setForm] = useForm({
    email: '',
    password: '',
    name: '',
    phone: '',
    nim: '',
    faculty: '',
    prodi: '',
    level: '',
    image: BASE_IMG,
    status: status,
  });
  const checkValueNull = () => {
    checkValue(form.email, 'email');
    checkValue(form.password, 'password');
    checkValue(form.name, 'nama');
    checkValue(form.phone, 'nomor telepon');
    checkValue(form.nim, 'NPM');
    checkValue(form.faculty, 'fakultas');
    checkValue(form.prodi, 'prodi');
    checkValue(form.level, 'angkatan');
  };
  const onSave = async () => {
    await checkValueNull();
    navigation.navigate('Masuk');
    // tagcomment
    // api.postRegister(form).then(
    //   res => {
    //     notifications('success', 'registrasi berhasil silahkan login');
    //     navigation.replace('Masuk');
    //   },
    //   err => {
    //     const message = JSON.parse(err.response.request._response).message;
    //     console.log('isi errr :', JSON.parse(err.response.request._response));
    //     notifications('danger', message);
    //   },
    // );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.contImage}>
          <Image
            source={require('../../assets/LogoBesar.png')}
            style={StyleSheet.image}
          />
          <Text style={styles.title}>Daftar sebagai Mahasiswa</Text>
        </View>
        <Gap height={40} />
        <View>
          <Text style={styles.section}>Informasi Personal</Text>
          <Inputs
            title="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
            placeholder="Masukkan Email"
          />
          <Gap height={24} />
          <Inputs
            title="Password"
            secure
            value={form.password}
            onChangeText={value => setForm('password', value)}
            placeholder="Masukkan Password"
          />
          <Gap height={24} />
          <Inputs
            title="Nama Lengkap"
            value={form.name}
            onChangeText={value => setForm('name', value)}
            placeholder="Masukkan Nama Lengkap"
          />
          <Gap height={24} />
          <Inputs
            title="Nomor Telepon"
            value={form.phone}
            isNumeric
            onChangeText={value => setForm('phone', value)}
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
            title="Nomor Pokok Mahasiswa"
            value={form.nim}
            onChangeText={value => setForm('nim', value)}
            placeholder="Masukkan Nomor Pokok Mahasiswa"
          />
          <Gap height={24} />
          
          {/* <Inputs
            title="Fakultas"
            value={form.faculty}
            onChangeText={value => setForm('faculty', value)}
            placeholder="Masukkan Fakultas"
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
          {/* <Inputs
            title="Program Studi"
            value={form.prodi}
            onChangeText={value => setForm('prodi', value)}
            placeholder="Masukkan Program Studi"
          /> */}

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
            title="Angkatan"
            value={form.level}
            isNumeric
            onChangeText={value => setForm('level', value)}
            placeholder="Masukkan Angkatan"
          />
        </View>
        <Gap height={50} />
        <View>
          <Buttons title="Daftar" onPress={onSave} />

          <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
          <Link title="Masuk disini" />
        </View>
      </View>
    </ScrollView>
  );
};

export default MahasiswaDaftar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 20,
  },
  contImage: {
    marginTop: 28,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
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
  buttonlink: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: -8,
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
