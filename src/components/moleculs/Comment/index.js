import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Gap} from '../../atoms';

const Comment = ({image, sender, time, desc}) => {
  return (
    <View style={styles.comment}>
      <Image
        style={styles.image}
        source={require('../../../assets/user.png')}
      />
      <View style={styles.commentDetail}>
        <View style={styles.commentDetailInfo}>
          <Text>{sender}</Text>
          <Text>{time}</Text>
        </View>
        <Gap height={10} />
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  image: {
    maxHeight: 40,
    maxWidth: 40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  comment: {
    flexDirection: 'row',
  },
  commentDetail: {
    marginLeft: '5%',
    flex: 1,
  },
  commentDetailInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
