import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Icon} from 'native-base';
import {colors} from '../../../utils';

const Headers = ({
  title,
  type,
  actions,
  icon,
  iconName,
  onPressBack,
  onPressRight,
  value,
  placeholder,
  onChangeText,
}) => {
  const Heading = () => {
    if (type === 'main') {
      return (
        <>
          <View style={styles.mainTitleBundle}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <TouchableOpacity
            style={styles.mainIconBundle}
            onPress={onPressRight}>
            <Icon style={styles.iconStyle} name={iconName} />
          </TouchableOpacity>
        </>
      );
    } else if (type === 'main-search') {
      return (
        <>
          <View style={styles.mainSearch}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
          <TouchableOpacity onPress={onPressRight}>
            <Icon style={styles.iconStyle} name={iconName} />
          </TouchableOpacity>
        </>
      );
    } else if (type === 'sub-main') {
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="chevron-back-outline" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleStyle}>{title}</Text>
            </View>
          </View>
          {actions ? (
            <TouchableOpacity onPress={onPressRight}>
              {icon ? (
                <Icon style={styles.iconStyle} name="chevron-back-outline" />
              ) : (
                <Text style={styles.subMainTitleActions}>{actions}</Text>
              )}
            </TouchableOpacity>
          ) : null}
        </>
      );
    } else if (type === 'search') {
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="chevron-back-outline" />
            </TouchableOpacity>
            <TextInput
              value={value}
              style={styles.inputText}
              onChangeText={onChangeText}
              placeholder={placeholder}
            />
          </View>
          {actions ? (
            <TouchableOpacity onPress={onPressRight}>
              {icon ? (
                <Icon style={styles.iconStyle} name="chevron-back-outline" />
              ) : (
                <Text style={styles.subMainTitleActions}>{actions}</Text>
              )}
            </TouchableOpacity>
          ) : null}
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
    paddingVertical: 10,
    paddingHorizontal: 23,
    alignItems: 'center',
  },
  titleStyle: {
    justifyContent: 'center',
    fontSize: 20,
    fontFamily: 'Segoe-UI-SemiBold',
    color: colors.text.secondary,
  },
  iconStyle: {
    fontSize: 26,
    alignSelf: 'center',
    color: colors.text.secondary,
  },

  mainTitleBundle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  subMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subMainTitleBundle: {
    marginLeft: '20%',
  },
  subMainTitleActions: {
    fontFamily: 'Segoe-UI-Bold',
    fontSize: 18,
    color: colors.text.primaryBlue,
  },

  inputText: {
    fontSize: 18,
    fontFamily: 'Segoe-UI',
    paddingHorizontal: 16,
    color: colors.input.text,
    backgroundColor: colors.input.background,
  },
});
