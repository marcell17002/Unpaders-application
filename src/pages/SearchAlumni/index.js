import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  CommentUser,
  ListAlumni,
  SearchHeader,
} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {colors, filterData, fonts} from '../../utils';
import {useSelector} from 'react-redux';

const SearchAlumni = ({navigation, route}) => {
  const payload = route.params;
  console.log('isi payload filter ', payload);
  const alumniProfile = useSelector(state => state).alumni;
  const [alumni, setAlumni] = useState(alumniProfile);
  const [alumniTemp, setAlumniTemp] = useState(alumniProfile);
  const [input, setInput] = useState('');

  useEffect(() => {
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
        return await setAlumniTemp(filteredData);
      } else if (payload.prodi.length === 0) {
        const filteredData = await filterData(
          alumniProfile,
          'faculty',
          payload.faculty,
        );
        return await setAlumniTemp(filteredData);
      } else if (payload.faculty.length === 0) {
        const filteredData = await filterData(
          alumniProfile,
          'prodi',
          payload.prodi,
        );
        console.log('prodi', filteredData);
        return await setAlumniTemp(filteredData);
      } else setAlumniTemp(alumniProfile);
    });
    return unsubscribe;
  }, [navigation]);

  const searchFilter = value => {
    setInput(value);
    const newData = alumni.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = value.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setAlumniTemp(newData);
  };
  return (
    <View>
      <SearchHeader
        value={input}
        onChangeText={value => searchFilter(value)}
        placeholder="Cari Alumni disini ..."
        onPressBack={() => navigation.navigate('AlumniList')}
        onPressMiddle={() => searchFilter(input)}
        onPressRight={() => navigation.navigate('AlumniFilter')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
        {alumniTemp.map(item => {
          return (
            <ListAlumni
              key={item._id}
              nama={item.name}
              picture={item.image}
              fakultas={item.faculty}
              jurusan={item.prodi}
              angkatan={item.level}
              onPressImage={() =>
                navigation.navigate('AlumniProfileAuthor', item)
              }
              onPressBody={() => navigation.navigate('AlumniChatting', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SearchAlumni;

const styles = StyleSheet.create({
  page: {
    //flex: 1,
    marginBottom: '20%',
    backgroundColor: colors.primaryWhite,
  },
});
