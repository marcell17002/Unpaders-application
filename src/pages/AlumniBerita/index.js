import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  ListAlumniChat,
  NotFound,
} from '../../components/moleculs';
import {Gap, ListButton} from '../../components/atoms';
import {fonts, colors, useForm, getDateName, notifications} from '../../utils';
import {api} from '../../services';
import {useSelector} from 'react-redux';

const AlumniBerita = ({navigation}) => {
  const user = useSelector(state => state).user;
  const [event, setEvent] = useState([]);
  console.log('isi user id : ', user.id);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      api.getEventByCategory('author', user.id).then(
        res => setEvent(res.data),
        err => console.log('isi err', event),
      );
    });
    return unsubscribe;
  }, [navigation]);
  const editableEvent = payload => {
    console.log('isi event :', payload);
    if (payload.status === 'waiting') {
      return notifications(
        'info',
        'silahkan menunggu data anda direview oleh admin',
      );
    } else return navigation.navigate('AlumniTulisBerita', payload);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <View>
          <Headers title="BERITA" type="main" />
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
        {event.length < 1 ? (
          <View style={styles.body}>
            <NotFound title="Anda belum mengunggah berita" />
          </View>
        ) : (
          <View>
            {event.map(item => {
              return (
                <Event
                  isHistory
                  status={item.status}
                  category={item.category}
                  time={getDateName(item.createdAt)}
                  picture={item.image}
                  title={item.title}
                  onPress={() => editableEvent(item)}
                />
              );
            })}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default AlumniBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  body: {
    marginVertical: '50%',
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
