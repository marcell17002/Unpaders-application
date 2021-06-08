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

const AlumniSubCategory = ({navigation}) => {
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
      <Headers title='NAMA SUBCATEGORI' type='sub-main-back' 
        onPressBack={() => navigation.goBack()}/>

      <ScrollView style={styles.event} showsVerticalScrollIndicator={false}>
        
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

export default AlumniSubCategory;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
      },
});