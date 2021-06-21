import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ListAlumni, NotFound, SearchHeader} from '../../components/moleculs';
import {colors, filterData} from '../../utils';

const CariAlumni = ({navigation, route}) => {
  const payload = route.params;
  console.log('isi payload filter ', payload);
  const alumniProfile = useSelector(state => state).alumni;
  const [alumni, setAlumni] = useState(alumniProfile);
  const [alumniTemp, setAlumniTemp] = useState(alumniProfile);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log('isi payload data ', payload);
    const unsubscribe = navigation.addListener('focus', async () => {
      if (payload.faculty && payload.prodi) {
        const dataFaculty = await filterData(
          alumniProfile,
          'faculty',
          payload.faculty,
        );
        const filteredData = await filterData(
          dataFaculty,
          'prodi',
          payload.prodi,
        );
        console.log('all ', filteredData);
        return await setAlumniTemp(filteredData), await setAlumni(filteredData);
      } else if (payload.prodi.length === 0) {
        const filteredData = await filterData(
          alumniProfile,
          'faculty',
          payload.faculty,
        );
        return await setAlumniTemp(filteredData), await setAlumni(filteredData);
      } else if (payload.faculty.length === 0) {
        const filteredData = await filterData(
          alumniProfile,
          'prodi',
          payload.prodi,
        );
        console.log('prodi', filteredData);
        return await setAlumniTemp(filteredData), await setAlumni(filteredData);
      } else setAlumniTemp([]);
    });
    return unsubscribe;
  }, [navigation]);

  const searchFilter = value => {
    setInput(value);
    const newData = alumniTemp.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = value.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setAlumni(newData);
  };
  return (
    <View style={styles.page}>
      <SearchHeader
        value={input}
        onChangeText={value => searchFilter(value)}
        placeholder="Cari Alumni disini ..."
        onPressBack={() => navigation.navigate('TemukanAlumni')}
        onPressMiddle={() => searchFilter(input)}
        less
      />
      <View style={styles.body}>
        {alumniTemp.length < 1 ? (
          <NotFound type="Search" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
            {alumni.map(item => {
              return (
                <ListAlumni
                  key={item._id}
                  nama={item.name}
                  picture={item.image}
                  fakultas={item.faculty}
                  jurusan={item.prodi}
                  angkatan={item.level}
                  onPressImage={() =>
                    navigation.navigate('ProfileAuthor', item)
                  }
                  onPressBody={() => navigation.navigate('RuangObrolan', item)}
                />
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default CariAlumni;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});
