import moment from 'moment';
import 'moment/locale/id';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Buttons, Gap } from '../../components/atoms';
import { Event, Headers, NotFound, ProfileAuthor } from '../../components/moleculs';
import { api } from '../../services';
import { colors, filterData, fonts, sortData } from '../../utils';

const ProfilAlumni = ({navigation, route}) => {
  const data = route.params;
  const payload = {
    ...data,idReceiver : data._id
  }
  console.log('isi payload',payload)
  const [eventCreated, setEventCreated] = useState([]);
  const [tempEvent, setTempEvent] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const user = useSelector(state=>state).user;
  moment.locale('id')

  useEffect(() => {
    api.getEventByCategory('author', payload._id).then(
      async res => {
        const eventData = res.data;
        const filteredData = await filterData(res.data, 'status', 'published');
        const sortedData = await sortData(filteredData, 'createdAt');
        setEventCreated(sortedData);
      },
      err => notifications('danger', 'Tidak terkoneksi internet'),
    );
  }, []);
  return (
    <View style={styles.page}>
      <View>
        <Headers
          title={payload.name}
          type="sub-back"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <View>
          <ProfileAuthor
            nama={payload.name}
            picture={payload.image}
            fakultas={payload.faculty}
            jurusan={payload.prodi}
            angkatan={payload.level}
          />
        </View>
        {user.status === 'umum' ? null :
          <View style={styles.contButton}>
            <Gap height={16} />
              <Buttons
                title="Chat"
                status="secondary"
                onPress={() => navigation.navigate('RuangObrolan', payload)}
              />
          </View>
        }
        <Gap height={20} />
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <Gap height={20} />
        <View>
          <Text style={styles.sectionLainnya}>Berita yang Diunggah</Text>
          <Gap height={20}/>
          {eventCreated.length < 1 ? (
            <View style={styles.body}>
              <NotFound title="Pengguna ini belum mengunggah berita" />
            </View>
          ) : (
            <View>
              {eventCreated.map(item => {
                return (
                  <Event
                    category={item.category}
                    time={moment(item.createdAt).fromNow()}
                    title={item.title}
                    picture={item.image}
                    userPicture={payload.image}
                    author={payload.name}
                    onPress={() =>
                      navigation.navigate('DetailBerita', {
                        event: payload.event,
                        item: item,
                      })
                    }
                  />
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilAlumni;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  body: {
    marginVertical: '30%',
  },
  contButton: {
    width: 100,
    alignSelf: 'center',
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
