import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, CommentUser, ListAlumni} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {colors, fonts} from '../../utils';

const SearchAlumni = ({navigation, route}) => {
  const payload = route.params;
  const [alumni, setAlumni] = useState(payload);
  const [alumniTemp, setAlumniTemp] = useState(payload);
  const [input, setInput] = useState('');

  const filterData = async props => {
    const filteredData = await filterData(alumni, 'name', props);
    console.log('isi data : ', props);
    await setAlumniTemp(filteredData);
  };
  return (
    <View>
      <Headers
        title="Cari alumni..."
        type="search-alumni"
        valueData={input}
        onChangeTextData={value => setInput(value)}
        onPressMiddle={() => filterData(input)}
        onPressRight={() => navigation.navigate('AlumniFilter')}
        onPressBack={() => navigation.goBack()}
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
