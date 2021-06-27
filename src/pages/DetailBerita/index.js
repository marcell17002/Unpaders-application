import moment from 'moment';
import 'moment/locale/id';
import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import { ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Buttons, Gap } from '../../components/atoms';
import { Berita, CommentSection, Event, Headers } from '../../components/moleculs';
import { api } from '../../services';
import { colors, filterData, fonts, getDateName, notifications } from '../../utils';

const DetailBerita = ({navigation, route}) => {
  const payload = route.params;
  const [author, setAuthor] = useState({});
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [countLike, setCountLike] = useState([]);
  const [countDislike, setCountDislike] = useState([]);
  const [idLike, setIdLike] = useState('');
  const stateGlobal = useSelector(state => state);
  const user = stateGlobal.user;
  const recommendation = stateGlobal.recommendation;
  moment.locale('id')

  useEffect(async () => {
    api.getProfileUser(payload.item.author).then(
      res => setAuthor(res.data[0]),
      err => notifications('danger', 'anda tidak terkoneksi dengan internet'),
    );
    api.getLikedEvent('eventId', payload.item._id).then(
      async res => {
        const filterStatusTrue = await filterData(res.data, 'status', true);
        setCountLike(filterStatusTrue); //counter like
        const filterStatusFalse = await filterData(res.data, 'status', false);
        setCountDislike(filterStatusFalse); //counter false
        const filteredData = await filterData(res.data, 'userId', `${user.id}`);
        if (filteredData.length > 0) {
          if (filteredData[0].status === true) setLike(true);
          else setDislike(true);
          setIdLike(filteredData[0]._id);
        }
      },
      err => {},
    );
  }, []);

  const updateValueLiked = () => {
    api.getLikedEvent('eventId', payload.item._id).then(
      async res => {
        const filterStatusTrue = await filterData(res.data, 'status', true);
        setCountLike(filterStatusTrue); //counter like
        console.log('isi filrer : ', filterStatusTrue);
        const filterStatusFalse = await filterData(res.data, 'status', false);
        setCountDislike(filterStatusFalse); //counter false
      },
      err => {
        setCountLike([]);
        setCountDislike([]);
      },
    );
  };

  const postCounter = async status => {
    const dataUserLikedEvent = {
      userId: user.id,
      eventId: payload.item._id,
      status: status,
    };
    await api.postLikedEvent(dataUserLikedEvent).then(
      res => {
        setIdLike(res.data._id);
      },
      err => console.log('errr post : ', err),
    );
    await updateValueLiked();
  };

  const updateCounter = async status => {
    const dataUserLikedEvent = {
      userId: user.id,
      eventId: payload.item._id,
      status: status,
    };
    await api.updateLikedEvent(dataUserLikedEvent, idLike).then(
      async res => {
        if (status === true) setLike(true), setDislike(false);
        else setLike(false), setDislike(true);
      },
      err => console.log('errr del: ', err),
    );
    await updateValueLiked();
  };

  const deleteCounter = async status => {
    await api.deleteLikedEvent(idLike).then(
      async res => {
        if (status === true) setLike(false);
        else setDislike(false);
        await updateValueLiked();
      },
      err => console.log('errr del: ', err),
    );
  };
  const rateEvent = type => {
    if (type === 'like') {
      if (dislike === true) {
        return updateCounter(true);
      } else if (like === true) {
        return deleteCounter(true);
      } else {
        setLike(true);
        postCounter(true);
      }
    } else {
      if (like === true) {
        return updateCounter(false);
      } else if (dislike === true) {
        return deleteCounter(false);
      } else {
        setDislike(true);
        postCounter(false);
      }
    }
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hello, User ! Lets surf with Unpaders App ${'\n'}bit.ly/UnpadersApp`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.page}>
      <View>
        <Headers
          title={`${payload.item.category} - ${payload.item.subCategory}`}
          type="sub-berita"
          onPressRight={() => onShare()}
          onPressBack={() => navigation.goBack()}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Gap height={20} />
          <Berita
            title={payload.item.title}
            author={author.name}
            waktu={getDateName(payload.item.createdAt)}
            isiBerita={payload.item.desc}
            images={payload.item.image}
            imagesUser={author.image}
          />
          <Gap height={20} />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <View>
          <Gap height={20} />
          <CommentSection
            author={author.name}
            image={author.image}
            waktu={getDateName(payload.item.createdAt)}
            onPress={() => navigation.navigate('ProfilAlumni', author)}
          />

          <View style={styles.secButtons}>
            <Buttons
              status="secondary"
              title="LIHAT KOMENTAR"
              onPress={() =>
                navigation.navigate('KomentarPage', payload.item._id)
              }
            />
            <Gap height={20} />
          </View>
        </View>

        <View style={styles.ghap}>
          <Gap height={12} />
        </View>
        <View>
          <Gap height={20} />
          <Text style={styles.sectionLainnya}>Berita Terbaru Lainnya</Text>
          <Gap height={20}/>
          {recommendation.slice(0, 3).map(item => {
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
                    event: payload.event,
                    item: item,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.rating}>
        <TouchableOpacity
          style={styles.likedButton}
          onPress={() => rateEvent('like')}>
          <Icon style={styles.like(like)} type="Feather" name="thumbs-up" />
          <Gap width={8} />
          <Text style={styles.textLike(like)}>{countLike.length}</Text>
        </TouchableOpacity>

        <Gap width={20} />

        <TouchableOpacity
          style={styles.disLikedButton}
          onPress={() => rateEvent('dislike')}>
          <Icon
            style={styles.disLike(dislike)}
            type="Feather"
            name="thumbs-down"
          />
          <Gap width={8} />
          <Text style={styles.textdisLike(dislike)}>{countDislike.length}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailBerita;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: colors.primaryWhite,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 5.7,
    shadowRadius: 0,
    elevation: 10,
  },
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
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
  secButtons: {
    marginLeft: 24,
    marginRight: 20,
  },
  like: like => ({
    color: like ? colors.primary : colors.secondGrey,
  }),
  disLike: disLike => ({
    color: disLike ? colors.primary : colors.secondGrey,
  }),
  textLike: like => ({
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: like ? colors.primary : colors.secondGrey,
  }),
  textdisLike: dislike => ({
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: dislike ? colors.primary : colors.secondGrey,
  }),
  likedButton: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 24,
  },
  disLikedButton: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
