import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Gap } from '../../components/atoms';
import { CommentUser, Headers, InputChat, NotFound } from '../../components/moleculs';
import { api } from '../../services';
import { getTime, useChat, colors } from '../../utils';

const KomentarPage = ({navigation, route}) => {
  const idEvent = route.params;
  const [comment, setComment] = useState([]);
  const user = useSelector(state => state).user;
  const [input, setInput] = useState('');
  const [profile, setProfile] = useState();
  const {messages, sendMessage, setMessages} = useChat(idEvent);
  const scrollViewRef = useRef();

  useEffect(async () => {
    await getCommentar(idEvent);
    await getProfile(user.id);
    console.log('isi data user : ', user);
  }, []);

  const getCommentar = id => {
    api.getChat('chatId', id).then(
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
            err => console.log('isi error user :', id),
          );
        });
        await Promise.all(promises);
        await setComment(data);
        await setMessages(data);
        console.log('isi data rendered : ', data);
      },
      err => console.log('isi err :', id),
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
      chatId: idEvent,
      name: profile.name,
      image: profile.image,
    };
    api.postChat(data).then(
      res => sendMessage(data),
      err => console.log('isi err post :', data),
    );
    setInput('');
  };

  return (
    <View style={styles.page}>
      <View>
        <Headers
          title="KOMENTAR"
          type="sub-back"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
        <Gap height={24} />
        
        {messages.length < 1 ? (
          <View style={styles.body}>
            <NotFound title="Belum ada komentar mengenai berita ini" />
          </View>
        ) : (
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
        )}

        {/* <View>
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
        </View> */}
      </ScrollView>
      <InputChat
        value={input}
        onChangeText={value => setInput(value)}
        onPress={() => onSend()}
      />
    </View>
  );
};

export default KomentarPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
  },
});
