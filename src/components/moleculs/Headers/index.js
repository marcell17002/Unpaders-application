import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../utils';

const Headers = ({
  title,
  type,
  actions,
  iconName,
  onPressBack,
  onPressRight,
}) => {
  const Heading = () => {
    if (type === 'main') {
      return (
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    } else if (type === 'double') {
      return (
        <>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity onPress={onPressRight}>
            <Icon style={styles.iconStyle} name={iconName} />
          </TouchableOpacity>
        </>
      );
    } else if (type === 'sub-main') {
      return (
        <>
          <View style={styles.leftSide}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.bundleTitle}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </>
      );
    } else if (type === 'sub-main-icons') {
      return (
        <>
          <View style={styles.leftSide}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.bundleTitle}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPressRight}>
            <Icon style={styles.iconStyle} name="chevron-back-outline" />
          </TouchableOpacity>
        </>
      );
    } else if (type === 'sub-main-actions') {
      return (
        <>
          <View style={styles.leftSide}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.bundleTitle}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onPressRight}>
            <Text style={styles.titleActions}>{actions}</Text>
          </TouchableOpacity>
        </>
      );
    } else if (type === 'edit') {
      return (
        <>
          <View style={styles.leftSide}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity onPress={onPressRight}>
            <Icon style={styles.iconStyle} name={iconName} />
          </TouchableOpacity>
        </>
      );
    }
  };
  return (
    <View style={styles.header}>
      <Heading />
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.primaryWhite,
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 23,
    alignItems: 'center',
  },
  bundleTitle: {
    marginLeft: '20%',
  },
  title: {
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Segoe-UI-SemiBold',
    color: colors.text.secondary,
  },
  titleActions: {
    fontFamily: 'Segoe-UI-Bold',
    fontSize: 18,
    color: colors.text.primaryBlue,
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: 'center',
    color: colors.text.secondary,
  },
  leftSide: {
    flexDirection: 'row',
  },
});
