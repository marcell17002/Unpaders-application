import {BASE_URL_ROOT} from '@env';
import {Picker} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {Gap, Inputs} from '../../components/atoms';
import {Headers} from '../../components/moleculs';
import {api} from '../../services';
import {
  checkValue,
  colors,
  filterData,
  fonts,
  notifications,
  useForm,
} from '../../utils';
const TulisBerita = ({navigation, route}) => {
  const payload = route.params;
  const user = useSelector(state => state).user;
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState('');
  const [val, setVal] = useState(0);

  const [categoryList, setCategoryList] = useState([
    {category: 'Aktual'},
    {category: 'Alumni'},
    {category: 'Lapak'},
    {category: 'Loker'},
  ]);
  const [subCategoryList, setSubCategoryList] = useState([
    {subCategory: 'Berita', category: 'Aktual'},
    {subCategory: 'Acara', category: 'Aktual'},
    {subCategory: 'Opini', category: 'Aktual'},
    {subCategory: 'Akademis', category: 'Aktual'},
    {subCategory: 'Terkini', category: 'Alumni'},
    {subCategory: 'WikiAlumni', category: 'Alumni'},
    {subCategory: 'Berkabar', category: 'Alumni'},
    {subCategory: 'UMKM Center', category: 'Lapak'},
    {subCategory: 'Kuliner', category: 'Lapak'},
    {subCategory: 'Kiat Bisnis', category: 'Lapak'},
    {subCategory: 'Preloved', category: 'Lapak'},
    {subCategory: 'Intership', category: 'Loker'},
    {subCategory: 'Fulltime', category: 'Loker'},
    {subCategory: 'Freelance', category: 'Loker'},
  ]);
  const [subCategoryTemp, setSubCategoryTemp] = useState([]);

  useEffect(async () => {
    await defaultRenderSubCategory();
  }, []);

  const defaultRenderSubCategory = async () => {
    await setSubCategoryTemp([]);
    filterData(subCategoryList, 'category', 'Aktual').then(async res => {
      await setSubCategoryTemp(res);
      await setForm('category', 'Aktual');
    });
  };

  const filterDataSubCategory = async props => {
    await setSubCategoryTemp([]);
    filterData(subCategoryList, 'category', props).then(async res => {
      await setSubCategoryTemp(res);
      await setForm('category', props);
    });
  };
  const [form, setForm] = useForm({
    title: payload ? payload.title : '',
    image: payload ? payload.image : '',
    category: payload ? payload.category : '',
    subCategory: payload ? payload.subCategory : '',
    author: user.id,
    desc: payload ? payload.desc : '',
    status: 'waiting',
  });

  const getImage = () => {
    launchImageLibrary(
      {quality: 0.3, minHeight: 110, minWidth: 110, includeBase64: true},
      response => {
        if (response.didCancel || response.errorMessage) {
          notifications(
            'warning',
            'oops, sepertinya anda tidak jadi upload foto ?',
          );
        } else {
          const source = `data:${response.type};base64,${response.base64}`;
          setPhoto(source);
          setForm('image', source);
        }
      },
    );
  };

  const checkValueNull = () => {
    checkValue(form.title, 'judul');
    checkValue(form.category, 'kategory');
    checkValue(form.subCategory, 'sub kategori');
    checkValue(form.desc, 'isi berita');
    checkValue(form.image, 'foto');
  };
  const responseSuccess = () => {
    dispatch({type: 'SET_LOADING', value: false});
    notifications(
      'success',
      'berita sukses dibuat, silahkan tunggu verifikasi admin',
    );
    navigation.navigate('MainAppGraduated', {screen: 'Berita'});
  };
  const onSave = async () => {
    await checkValueNull();
    dispatch({type: 'SET_LOADING', value: true});
    const dataEvent = {
      ...form,
      image: photo,
    };
    if (payload) {
      api.updateEvent(dataEvent, payload._id).then(
        res => responseSuccess(),
        err => {
          dispatch({type: 'SET_LOADING', value: false});
          const message = JSON.parse(err.response.request._response).message;
          console.log('isi errr :', dataEvent);
          notifications('danger', message);
        },
      );
    } else {
      api.postEvent(dataEvent).then(
        res => responseSuccess(),
        err => {
          dispatch({type: 'SET_LOADING', value: false});
          const message = JSON.parse(err.response.request._response).data[0]
            .msg;
          console.log('isi errr :', message);
          notifications('danger', message);
        },
      );
      console.log('isi event :', dataEvent);
    }
  };
  const handleChange = val => {
    if (val !== 0) {
      setVal(val);
    }
  };
  return (
    <View>
      <View>
        <Headers
          type="sub-edit"
          title={payload ? 'Edit Berita' : 'Tulis Berita'}
          namaButton={payload ? 'SIMPAN' : 'UNGGAH'}
          onPressBack={() => navigation.goBack()}
          onPressRight={() => onSave()}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <Gap height={24} />
          <View>
            <Inputs
              value={form.title}
              onChangeText={value => setForm('title', value)}
              title="Judul"
              placeholder="Judul berita"
            />
            <Gap height={24} />
            <Text style={styles.titleText}>Foto</Text>
            <TouchableOpacity
              onPress={() => getImage()}
              style={styles.eventWrapper(payload)}>
              {payload ? (
                <Image
                  style={styles.photoEvent}
                  source={
                    photo
                      ? {uri: photo}
                      : {uri: `${BASE_URL_ROOT}${payload.image}`}
                  }
                />
              ) : null}
            </TouchableOpacity>
            {payload ? null : (
              <TouchableOpacity onPress={() => getImage()}>
                {photo ? (
                  <Image
                    style={styles.photoEvent}
                    source={
                      photo
                        ? {uri: photo}
                        : require('../../assets/default-image.png')
                    }
                  />
                ) : (
                  <View style={styles.inputImage}>
                    <Image
                      style={styles.photoInput}
                      source={require('../../assets/default-image.png')}
                    />
                    <Text style={styles.pilihFoto}>Pilih Foto</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}

            <Gap height={24} />
            <View>
              <Text style={styles.titleText}>Kategori</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={form.category}
                  onValueChange={value => {
                    setVal(0);
                    filterDataSubCategory(value);
                  }}>
                  {categoryList.map(item => {
                    return (
                      <Picker.Item
                        label={item.category}
                        value={item.category}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Gap height={24} />
            <View>
              <Text style={styles.titleText}>Sub Kategori</Text>
              <View style={styles.contPicker}>
                <Picker
                  style={styles.contText}
                  selectedValue={form.subCategory}
                  onValueChange={value => setForm('subCategory', value)}>
                  <Picker.Item label="Silahkan Pilih sub-kategori..." value="0" />
                  {subCategoryTemp.map((item, index) => {
                    return (
                      <Picker.Item
                        key={index}
                        label={item.subCategory}
                        value={item.subCategory}
                      />
                    );
                  })}
                </Picker>
              </View>
            </View>
            <Gap height={24} />
            <Inputs
              multiline
              numberOfLines={10}
              value={form.desc}
              onChangeText={value => setForm('desc', value)}
              title="Isi Berita"
              placeholder="Masukkan isi berita"
            />
            <Gap height={100} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TulisBerita;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primaryWhite,
    paddingLeft: 24,
    paddingRight: 20,
  },
  eventWrapper: payload => ({
    height: payload ? 120 : 5,
  }),
  photoEvent: {
    height: 120,
    width: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
    marginBottom: 12,
  },
  inputImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 13,
    fontFamily: fonts.primary.reguler,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderColor: colors.input.outline,
    color: colors.text.tertiary,
    backgroundColor: colors.input.background,
    paddingVertical: 60,
  },
  photoInput: {
    width: 20,
    height: 20,
    borderRadius: 5,
    resizeMode: 'cover',
    marginRight: '5%',
  },
  contPicker: {
    backgroundColor: colors.backgroundgrey,
    borderRadius: 5,
    borderColor: colors.input.outline,
  },
  contText: {
    fontSize: 8,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  pilihFoto: {
    fontSize: 14,
    fontFamily: fonts.primary.reguler,
    color: colors.text.secondGrey,
  },
});
