import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Gap, ListButton} from '../../components/atoms';
import {EventUnggah, Headers, NotFound} from '../../components/moleculs';
import {api} from '../../services';
import {colors, fonts, getDateName, notifications} from '../../utils';

const Berita = ({navigation}) => {
  const user = useSelector(state => state).user;
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch({type: 'SET_LOADING', value: true});
    const unsubscribe = navigation.addListener('focus', async () => {
      await getEvent();
    });
    return unsubscribe;
  }, [navigation]);

  const getEvent = () => {
    api.getEventByCategory('author', user.id).then(
      res => {
        dispatch({type: 'SET_LOADING', value: false});
        setEvent(res.data);
      },
      err => dispatch({type: 'SET_LOADING', value: false}),
    );
  };

  const editableEvent = payload => {
    console.log('isi event :', payload);
    if (payload.status === 'waiting') {
      return notifications('info', 'Data anda sedang diverifikasi Admin');
    } else return navigation.navigate('TulisBerita', payload);
  };

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(async () => {
      await getEvent();
      await setRefreshing(false);
    });
  }, []);

  return (
    <View style={styles.page}>
      <View>
        <Headers title="BERITA" type="main" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <ListButton
            namaTombol="Ketentuan Kontributor"
            onPress={() => navigation.navigate('KetentuanKontributor')}
          />
          <ListButton
            namaTombol="Tulis Berita"
            onPress={() => navigation.navigate('TulisBerita')}
          />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <Gap height={16} />
        <Text style={styles.sectionLainnya}>DAFTAR UNGGAH BERITA</Text>
        <Gap height={16} />
        {event.length < 1 ? (
          <View style={styles.body}>
            <NotFound title="Anda belum mengunggah berita" />
          </View>
        ) : (
          <View>
            {event.map(item => {
              return (
                <EventUnggah
                  isHistory
                  status={item.status}
                  time={getDateName(item.createdAt)}
                  picture={item.image}
                  title={item.title}
                  onPress={() => editableEvent(item)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Berita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
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
