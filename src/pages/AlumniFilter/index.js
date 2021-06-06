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
    {label: 'Fisika', faculty: 'F. Fisip'},
    {label: 'Geofisika', faculty: 'F. Fisip'},
    {label: 'Geologi', faculty: 'F. Fisip'},
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
          type="sub-main-back"
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
    color: colors.text.tertiary,
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
