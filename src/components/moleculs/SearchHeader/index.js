import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Icon} from 'native-base';

const SearchHeader = ({
  placeholder,
  value,
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
          style={styles.searchTitle}
        />
        <View style={styles.iconRight}>
          <TouchableOpacity //icon kanan 1
            style={styles.MiddleIconBundle}
            onPress={onPressMiddle}>
            <Icon style={styles.iconStyle} name="search" />
          </TouchableOpacity>
          <TouchableOpacity //icon kanan 2
            style={styles.RightIconBundle}
            onPress={onPressRight}>
            <Icon style={styles.iconStyle} type="AntDesign" name="filter" />
          </TouchableOpacity>
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
    alignItems: 'center', //nyamain icon & tulisan
    shadowColor: colors.text.tertiary,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
    alignItems: 'center',
  },
  subMain: {
    flexDirection: 'row',
    flex: 1,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    //DONE
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    color: colors.primaryBlack,
  },
  RightIconBundle: {
    //icon kanan
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  MiddleIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Segoe-UI',
    paddingHorizontal: 16,
    color: colors.input.text,
    backgroundColor: colors.input.background,
  },
  searchTitle: {
    fontSize: 18,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    textAlign: 'right',
    width: '70%',
    textAlign: 'left',
    paddingLeft: '5%',
  },
  iconRight: {
    flexDirection: 'row',
  },
});
