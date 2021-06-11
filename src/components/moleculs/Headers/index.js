import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image, 
} from 'react-native';
import {Icon} from 'native-base';
import {colors, fonts} from '../../../utils';

const Headers = ({
  title,
  type,
  actions,
  icon,
  iconName,
  namaButton,
  onPressBack,
  onPressRight,
  onPressMiddle,
  value,
  placeholder,
  onChangeText,
}) => {
  const Heading = () => {
    if (type === 'main-search') {
      //yg ada logo & ada logo searchnya
      return (
        <>
          <View style={styles.mainTitleBundle}>
            <Image
              style={styles.image}
              source={require('../../../assets/LogoKecil.png')}
            />
          </View>
          <TouchableOpacity //icon kanan
            style={styles.RightIconBundle}
            onPress={onPressRight}>
            <Icon style={styles.iconStyle} name="search" />
          </TouchableOpacity>
        </>
      );
    } else if (type === 'main') {
      //judul doang
      return (
        <>
          <View style={styles.mainHeader}>
            <Text style={styles.titleStyleMain}>{title}</Text>
          </View>
        </>
      );
    } else if (type === 'sub-main') {
      //ada icon kiri & kanan
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="arrow-back" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleJudul}>{title}</Text>
            </View>
            <TouchableOpacity //icon kanan
              style={styles.RightIconBundle}
              onPress={onPressRight}>
              <Icon style={styles.iconStyle} name="share-social" />
            </TouchableOpacity>
          </View>
          {/* {actions ? (
            <TouchableOpacity onPress={onPressRight}>
              {icon ? (
                <Icon style={styles.iconStyle} name="arrow-back" />
              ) : (
                <Text style={styles.subMainTitleActions}>{actions}</Text>
              )}
            </TouchableOpacity>
          ) : null} */}
        </>
      );
    } else if (type === 'three-icon') {
      //ada icon kiri & kanan (2)
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="arrow-back" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleJudul}>{title}</Text>
            </View>
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
        </>
      );
    } else if (type === 'sub-edit') {
      //icon back & button edit
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="arrow-back" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleJudul}>{title}</Text>
            </View>
            <View>
              <TouchableOpacity onPress={onPressRight}>
                <Text style={styles.editButton}>{namaButton}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      );
    } else if (type === 'sub-main-back') {
      //ada icon back kiri
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} name="arrow-back" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleJudul}>{title}</Text>
            </View>
            <View />
          </View>
          {/* {actions ? (
              <TouchableOpacity onPress={onPressRight}>
                {icon ? (
                  <Icon style={styles.iconStyle} name="arrow-back" />
                ) : (
                  <Text style={styles.subMainTitleActions}>{actions}</Text>
                )}
              </TouchableOpacity>
            ) : null} */}
        </>
      );
    } else if (type === 'filter') {
      return (
        <>
          <View style={styles.subMain}>
            <TouchableOpacity onPress={onPressBack}>
              <Icon style={styles.iconStyle} type="AntDesign" name="close" />
            </TouchableOpacity>
            <View style={styles.subMainTitleBundle}>
              <Text style={styles.titleJudul}>{title}</Text>
            </View>
            <View />
          </View>
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
  mainTitleBundle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 15,
  },
  mainHeader: {
    flex: 1,
    marginTop: 17,
    marginBottom: 20,
  },
  titleStyleMain: {
    //title style ditengah
    textAlign: 'center',
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'Segoe-UI-SemiBold',
    color: colors.text.primary,
  },
  subMain: {
    flexDirection: 'row',
    marginTop: 17,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subMainTitleBundle: {
    flex:1,
    paddingHorizontal: 16,
  },
  editButton: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.text.primaryBlue,
    alignSelf: 'flex-end',
  },
  iconStyle: {
    alignSelf: 'flex-start',
    justifyContent: 'space-around',
    color: colors.primaryBlack,
  },
  titleJudul: {
    fontSize: 20,
    fontFamily: 'Segoe-UI-SemiBold',
    color: colors.text.primary,
  },
  RightIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  MiddleIconBundle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  // subMainTitleActions: {
  //   fontFamily: 'Segoe-UI-Bold',
  //   fontSize: 18,
  //   color: colors.text.primaryBlue,
  // },
});
