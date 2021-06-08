import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Headers} from '../../components/moleculs';
import {BtnFilter, Gap} from '../../components/atoms';
import {colors, filterData, fonts, useForm} from '../../utils';
import {Icon} from 'native-base';
import GridList from 'react-native-grid-list';
import {useDispatch} from 'react-redux';
const AlumniFilter = ({navigation}) => {
  const dispatch = useDispatch();
  const [openFaculty, setOpenFaculty] = useState(true);
  const [openProdi, setOpenProdi] = useState(true);
  const [filter, setFilter] = useForm({
    faculty: '',
    prodi: '',
  });

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
    {label: 'Aktuaria',  faculty: 'F. MIPA'},
    {label: 'Akuntansi', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Antropologi', faculty: 'F. Fisip'},
    {label: 'Biologi',  faculty: 'F. MIPA'},
    {label: 'Bisnis Digital', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Ekonomi Islam', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Ekonomi Pembangunan', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Farmasi', faculty: 'F. Farmasi'},
    {label: 'Fisika',  faculty: 'F. MIPA'},
    {label: 'Geofisika',  faculty: 'F. MIPA'},
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
    {label: 'Kimia',  faculty: 'F. MIPA'},
    {label: 'Manajemen', faculty: 'F. Ekonomi dan Bisnis'},
    {label: 'Manajemen Komunikasi', faculty: 'F. Fikom'},
    {label: 'Matematika',  faculty: 'F. MIPA'},
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
    {label: 'Statistika',  faculty: 'F. MIPA'},
    {label: 'Sosiologi', faculty: 'F. Fisip'},
    {label: 'Teknik Elektro',  faculty: 'F. MIPA'},
    {label: 'Teknik Informatika',  faculty: 'F. MIPA'},
    {label: 'Teknik Pertanian', faculty: 'F. TIP'},
    {label: 'Teknologi Pangan', faculty: 'F. TIP'},
    {label: 'Televisi dan Film', faculty: 'F. Fikom'},
    {label: 'T. Industri Pertanian', faculty: 'F. TIP'},
  ]);
  const [prodiTemp, setProdiTemp] = useState([]);

  const filterDataProdi = async props => {
    const filteredData = await filterData(prodiList, 'faculty', props);
    await setFilter('faculty', props);
    await setProdiTemp(filteredData);
  };

  const renderButtonFaculty = ({item, index}) => {
    return (
      <BtnFilter
        onPress={async () => await filterDataProdi(item.label)}
        title1={item.label}
      />
    );
  };
  const renderButtonProdi = ({item, index}) => {
    return (
      <BtnFilter
        onPress={async () => await setFilter('prodi', item.label)}
        title1={item.label}
      />
    );
  };
  return (
    <View>
      <View>
        <Headers
          title="Filter"
          type="filter"
          onPressBack={() => navigation.navigate('SearchAlumni', filter)}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <TouchableOpacity
            onPress={() => setOpenFaculty(!openFaculty)}
            style={styles.ghap}>
            <Text style={styles.textGap}>FAKULTAS</Text>
            <Icon style={styles.iconStyle} type="AntDesign" name="caretdown" />
          </TouchableOpacity>
          <View style={styles.content}>
            <Gap height={20} />
            {openFaculty && (
              <GridList
                showSeparator
                data={facultyList}
                numColumns={2}
                renderItem={renderButtonFaculty}
              />
            )}
          </View>
          <TouchableOpacity
            onPress={() => setOpenProdi(!openProdi)}
            style={styles.ghap}>
            <Text style={styles.textGap}>PROGRAM STUDI</Text>
            <Icon style={styles.iconStyle} type="AntDesign" name="caretdown" />
          </TouchableOpacity>
          <Gap height={20} />
          <View style={styles.content}>
            {openProdi && (
              <GridList
                showSeparator
                data={prodiTemp}
                numColumns={2}
                renderItem={renderButtonProdi}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniFilter;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primaryWhite,
    flex: 1,
    paddingBottom: '30%',
  },
  ghap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: colors.text.grey,
  },
  textGap: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondGrey,
  },
  iconStyle: {
    //DONE
    fontSize: 13,
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    color: colors.primaryBlack,
  },
  content: {
    paddingHorizontal: 14,
  },
});
