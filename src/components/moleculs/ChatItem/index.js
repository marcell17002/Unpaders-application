import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {colors, fonts} from '../../../utils';

const ChatItem = ({isMe, content, time}) => {
  if (isMe) {
    return (
      <View style={styles.container}>
        <View style={styles.chatContent}>
          <Text style={styles.textChat}>{content}</Text>
        </View>
        <Text style={styles.date}>{time}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.textChat}>{content}ss</Text>
      </View>
      <Text style={styles.date}>{time}</Text>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  chatContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.secondBlue,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  textChat: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: 8,
  },
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
