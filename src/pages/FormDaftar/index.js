import {BASE_IMG} from '@env';
import {Picker, Icon} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Buttons,
  Gap,
  InputPassword,
  Inputs,
  Link,
} from '../../components/atoms';
import {api} from '../../services';
import {
  checkSameData,
  checkValue,
  checkEmail,
  colors,
  filterData,
  fonts,
  notifications,
  useForm,
  checkCharLength,
} from '../../utils';
import checkAlumniExist from '../../utils/checkAlumniExist';
import checkStudentExist from '../../utils/checkStudentExist';

const FormDaftar = ({navigation, route}) => {
  const [isSecureEntry, setIsSecureEntry] = useState(true); //show/hide password1
  const [isSecureEntry2, setIsSecureEntry2] = useState(true); //show/hide password2
  const status = route.params.status;
  const dispatch = useDispatch();
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
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(async () => {
    await defaultRenderProdi();
  }, []);

  const defaultRenderProdi = () => {
    filterData(prodiList, 'faculty', 'F. Ekonomi dan Bisnis').then(
      async res => {
        await setProdiTemp(res);
        setForm('faculty', 'F. Ekonomi dan Bisnis');
      },
    );
  };

  const filterDataProdi = async props => {
    console.log('isi data : ', props);
    await setProdiTemp([]);
    filterData(prodiList, 'faculty', props).then(async res => {
      await setProdiTemp(res);
      setForm('faculty', props);
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
    graduated: status === 'alumni' ? '' : 'mahasiswa',
    image: BASE_IMG,
    status: status,
  });

  const checkValueNull = async () => {
    await checkEmail(form.email, 'email');
    await checkCharLength(form.nim, 12);
    await checkValue(form.password, 'password');
    await checkValue(form.name, 'nama');
    await checkValue(form.phone, 'nomor telepon');
    await checkValue(form.nim, 'NPM');
    await checkValue(form.faculty, 'fakultas');
    await checkValue(form.prodi, 'prodi');
    await checkValue(form.level, 'angkatan');
    if (status === 'alumni') {
      await checkValue(form.graduated, 'tahun lulus');
    }
  };
  const postData = async data => {
    dispatch({type: 'SET_LOADING', value: true});
    await api.postRegister(data).then(
      res => {
        dispatch({type: 'SET_LOADING', value: false});
        notifications('success', 'Registrasi berhasil');
        navigation.replace('Masuk');
      },
      err => {
        dispatch({type: 'SET_LOADING', value: false});
        const message = JSON.parse(err.response.request._response).data[0].msg;
        console.log('isi errr :', message);
        notifications('danger', message);
      },
    );
  };
  const onSave = async () => {
    await checkValueNull();
    await checkSameData(form.password, confirmPassword, 'password').then(
      async res => {
        if (form.status === 'mahasiswa')
          await checkStudentExist(form.prodi, form.level, form.nim).then(
            res => {
              postData(form);
            },
            err => notifications('warning', err.message),
          );
        else {
          await checkAlumniExist(form.nim).then(
            res => {
              postData(form);
            },
            err => {
              notifications('warning', err.message);
            },
          );
        }
      },
      err => {},
    );
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View style={styles.contImage}>
          <Image
            source={require('../../assets/LogoBesar.png')}
            //style={StyleSheet.image}
            resizeMode="contain"
            style={{maxWidth: '70%'}}
          />
          {/* <Gap height={8}/> */}
          <Text style={styles.title}>
            {status === 'alumni'
              ? 'Daftar sebagai Alumni'
              : 'Daftar sebagai Mahasiswa'}
          </Text>
        </View>
        <Gap height={32} />
        <View style={styles.contIsian}>
          <View>
            <Text style={styles.section}>Informasi Personal</Text>
            <Inputs
              title="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
              placeholder="Masukkan Email"
            />
            <Gap height={16} />
            <InputPassword
              title="Kata Sandi"
              value={form.password}
              secure={isSecureEntry}
              onChangeText={value => setForm('password', value)}
              placeholder="Masukkan Kata Sandi"
              iconEye={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}>
                  <Icon
                    style={styles.iconStyle}
                    type="Entypo"
                    name={isSecureEntry ? 'eye-with-line' : 'eye'}
                  />
                </TouchableOpacity>
              }
            />
            <Gap height={16} />
            <InputPassword
              title="Konfirmasi Kata Sandi"
              value={confirmPassword}
              secure={isSecureEntry2}
              onChangeText={value => setConfirmPassword(value)}
              placeholder="Konfirmasi Kata Sandi"
              placeholderTextColor="#787878"
              iconEye={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry2(prev => !prev);
                  }}>
                  <Icon
                    style={styles.iconStyle}
                    type="Entypo"
                    name={isSecureEntry2 ? 'eye-with-line' : 'eye'}
                  />
                </TouchableOpacity>
              }
            />
            <Gap height={16} />
            <Inputs
              title="Nama Lengkap"
              value={form.name}
              onChangeText={value => setForm('name', value)}
              placeholder="Masukkan Nama Lengkap"
            />
            <Gap height={16} />
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
            <Gap height={16} />
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
            <Gap height={16} />
            <View>
              <Text style={styles.titleText}>Fakultas</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={facultyList}
                  onValueChange={value => filterDataProdi(value)}>
                  {facultyList.map(item => {
                    return (
                      <Picker.Item label={item.label} value={item.label} />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Gap height={16} />
            <View>
              <Text style={styles.titleText}>Program Studi</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={form.prodi}
                  onValueChange={value => setForm('prodi', value)}>
                  <Picker.Item label="Pilih Prodi..." value=" " />
                  {prodiTemp.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.label}
                        value={item.label}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Gap height={16} />
            <Inputs
              title="Angkatan"
              value={form.level}
              isNumeric
              onChangeText={value => setForm('level', value)}
              placeholder="Masukkan Angkatan"
            />
            <Gap height={16} />
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
            <View style={styles.contLink}>
              <Text style={styles.buttonlink}>Sudah punya Akun?</Text>
              <Gap width={8} />
              <Link
                onPress={() => navigation.navigate('Masuk')}
                title="Masuk disini"
              />
            </View>
            <Gap height={12} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FormDaftar;

const styles = StyleSheet.create({
  iconStyle: {
    color: colors.tertierGrey,
  },
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  contImage: {
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  contIsian: {
    paddingLeft: 24,
    paddingRight: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
    color: colors.text.primdonker2,
    fontFamily: fonts.primary.bold,
  },
  section: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 10,
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
    fontFamily: fonts.primary.semibold,
    color: colors.text.tertiary,
    marginBottom: 4,
  },
  contPicker: {
    backgroundColor: colors.backgroundgrey,
    borderRadius: 5,
    borderColor: colors.input.outline,
    height: 50,
    alignContent: 'space-between',
  },
  titleText: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  contText: {
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
    alignContent: 'space-between',
  },
  contLink: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -8,
  },
});
