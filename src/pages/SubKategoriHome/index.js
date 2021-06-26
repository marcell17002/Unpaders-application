import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Event, Headers, NotFound } from '../../components/moleculs';
import { Gap } from '../../components/atoms';
import moment from 'moment';
import 'moment/locale/id';
import { colors } from '../../utils';

const SubKategoriHome = ({navigation, route}) => {
  const payload = route.params;
  const header = payload.props;
  const event = payload.filteredData;
  moment.locale('id')

  return (
    <View style={styles.page}>
      <Headers
        title={header}
        type="sub-back"
        onPressBack={() => navigation.goBack()}
      />

      <ScrollView style={styles.event} showsVerticalScrollIndicator={false}>
        {event.length < 1 ? (
          <View style={styles.body}>
            <NotFound title="Tidak ada berita pada sub kategori ini" />
          </View>
        ) : (          
        <View>
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
        </View>
        )}
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
  body: {
    marginVertical: '5%',
  },
});
