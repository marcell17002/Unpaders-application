import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  CommentUser,
  ListAlumni,
  SearchHeader,
  Event,
} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {colors, filterData, fonts} from '../../utils';
import {useSelector} from 'react-redux';
import moment from 'moment';

const SearchAlumni = ({navigation, route}) => {
  const payload = route.params;
  const [event, setEvent] = useState(payload);
  const [eventTemp, setEventTemp] = useState(payload);
  const [input, setInput] = useState('');

  const searchFilter = value => {
    setInput(value);
    const newData = event.filter(item => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = value.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setEventTemp(newData);
  };
  return (
    <View>
      <SearchHeader
        value={input}
        less
        onChangeText={value => searchFilter(value)}
        placeholder="Cari disini ..."
        onPressBack={() => navigation.goBack()}
        onPressMiddle={() => searchFilter(input)}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
        {eventTemp.map(item => {
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

export default SearchAlumni;

const styles = StyleSheet.create({
  page: {
    //flex: 1,
    marginBottom: '20%',
    backgroundColor: colors.primaryWhite,
  },
});
