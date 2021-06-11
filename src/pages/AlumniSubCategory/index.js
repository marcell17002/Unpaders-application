import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Headers, Event} from '../../components/moleculs';

const AlumniSubCategory = ({navigation, route}) => {
  const payload = route.params;
  const header = payload.props;
  const event = payload.filteredData;
  return (
    <View style={styles.page}>
      <Headers
        title={header}
        type="sub-main-back"
        onPressBack={() => navigation.goBack()}
      />

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
