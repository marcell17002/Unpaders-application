import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';

const BtnFilter = ({title1, title2, type, onPress}) => {
    const ButtonFilter = () => {
        switch (type) {
            case 'kanan-kiri':
                return (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={onPress} style={styles.buttonKiri}>
                            <Text style={styles.textBtn}>{title1}</Text>
                        </TouchableOpacity>
                        <Gap width={16}/>
                        <TouchableOpacity onPress={onPress} style={styles.buttonKanan}>
                            <Text style={styles.textBtn}>{title2}</Text>
                        </TouchableOpacity>
                    </View>
                );
            default:
                return (
                    <View style={styles.container}>
                        <TouchableOpacity onPress={onPress} style={styles.buttonKiri}>
                            <Text style={styles.textBtn}>{title1}</Text>
                        </TouchableOpacity>
                    </View>
                );
        } 
    };
    return (
        <View>
          <ButtonFilter />
        </View>
      );
    // return (
    //     <View style={styles.page}>
    //         <View style={styles.container}>
    //             <TouchableOpacity type={kanan} onPress={onPress} style={styles.buttonFilter}>
    //                 <Text style={styles.textBtn}>{title1}</Text>
    //             </TouchableOpacity>
    //             <Gap width={16}/>
    //             <TouchableOpacity type={kiri} onPress={onPress} style={styles.buttonFilter2}>
    //                 <Text style={styles.textBtn}>{title2}</Text>
    //             </TouchableOpacity>
    //         </View>
    //     </View>
    //)
  };
  
  export default BtnFilter;
  
  const styles = StyleSheet.create({
    buttonKiri: {
        backgroundColor: colors.button.dropdown.background,
        borderRadius: 5,
        marginBottom: 16,
        justifyContent: 'flex-start',
        width: 168,
        //marginLeft: 24,
    },
    buttonKanan: {
        backgroundColor: colors.button.dropdown.background,
        borderRadius: 5,
        marginBottom: 16,
        justifyContent: 'flex-end',
        width: 168,
        marginRight: 20,
    },
    textBtn: {
        color: colors.button.dropdown.text,
        textAlign: 'center',
        fontFamily: fonts.primary.semibold,
        fontSize: 14,
        paddingVertical: 10,
    },
    // buttonFilter: {
    //     backgroundColor: colors.button.dropdown.background,
    //     borderRadius: 5,
    //     marginBottom: 16,
    //     width: 168,
    //     //marginLeft: 24,
    // },
    // buttonFilter2: {
    //     backgroundColor: colors.button.dropdown.background,
    //     borderRadius: 5,
    //     marginBottom: 16,
    //     width: 168,
    //     //marginLeft: 24,
    // },
    container: {
        flexDirection: 'row',
        marginLeft: 24,
        marginRight: 20,
    },
  })