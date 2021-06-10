import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Headers,
  Kategori,
  Event,
  SubCategoryHome,
} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {api} from '../../services';
import {
  colors,
  filterData,
  fonts,
  getDateName,
  notifications,
  useForm,
} from '../../utils';
import moment from 'moment';
import {useDispatch} from 'react-redux';

const AlumniHome = ({navigation}) => {
  const [event, setEvent] = useState([]);
  const [tempEvent, setTempEvent] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
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
      },
      err => notifications('danger', 'no internet connection'),
    );
  }, []);
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
    console.log('isi data : ', props);
    await setEvent(filteredData);
  };
  return (
    <View style={styles.page}>
      <Headers
        title="Home"
        type="main-search"
        onPressRight={() => navigation.navigate('SearchPage', event)}
      />

      <ScrollView style={styles.event} showsVerticalScrollIndicator={false}>
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
            title="Alumni"
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
                navigation.navigate('AlumniDetailBerita', {
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

export default AlumniHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  kategori: {
    flexDirection: 'row',
    marginLeft: 24,
    marginVertical: 24,
  },
  event: {
    backgroundColor: 'white',
  },
  textSubkat: {
    marginLeft: 24,
    marginRight: 20,
  },
  judulKategori: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  descKategori: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  Subkat: {
    paddingLeft: 24,
  },
});
