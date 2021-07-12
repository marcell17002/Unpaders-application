import { Icon } from 'native-base';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const SearchHeader = ({
  placeholder,
  value,
  less,
  onPressBack,
  onPressMiddle,
  onPressRight,
  onChangeText,
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.subMain}>
        <TouchableOpacity onPress={onPressBack}>
          <Icon style={styles.iconStyle} name="arrow-back" />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#787878"
          style={styles.searchTitle}
        />
        <View style={styles.iconRight}>
          <TouchableOpacity 
            style={styles.MiddleIconBundle}
            onPress={onPressMiddle}>
            <Icon style={styles.iconStyle} name="search" />
          </TouchableOpacity>
          {less ? null : (
            <TouchableOpacity 
              style={styles.RightIconBundle}
              onPress={onPressRight}>
              <Icon style={styles.iconStyle} type="AntDesign" name="filter" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.primaryWhite,
    paddingLeft: 24,
    paddingRight: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 2.5,
    alignItems: 'center',
  },
  subMain: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    color: colors.primaryBlack,
  },
  RightIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 10,
  },
  MiddleIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  searchTitle: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: "#000",
    //color: colors.text.primary,
    textAlign: 'right',
    width: '70%',
    textAlign: 'left',
    paddingLeft: '-15%',
  },
  iconRight: {
    flexDirection: 'row',
  },
});
