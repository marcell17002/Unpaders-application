import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const ChatItem = ({isMe, content, time}) => {
  return (
    <View style={styles.container(isMe)}>
      <View style={styles.chatContent(isMe)}>
        <Text style={styles.textChat}>{content}</Text>
      </View>
      <Text style={styles.date}>{time}</Text>
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: isMe => ({
    marginBottom: 20,
    alignItems: isMe ? 'flex-end' : 'flex-start',
    paddingLeft: isMe ? null : 20,
    paddingRight: isMe ? 20 : null,
  }),
  chatContent: isMe => ({
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: isMe ? colors.secondBlue : colors.backgroundgrey,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: !isMe ? 0 : 10,
    borderBottomRightRadius: isMe ? 0 : 10,
  }),
  textChat: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  date: {
    fontSize: 12,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginTop: 8,
  },
});
