import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Headers, CommentUser, InputChat} from '../../components/moleculs';
import {Gap} from '../../components/atoms';
import {api} from '../../services';
import moment from 'moment';
import {getTime, useForm} from '../../utils';
import {useSelector} from 'react-redux';
import {useChat} from '../../utils/useChat';
import {BASE_IMG} from '@env';

const AlumniKomentar = ({navigation, route}) => {
  const idEvent = route.params;
  const [comment, setComment] = useState([]);
  const user = useSelector(state => state).user;
  const [input, setInput] = useState('');
  const [profile, setProfile] = useState();
  const {messages, sendMessage, setMessages} = useChat(idEvent);

  useEffect(async () => {
    await getCommenter(idEvent);
    await getProfile(user.id);
  }, []);

  const getCommenter = id => {
    api.getChat('chatID', id).then(
      async res => {
        console.log('isi res data getchat :', res.data);
        const commentar = res.data;
        const data = [];
        const promises = await Object.keys(commentar).map(async key => {
          await api.getProfileUser(commentar[key].allChat.chatText.sendBy).then(
            async res => {
              await data.push({
                id: key,
                name: res.data[0].name,
                image: res.data[0].image,
                ...commentar[key],
              });
            },
            err => console.log('isi error user :', err),
          );
        });
        await Promise.all(promises);
        await setComment(data);
        await setMessages(data);
        console.log('isi data rendered : ', data);
      },
      err => console.log('isi err :', err),
    );
  };

  const getProfile = id => {
    api.getProfileUser(id).then(
      async res => await setProfile(res.data[0]),
      err => {
        setProfile(user);
      },
    );
  };

  const onSend = () => {
    const today = new Date();
    const data = {
      allChat: {
        chatText: {
          sendBy: user.id,
          chatTime: getTime(today),
          chatContent: input,
        },
        dateChat: today.getTime(),
      },
      category: 'commentar',
      chatID: idEvent,
      name: profile.name,
      image: profile.image,
    };
    api.postChat(data).then(
      res => sendMessage(data),
      err => console.log('isi err :', err),
    );
  };

  return (
    <View style={styles.page}>
      <View>
        <Headers
          title="KOMENTAR"
          type="sub-main-back"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={24} />
        <View>
          {messages.map(item => {
            return (
              <CommentUser
                name={item.name}
                image={item.image}
                waktu={moment(item.createdAt).fromNow()}
                komentar={item.allChat.chatText.chatContent}
              />
            );
          })}
        </View>
      </ScrollView>
      <InputChat
        value={input}
        onChangeText={value => setInput(value)}
        onPress={() => onSend()}
      />
    </View>
  );
};

export default AlumniKomentar;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
});
