import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Gap, ListButton} from '../../components/atoms';
import {Headers, ListAlumniChat, NotFound} from '../../components/moleculs';
import {api} from '../../services';
import {colors, fonts, getData} from '../../utils';

const Chat = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [history, setHistory] = useState([]);
  const [historyTemp, setHistoryTemp] = useState([]);
  const user = useSelector(state => state).user;
  const [refreshing, setRefreshing] = useState(false);

  useEffect(async () => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch({type: 'SET_LOADING', value: true});
      setHistory([]);
      setHistoryTemp([]);
      getHistorySender(); //a_b   -> a
      getHistoryReceiver(); //b_a   -> a
    });
    await getData('user').then(res => {
      if (res) {
        return console.log('isi res data local :', res);
      }
    });
    return unsubscribe;
  }, [navigation]);

  const getHistorySender = () => {
    api.getHistoryChat('idSender', user.id).then(
      async res => {
        const historyChat = res.data;
        const data = [];
        console.log('isi data :', res.data);
        const promises = await Object.keys(historyChat).map(async key => {
          await api.getProfileUser(historyChat[key].idReceiver).then(
            async res => {
              await data.push({
                id: key,
                name: res.data[0].name,
                image: res.data[0].image,
                ...historyChat[key],
              });
            },
            err => console.log('isi error :', err),
          );
        });
        await Promise.all(promises);
        await setHistory(data);
        dispatch({type: 'SET_LOADING', value: false});
      },
      err => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('isi errhist : ', err, user.id);
      },
    );
  };
  const getHistoryReceiver = () => {
    api.getHistoryChat('idReceiver', user.id).then(
      async res => {
        const historyChat = res.data;
        const data = [];
        console.log('isi data :', res.data);
        const promises = await Object.keys(historyChat).map(async key => {
          await api.getProfileUser(historyChat[key].idSender).then(
            async res => {
              await data.push({
                id: key,
                name: res.data[0].name,
                image: res.data[0].image,
                ...historyChat[key],
              });
            },
            err => console.log('isi error :', err),
          );
        });
        await Promise.all(promises);
        await setHistoryTemp(data);
        dispatch({type: 'SET_LOADING', value: false});
      },
      err => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log('isi errhist : ', err, user.id);
      },
    );
  };
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(async () => {
      await getHistorySender(); //a_b   -> a
      await getHistoryReceiver(); //b_a   -> a
      await setRefreshing(false);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View>
        <Headers title="CHAT" type="main" />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <ListButton
            namaTombol="Temukan Alumni"
            onPress={() => navigation.navigate('TemukanAlumni')}
          />
        </View>
        <View style={styles.ghap}>
          <Gap height={12} />
          <Text style={styles.textGap}>CHAT</Text>
          <Gap height={12} />
        </View>
        {history.length < 1 && historyTemp.length < 1 ? (
          <View style={styles.body}>
            <NotFound title="Anda belum memiliki percakapan dengan siapapun" />
          </View>
        ) : (
          <View>
            {historyTemp.reverse().map(item => {
              return (
                <ListAlumniChat
                  key={item._id}
                  nama={item.name}
                  isBadge={item.status}
                  picture={item.image}
                  lastText={item.lastChat}
                  onPress={() => navigation.navigate('RuangObrolan', item)}
                />
              );
            })}
            {history.reverse().map(item => {
              return (
                <ListAlumniChat
                  key={item._id}
                  nama={item.name}
                  picture={item.image}
                  lastText={item.lastChat}
                  onPress={() => navigation.navigate('RuangObrolan', item)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    marginVertical: '50%',
  },
  ghap: {
    backgroundColor: colors.text.grey,
  },
  textGap: {
    marginLeft: 24,
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondGrey,
  },
});
