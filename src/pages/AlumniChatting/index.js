import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Headers, ChatItem, InputChat} from '../../components/moleculs';
import {colors, fonts, getTime, useChat, useForm} from '../../utils';
import {useSelector} from 'react-redux';
import {api} from '../../services';

const AlumniChatting = ({navigation, route}) => {
  const today = new Date();
  const payload = route.params;
  const user = useSelector(state => state).user;
  const [input, setInput] = useState('');
  const [historyId, setHistoryId] = useState('');
  const [chatId, setChatId] = useState(`${user.id}_${payload.idReceiver}`);
  const {messages, sendMessage, setMessages} = useChat();

  const [history, setHistory] = useForm({
    chatId: chatId,
    lastChat: '',
    lastDate: getTime(today),
    idSender: `${user.id}`,
    idReceiver: `${payload.idReceiver}`,
  });

  useEffect(async () => {
    console.log('isi payload : ', payload);
    await getChatList();
  }, []);

  const getChatList = () => {
    if (payload.chatId === undefined) {
      api.getChat('chatId', `${payload.idReceiver}_${user.id}`).then(
        async res => {
          await setChatId(`${payload.idReceiver}_${user.id}`);
          await setMessages(res.data);
        },
        err => console.log('isi errr get rc', err),
      );
    } else {
      api.getChat('chatId', `${payload.idSender}_${user.id}`).then(
        async res => {
          await setChatId(`${payload.idSender}_${user.id}`);
          await setMessages(res.data);
        },
        err => console.log('isi errr get rc', err, chatId),
      );
    }
  };

  const postHistory = async data => {
    await api.postHistoryChat(data).then(
      async res => {
        console.log('history baru terbuat', res.data);
        await setHistoryId(res.data._id);
      },
      err => console.log('isi err : ', err),
    );
  };
  const updateHistory = async id => {
    await api.updateHistory(history, id).then(
      res => console.log('update histrory : ', res.data),
      err => console.log('isi err history : ', err),
    );
  };

  const findHistory = async id => {
    if (historyId === '') {
      api.getHistoryChat('chatId', id).then(
        async res => {
          const idHistory = res.data[0]._id;
          console.log('isi data res ', idHistory);
          await setHistoryId(idHistory);
          await updateHistory(idHistory);
        },
        async err => {
          await postHistory(history);
        },
      );
    } else {
      await setHistoryId(historyId);
      await updateHistory(historyId);
    }
  };
  const onSend = async () => {
    const data = {
      chatId: chatId,
      category: 'chat',
      allChat: {
        dateChat: today.getTime(),
        chatText: {
          sendBy: user.id,
          chatTime: getTime(today),
          chatContent: input,
        },
      },
    };
    await api.postChat(data).then(
      res => console.log('isi ress :', res.data),
      err => console.log('isi err :', err, data),
    );
    await findHistory(chatId);
  };
  return (
    <View style={styles.page}>
      <View>
        <Headers
          title={payload.name}
          type="sub-main-back"
          onPressBack={() => navigation.goBack()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contText}>
        <Text style={styles.chatDate}>Rabu, 19 Mei 2021</Text>
        {messages.map(item => {
          var content = item.allChat.chatText;
          return (
            <ChatItem
              isMe={content.sendBy === user.id}
              content={content.chatContent}
              time={content.chatTime}
            />
          );
        })}
      </ScrollView>
      <InputChat
        value={input}
        onChangeText={value => {
          setInput(value);
          setHistory('lastChat', value);
        }}
        onPress={() => onSend()}
      />
    </View>
  );
};

export default AlumniChatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatDate: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginVertical: 20,
    textAlign: 'center',
  },
  contText: {
    flex: 1,
  },
});
