import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Headers, ListAlumni} from '../../components/moleculs';
import {api} from '../../services';

const UmumList = ({navigation}) => {
  const [alumni, setAlumni] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    await api.getUserByCategory('status', 'alumni').then(
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
        await dispatch({type: 'SET_ALUMNI', value: data});
      },
      err => console.log('isi err : ', err),
    );
  }, []);
  return (
    <View>
      <View style={styles.contHeader}>
        <Headers
          title="List Alumni"
          type="main-umum"
          onPressMiddle={() => navigation.navigate('CariAlumni')}
          onPressRight={() => navigation.navigate('FilterPage')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          {alumni.map(item => {
            return (
              <ListAlumni
                disabled
                key={item._id}
                nama={item.name}
                picture={item.image}
                fakultas={item.faculty}
                jurusan={item.prodi}
                angkatan={item.level}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default UmumList;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: '20%',
  },
});
