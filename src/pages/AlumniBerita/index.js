import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  ListAlumniChat,
} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors, useForm, getDateName} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniBerita = ({navigation}) => {
  const user = useSelector(state => state).user;
  const [event, setEvent] = useState([]);
  useEffect(() => {
    api.getEventByUserId(user.id, user.name).then(
      res => setEvent(res.data),
      err => console.log('isi err', event),
    );
  }, []);
  const editableEvent = data => {
    if (item.status === 'waiting ') {
      return false;
    } else return true;
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View>
          <Headers title="CHAT" type="main" />
        </View>

        <View style={styles.page}>
          <ListButton
            namaTombol="Ketentuan Kontributor"
            onPress={() => navigation.navigate('AlumniKontrib')}
          />
          <ListButton
            namaTombol="Tulis Berita"
            onPress={() => navigation.navigate('AlumniTulisBerita')}
          />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <Gap height={24} />
        <Text style={styles.sectionLainnya}>DAFTAR UNGGAH BERITA</Text>
        {event.map(item => {
          return (
            <Event
              isHistory
              status={item.status}
              category={item.category}
              time={getDateName(item.createdAt)}
              picture={item.image}
              title={item.title}
              onPress={() => navigation.navigate('AlumniTulisBerita', item)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default AlumniBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  sectionLainnya: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginLeft: 24,
  },
});
