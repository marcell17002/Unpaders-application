import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView, 
} from 'react-native';
import {Headers, CommentUser} from '../../components/moleculs';
import {Picker} from 'native-base';
import {Gap, Inputs} from '../../components/atoms';
import {checkValue, colors, fonts, notifications, useForm} from '../../utils';
//import {useSelector} from 'react-redux';
import {api} from '../../services';
import {launchImageLibrary} from 'react-native-image-picker';

const AlumniTulisBerita = ({navigation}) => {
  // const user = useSelector(state => state).user;
  // const [photo, setPhoto] = useState();
  // const [form, setForm] = useForm({
  //   title: '',
  //   image: '',
  //   category: '',
  //   subCategory: '',
  //   author: {
  //     id: user.id,
  //     name: user.name,
  //   },
  //   desc: '',
  //   status: 'waiting',
  // }
  // );

  const getImage = () => {
    // launchImageLibrary(
    //   {quality: 0.3, minHeight: 110, minWidth: 110, includeBase64: true},
    //   response => {
    //     if (response.didCancel || response.errorMessage) {
    //       notifications(
    //         'warning',
    //         'oops, sepertinya anda tidak jadi upload foto ?',
    //       );
    //     } else {
    //       const source = `data:${response.type};base64,${response.base64}`;
    //       setPhoto(source);
    //       setForm('image', source);
    //     }
    //   },
    // );
  };
  const checkValueNull = () => {
    // checkValue(form.title, 'judul');
    // checkValue(form.category, 'kategory');
    // checkValue(form.subCategory, 'sub kategori');
    // checkValue(form.desc, 'isi berita');
    // checkValue(form.image, 'foto');
  };
  const onSave = async () => {
    await checkValueNull();
    navigation.navigate('MainAppGraduated', {screen: 'AlumniBerita'});

    // tagcomment
    // const dataEvent = {
    //   ...form,
    //   image: photo,
    // };
    // api.postEvent(dataEvent).then(
    //   res => {
    //     notifications(
    //       'success',
    //       'berita sukses dibuat, silahkan tunggu verifikasi admin',
    //     );
    //     navigation.navigate('MainAppGraduated', {screen: 'AlumniBerita'});
    //   },
    //   err => {
    //     const message = JSON.parse(err.response.request._response).data[0].msg;
    //     console.log('isi errr :', message);
    //     notifications('danger', message);
    //   },
    // );
    // console.log('isi event :', dataEvent);
  };
  return (
    <View>
      <View>
        <Headers
          type="sub-edit"
          title="Tulis Berita"
          namaButton="UNGGAH"
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <View>
            <Inputs
              // value={form.title}
              // onChangeText={value => setForm('title', value)}
              title="Judul"
              placeholder="Judul Berita"
            />
            <Gap height={24} />
            {/* <Inputs title="Foto" placeholder="Pilih Foto" 
              type = "addPhoto"
              numberLines={15}/> */}

            <View style={styles.contPhoto}>
              <Text style={styles.titleText}>Foto</Text>
              <View style={styles.contAddPhoto}>
              <Image
                source={require('../../assets/mdi_image.png')}
                style={StyleSheet.image}
              />
              <Text style={styles.phPhoto}>Pilih Foto</Text>
              </View>
            </View>

            <Gap height={24} />
            {/* <TouchableOpacity
              onPress={() => getImage()}
              style={styles.eventWrapper}>
              <Image
                style={styles.photoEvent}
                // source={
                //   photo
                //     // ? {uri: photo}
                //     // : require('../../assets/default-image.png')
                  
                // }
              />
            </TouchableOpacity> */}
            {/* <Gap height={24} /> */}
            {/* <Inputs
              // value={form.category}
              // onChangeText={value => setForm('category', value)}
              title="Kategori"
              placeholder="Pilih Kategori"
            /> */}
            <View>
              <Text style={styles.titleText}>Kategori Berita</Text>
              <View style={styles.contPicker}>  
                <Picker style={styles.contText}
                // placeholder="Pilih Kategori"
                // mode="dropdown"
                >
                  <Picker.Item label="Pilih Kategori" value="disabled"/>
                  <Picker.Item label="Aktual"/>
                  <Picker.Item label="Alumni"/>
                  <Picker.Item label="Lapak"/>
                  <Picker.Item label="Loker"/>
                </Picker>
              </View>
            </View>
        
            <Gap height={24} />
            {/* <Inputs
              // value={form.subCategory}
              // onChangeText={value => setForm('subCategory', value)}
              title="Sub Kategori"
              placeholder="Pilih Sub Kategori"
            /> */}
            <View>
              <Text style={styles.titleText}>SubKategori Berita</Text>
              <View style={styles.contPicker}>  
                <Picker style={styles.contText}>
                  <Picker.Item label="Pilih Subkategori"
                  // itemTextStyle={{ color: "blue", fontFamily:"Ebrima", fontSize:13 }}
                  />
                  <Picker.Item label="Berita"/>
                  <Picker.Item label="Acara"/>
                  <Picker.Item label="Opini"/>
                  <Picker.Item label="Akademis"/>
                  <Picker.Item label="Terkini"/>
                  <Picker.Item label="WikiAlumni"/>
                  <Picker.Item label="Berkabar"/>
                  <Picker.Item label="UMKM Center"/>
                  <Picker.Item label="Kuliner"/>
                  <Picker.Item label="Kiat Bisnis"/>
                  <Picker.Item label="Merchandise"/>
                  <Picker.Item label="Preloved"/>
                  <Picker.Item label="Internship"/>
                  <Picker.Item label="Full Time"/>
                  <Picker.Item label="Freelance"/>
                </Picker>
              </View>
              <Gap height={24} />
              <Inputs
                // value={form.desc}
                // onChangeText={value => setForm('desc', value)}
                title="Isi Berita"
                placeholder="Masukkan isi berita"
                type = "multiline"
                numberLines={40}
              />
            </View>
            <Gap height={100} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AlumniTulisBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 24,
    paddingRight: 20,
  },
  eventWrapper: {
    height: 120,
  },
  photoEvent: {
    height: 120,
    width: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  iconAdd: {
    //backgroundColor: colors.primary,
    height: 24,
    width: 24,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  contPicker: {
    backgroundColor: colors.backgroundgrey,
    borderRadius: 5,
    //paddingHorizontal: 16,
    borderColor: colors.input.outline,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  contText: { //INI GAMAU KE GANTI STYLENYA
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  }, 
  contAddPhoto: {
    flexDirection: 'row',
    backgroundColor: colors.primaryWhite,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.input.outline,
    height: 175,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phPhoto: {
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    color: colors.text.tertiary,
    marginLeft: 8,
  }

});
