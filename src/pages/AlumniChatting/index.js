import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  Headers,
  ChatItem,
  InputChat,
  NotFound,
} from '../../components/moleculs';
import {
  colors,
  fonts,
  getDateName,
  getTime,
  notifications,
  useChat,
  useForm,
} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {api, Fire} from '../../services';

const AlumniChatting = ({navigation, route}) => {
  var flag = false;
  const today = new Date();
  const date = getDateName(today.toISOString(), true);
  const payload = route.params;
  const user = useSelector(state => state).user;
  const [input, setInput] = useState('');
  const [historyId, setHistoryId] = useState('');
  const [chatId, setChatId] = useState();
  const [idReceiver, setIdReceiver] = useState(
    payload.idReceiver === user.id ? payload.idSender : payload.idReceiver,
  );
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  const {messages, sendMessage, setMessages} = useChat();

  useEffect(async () => {
    await getChatList();
    Fire.getToken(payload.idReceiver).then(res => {
      setToken(res);
    });
    console.log('isi sender : ', user.email);
  }, []);

  const getChatList = () => {
    if (payload.chatId === undefined) {
      api.getChat('chatId', `${payload.idReceiver}_${user.id}`).then(
        async res => {
          console.log(`isi chat id 1${payload.idReceiver}_${user.id}`);
          await setChatId(`${payload.idReceiver}_${user.id}`);
          await setMessages(res.data);
        },
        err => {
          api.getChat('chatId', `${user.id}_${payload.idReceiver}`).then(
            async res => {
              console.log(`isi chat id 2${user.id}_${payload.idReceiver}`);
              await setChatId(`${user.id}_${payload.idReceiver}`);
              await setMessages(res.data);
            },
            async err => {
              await setChatId(`${user.id}_${payload.idReceiver}`);
              console.log('new communication');
            },
          );
        },
      );
    } else {
      api.getChat('chatId', payload.chatId).then(
        async res => {
          await setChatId(payload.chatId);
          await setMessages(res.data);
        },
        err => console.log('isi errr get rc2', payload.chatId),
      );
    }
  };

  const postHistory = async () => {
    const data = {
      chatId: chatId,
      lastChat: input,
      lastDate: getTime(today),
      idSender: `${user.id}`,
      idReceiver: idReceiver,
      status: true,
    };
    await api.postHistoryChat(data).then(
      async res => {
        console.log('history baru terbuat', res.data);
        await setHistoryId(res.data._id);
      },
      err => console.log('isi err : ', err),
    );
  };
  const updateHistory = async id => {
    const data = {
      chatId: chatId,
      lastChat: input,
      lastDate: getTime(today),
      idSender: `${user.id}`,
      idReceiver: idReceiver,
      status: true,
    };
    console.log('isii update data : ', data);
    await api.updateHistory(data, id).then(
      res => console.log('update histrory : ', res.data),
      err => console.log('isi err history : ', id),
    );
  };

  const findHistory = async id => {
    api.getHistoryChat('chatId', id).then(
      async res => {
        const idHistory = res.data[0]._id;
        console.log('isi data res ', idHistory);
        await setHistoryId(idHistory);
        await updateHistory(idHistory);
      },
      async err => {
        await postHistory();
      },
    );
  };
  const sendNotifications = () => {
    const data = {
      token: token,
      title: payload.name,
      body: input,
    };
    api.postNotifications(data);
  };
  const onSend = async () => {
    if (input.length < 1) return notifications('info', 'masukan pesan anda');
    const data = {
      chatId: chatId,
      category: 'chat',
      allChat: {
        dateChat: date,
        chatText: {
          sendBy: user.id,
          chatTime: getTime(today),
          chatContent: input,
        },
      },
    };
    console.log('isi data ', data);
    await sendMessage(data);
    await setInput('');
    await api.postChat(data).then(
      res => {
        console.log('isi ress :', res.data);
        sendNotifications();
      },
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
          onPressBack={async () => {
            await dispatch({type: 'SET_SEEN', value: true});
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.body}>
        {messages.length < 1 ? (
          <NotFound type="ChatKosong" />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.contText}>
            {messages.map((item, index) => {
              var content = item.allChat.chatText;
              var date = item.allChat.dateChat;
              if (index === 0)
                return (
                  <>
                    <Text style={styles.chatDate}>{date}</Text>
                    <ChatItem
                      isMe={content.sendBy === user.id}
                      content={content.chatContent}
                      time={content.chatTime}
                    />
                  </>
                );
              return (
                <>
                  <ChatItem
                    isMe={content.sendBy === user.id}
                    content={content.chatContent}
                    time={content.chatTime}
                  />
                </>
              );
            })}
          </ScrollView>
        )}
      </View>
      <InputChat
        value={input}
        onChangeText={value => {
          setInput(value);
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
  body: {
    flex: 1,
    justifyContent: 'center',
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
