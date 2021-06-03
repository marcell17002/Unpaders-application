import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Headers, Kategori, Event, SubKategori} from '../../components/moleculs';
import { Gap } from '../../components/atoms';
import {api} from '../../services';
import {colors, filterData, fonts, notifications} from '../../utils';
import moment from 'moment';

const AlumniHome = ({navigation}) => {
  const [event, setEvent] = useState([]);
  const [tempEvent, setTempEvent] = useState([]);

  useEffect(() => {
    api.getEventByCategory('status', 'published').then(
      res => {
        setEvent(res.data);
        setTempEvent(res.data);
      },
      err => notifications('danger', 'no internet connection'),
    );
  }, []);

  const filterDataEvent = async props => {
    const filteredData = await filterData(tempEvent, 'category', props);
    await setEvent(filteredData);
  };
  return (
    <View style={styles.page}>
      <Headers title="Home" type="main-search" 
      onPressRight={() => navigation.navigate('SearchPage')}/>
    
    <ScrollView style={styles.event} showsVerticalScrollIndicator={false}>
      <View style={styles.kategori}>
        <Kategori
          type="aktif"
          onPress={() => setEvent(tempEvent)}
          pict={require('../../assets/KatSemua.png')}
          title="Semua"
        />
        <Kategori
          onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/KatAktual.png')}
          title="Aktual"
        />
        <Kategori
          onPress={() => filterDataEvent('hobi')}
          pict={require('../../assets/KatAlumni.png')}
          title="Alumni"
        />
        <Kategori
          onPress={() => filterDataEvent('lapak')}
          pict={require('../../assets/KatLapak.png')}
          title="Lapak"
        />
        <Kategori
          onPress={() => filterDataEvent('loker')}
          pict={require('../../assets/KatLoker.png')}
          title="Loker"
        />
      </View>
        
      
      {/* AKTUAL */}
      <View >
        <View style={styles.textSubkat}>
          <Text style={styles.judulKategori}>Aktual</Text>
          <Gap height={12}/>
          <Text style={styles.descKategori}>Berita teraktual seputar kegiatan dan acara yang diadakan IKA Unpad</Text>
        </View>
        <Gap height={24}/> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.Subkat}>
          <SubKategori
          //onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/Ak-Berita.png')}
          title="Berita"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Ak-Acara.png')}
            title="Acara"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Ak-Opini.png')}
            title="Opini"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Ak-Akademis.png')}
            title="Akademis"
          />
          <Gap width={20}/>
        </ScrollView>
      </View>

      {/* ALUMNI */}
      <View >
        <View style={styles.textSubkat}>
          <Text style={styles.judulKategori}>Alumni</Text>
          <Gap height={12}/>
          <Text style={styles.descKategori}>Artikel seputar Alumni Unpad dan Universitas Padjadjaran</Text>
        </View>
        <Gap height={24}/>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.Subkat}>
          <SubKategori
          //onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/Al-Terkini.png')}
          title="Terkini"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Al-Wikialumni.png')}
            title="WikiAlumni"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Al-Berkabar.png')}
            title="Berkabar"
          />
          <Gap width={20}/>
        </ScrollView>
      </View>

      {/* Lapak */}
      <View >
        <View style={styles.textSubkat}>
          <Text style={styles.judulKategori}>Lapak</Text>
          <Gap height={12}/>
          <Text style={styles.descKategori}>Artikel seputar kegiatan bisnis mandiri Alumni Unpad </Text>
        </View>
        <Gap height={24}/> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.Subkat}>
          <SubKategori
          //onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/La-Umkm.png')}
          title="UMKM Center"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/La-Kuliner.png')}
            title="Kuliner"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/La-Bisnis.png')}
            title="Kiat Bisnis"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/La-Merchandise.png')}
            title="Merchandise"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/La-Preloved.png')}
            title="Preloved"
          />
          <Gap width={20}/>
        </ScrollView>
      </View>

      {/* Loker */}
      <View >
        <View style={styles.textSubkat}>
          <Text style={styles.judulKategori}>Loker</Text>
          <Gap height={12}/>
          <Text style={styles.descKategori}>Artikel seputar informasi lowongan kerja baik Internship, Fulltime, dan Freelance</Text>
        </View>
        <Gap height={24}/> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.Subkat}>
          <SubKategori
          //onPress={() => filterDataEvent('umum')}
          pict={require('../../assets/Lo-Internship.png')}
          title="Internship"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Lo-Fulltime.png')}
            title="Fulltime"
          />
          <SubKategori
            //onPress={() => filterDataEvent('umum')}
            pict={require('../../assets/Lo-Freelance.png')}
            title="Freelance"
          />
          <Gap width={20}/>
        </ScrollView>
      </View>
      
        {event.map(item => {
          return (
            <Event
              category={item.category}
              time={moment(item.createdAt).fromNow()}
              title={item.title}
              author={item.author.name}
              onPress={() => navigation.navigate('AlumniDetailBerita', item)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AlumniHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  kategori: {
    flexDirection: 'row',
    marginLeft: 24,
    marginVertical: 24,
  },
  event: {
    backgroundColor: 'white',
  },
  textSubkat: {
    marginLeft: 24,
    marginRight: 20,
  },
  judulKategori: {
    fontSize: 20,
    fontFamily: fonts.primary.semibold,
    color: colors.text.primary,
  },
  descKategori: {
    fontSize: 16,
    fontFamily: fonts.primary.reguler,
    color: colors.text.primary,
  },
  Subkat: {
    paddingLeft: 24,
  },
});
