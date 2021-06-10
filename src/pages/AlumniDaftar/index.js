import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import {Buttons, Gap, Inputs, Link} from '../../components/atoms';
import {api} from '../../services';
import {
  fonts,
  colors,
  useForm,
  checkValue,
  notifications,
  filterData,
} from '../../utils';
import {BASE_IMG} from '@env';
import {Item, Picker} from 'native-base';
import {useDispatch} from 'react-redux';

const AlumniDaftar = ({navigation, route}) => {
  const status = route.params.status;
  const dispatch = useDispatch();
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
    await setProdiTemp(prodiList);
  }, []);

  const filterDataProdi = async props => {
    await setProdiTemp([]);
    filterData(prodiList, 'faculty', props).then(async res => {
      await setProdiTemp(res);
      setForm('prodi', res[0].label);
      setForm('faculty', props);
      console.log('isi data ga milih prodi ', res[0].label);
    });
  };

  const [form, setForm] = useForm({
    email: '',
    password: '',
    name: '',
    phone: '',
    nim: '',
    faculty: '',
    prodi: '',
    level: '',
    graduated: status === 'alumni' ? '' : 'underGraduated',
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
    {
      status === 'alumni' ? checkValue(form.graduated, 'tahun lulus') : null;
    }
  };
  const onSave = async () => {
    await checkValueNull();
    console.log('hello ', form);
    api.postRegister(form).then(
      res => {
        notifications('success', 'registrasi berhasil silahkan login');
        navigation.replace('Masuk');
      },
      err => {
        const message = JSON.parse(err.response.request._response).message;
        console.log('isi errr :', JSON.parse(err.response.request._response));
        notifications('danger', message);
      },
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.contImage}>
          <Image
            source={require('../../assets/LogoBesar.png')}
            style={StyleSheet.image}
          />
          <Text style={styles.title}>
            {status === 'alumni'
              ? 'Daftar sebagai Alumni'
              : 'Daftar sebagai Mahasiswa'}
          </Text>
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
            value={form.password}
            secure
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
            isNumeric
            value={form.phone}
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
            value={form.npm}
            isNumeric
            onChangeText={value => setForm('nim', value)}
            placeholder="Masukkan Nomor Pokok Mahasiswa"
          />
          <Gap height={24} />
          <View>
            <Text style={styles.titleText}>Fakultas</Text>
            <View style={styles.contPicker}>
              <Picker
                style={styles.contText}
                selectedValue={facultyList}
                onValueChange={value => filterDataProdi(value)}>
                {facultyList.map(item => {
                  return <Picker.Item label={item.label} value={item.label} />;
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
                selectedValue={prodiTemp}
                onValueChange={value => setForm('prodi', value)}>
                {prodiTemp.map(item => {
                  return <Picker.Item label={item.label} value={item.label} />;
                })}
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
          <Gap height={24} />
          {status === 'alumni' ? (
            <Inputs
              title="Tahun Lulus"
              isNumeric
              value={form.graduated}
              onChangeText={value => setForm('graduated', value)}
              placeholder="Masukkan Tahun Lulus"
            />
          ) : null}
        </View>

        <Gap height={50} />
        <View>
          <Buttons title="Daftar" onPress={onSave} />

          <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
          <Link
            onPress={() => navigation.navigate('Masuk')}
            title="Masuk disini"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AlumniDaftar;

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
  contText: {
    //INI GAMAU KE GANTI STYLENYA
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
});
