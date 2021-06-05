import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, Kategori, Event, ListAlumni} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniList = ({navigation}) => {
  const [alumni, setAlumni] = useState([]);
  useEffect(() => {
    api.getUserByCategory('status', 'alumni').then(
      async res => {
        const alumnus = res.data;
        const data = [];
        const promises = await Object.keys(alumnus).map(async key => {
          await data.push({
            idReceiver: alumnus[key]._id,
            isNew: true,
            ...alumnus[key],
          });
        });
        await Promise.all(promises);
        await setAlumni(data);
      },
      err => console.log('isi err : ', err),
    );
  }, []);
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          title="Temukan Alumni"
          type="three-icon"
          onPressBack={() => navigation.goBack()}
          onPressMiddle={() => navigation.navigate('SearchAlumni', alumni)}
          onPressRight={() => navigation.navigate('AlumniFilter')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
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
                  navigation.navigate('AlumniProfileAuthor', item)
                }
                onPressBody={() => navigation.navigate('AlumniChatting', item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: '20%',
  },
});
