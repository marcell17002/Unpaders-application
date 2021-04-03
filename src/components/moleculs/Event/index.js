import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Event = ({picture, category, time, title, author}) => {
  return (
    <View style={styles.event}>
      <View style={styles.eventImage}>
        <Image
          style={styles.image}
          source={require('../../../assets/event.png')}
        />
      </View>
      <View style={styles.eventDetail}>
        <View style={styles.eventTimeDetail}>
          <Text>{category}</Text>
          <Text> . </Text>
          <Text> {time}</Text>
        </View>
        <View style={styles.title}>
          <Text>{title}</Text>
        </View>
        <View style={styles.eventCreatorDetail}>
          <Image
            style={styles.logo}
            source={require('../../../assets/event.png')}
          />
          <Text>{author}</Text>
        </View>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
  },
  image: {
    maxHeight: 120,
    maxWidth: 140,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  logo: {
    maxHeight: 16,
    maxWidth: 16,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    flexShrink: 1,
  },
  eventDetail: {
    flex: 1,
    marginLeft: '5%',
    flexDirection: 'column',
  },
  eventTimeDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventCreatorDetail: {
    flexDirection: 'row',
  },
});
