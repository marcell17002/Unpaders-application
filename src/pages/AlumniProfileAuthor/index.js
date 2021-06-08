import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Headers, ProfileAuthor, Event} from '../../components/moleculs';
import {Gap, Buttons} from '../../components/atoms';
import {fonts, colors} from '../../utils';
import {useSelector} from 'react-redux';
import moment from 'moment';

const AlumniProfileAuthor = ({navigation, route}) => {
  const payload = route.params;
  const recommendation = useSelector(state => state).recommendation;
  return (
    <View style={styles.page}>
      <View>
        <Headers
          title="Tim Unpaders"
          type="sub-main-back"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View>
          <ProfileAuthor
            nama={payload.name}
            picture={payload.image}
            fakultas={payload.faculty}
            jurusan={payload.prodi}
            angkatan={payload.level}
          />
        </View>
        <Gap height={16} />
        <View style={styles.contButton}>
          <Buttons
            title="Chat"
            status="secondary"
            onPress={() => navigation.navigate('AlumniChatting', payload)}
          />
        </View>
        <Gap height={24} />
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <Gap height={24} />
        <View>
          <Text style={styles.sectionLainnya}>Berita yang dipublikasikan</Text>
          {recommendation.map(item => {
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
                    event: payload.event,
                    item: item,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniProfileAuthor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  contButton: {
    width: 100,
    alignSelf: 'center',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  sectionLainnya: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginLeft: 24,
  },
});
