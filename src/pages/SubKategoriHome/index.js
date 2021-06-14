import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Event, Headers } from '../../components/moleculs';
import { Gap } from '../../components/atoms';
import moment from 'moment';
import { colors } from '../../utils';

const SubKategoriHome = ({navigation, route}) => {
  const payload = route.params;
  const header = payload.props;
  const event = payload.filteredData;
  return (
    <View style={styles.page}>
      <Headers
        title={header}
        type="sub-back"
        onPressBack={() => navigation.goBack()}
      />

      <ScrollView style={styles.event} showsVerticalScrollIndicator={false}>
        <Gap height={24}/>
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

export default SubKategoriHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
});
