import moment from 'moment';
import 'moment/locale/id';
import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Event,
  Headers,
  Kategori,
  SubCategoryHome,
} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {api} from '../../services';
import {colors, filterData, fonts, getData, notifications} from '../../utils';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState([]);
  const [tempEvent, setTempEvent] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  moment.locale('id');

  useEffect(async () => {
    dispatch({type: 'SET_LOADING', value: true});
    const unsubscribe = navigation.addListener('focus', () => {
      getEvent();
    });
    return unsubscribe;
  }, [navigation]);

  const getEvent = async () => {
    api.getEventByCategory('status', 'published').then(
      async res => {
        const eventData = res.data;
        const data = [];
        const promises = await Object.keys(eventData).map(async key => {
          await api.getProfileUser(eventData[key].author).then(
            async res => {
              await data.push({
                id: key,
                name: res.data[0].name,
                userImage: res.data[0].image,
                ...eventData[key],
              });
            },
            err => console.log('isi error alumni home:', err),
          );
        });
        await Promise.all(promises);
        const sortedData = await data.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setEvent(sortedData);
        setTempEvent(sortedData);
        setRecommendation(sortedData);
        dispatch({type: 'SET_LOADING', value: false});
      },
      err => notifications('danger', 'Tidak terkoneksi internet'),
    );
  };
  const setRecommendation = data => {
    const recommendation = data.slice(0, 3);
    dispatch({type: 'SET_RECOMMENDATION', value: recommendation});
  };
  const filterDataEvent = async props => {
    const filteredData = await filterData(tempEvent, 'category', props);
    await setEvent(filteredData);
  };
  const filterDataSubCategory = async props => {
    const data = tempEvent;
    const filteredData = await filterData(data, 'subCategory', props);
    navigation.navigate('SubKategoriHome', {filteredData, props});
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
      <Headers
        title="Home"
        type="main-search"
        onPressRight={() => navigation.navigate('CariBerita', event)}
      />

      <ScrollView
        style={styles.event}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.kategori}>
          <Kategori
            type="aktif"
            onPress={() => {
              setSubCategory('semua');
              setEvent(tempEvent);
              setActiveIndex(0);
            }}
            active={activeIndex === 0 ? true : false}
            pict={require('../../assets/KatSemua.png')}
            title="Semua"
          />
          <Kategori
            onPress={() => {
              filterDataEvent('Aktual');
              setSubCategory('Aktual');
              setActiveIndex(1);
            }}
            active={activeIndex === 1 ? true : false}
            pict={require('../../assets/KatAktual.png')}
            title="Aktual"
          />
          <Kategori
            onPress={() => {
              filterDataEvent('Alumni');
              setSubCategory('Alumni');
              setActiveIndex(2);
            }}
            active={activeIndex === 2 ? true : false}
            pict={require('../../assets/KatAlumni.png')}
            title="IKA"
          />
          <Kategori
            onPress={() => {
              filterDataEvent('Lapak');
              setSubCategory('Lapak');
              setActiveIndex(3);
            }}
            active={activeIndex === 3 ? true : false}
            pict={require('../../assets/KatLapak.png')}
            title="Lapak"
          />
          <Kategori
            onPress={() => {
              filterDataEvent('Loker');
              setSubCategory('Loker');
              setActiveIndex(4);
            }}
            active={activeIndex === 4 ? true : false}
            pict={require('../../assets/KatLoker.png')}
            title="Loker"
          />
        </View>
        <SubCategoryHome
          props={subCategory}
          parentCallBack={filterDataSubCategory}
        />
        <Gap height={4} />
        {event.map(item => {
          return (
            <Event
              category={item.category}
              time={moment(item.createdAt).fromNow()}
              title={item.title}
              picture={item.image}
              userPicture={item.userImage}
              author={item.name}
              onPress={() =>
                navigation.navigate('DetailBerita', {
                  event: event,
                  item: item,
                })
              }
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
  kategori: {
    //width: '100%',
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 10,
    marginVertical: 20,
  },
  event: {
    backgroundColor: colors.primaryWhite,
  },
  Subkat: {
    paddingLeft: 24,
  },
});
