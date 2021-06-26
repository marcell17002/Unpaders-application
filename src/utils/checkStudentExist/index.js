import axios from 'axios';
import {filterData} from '../filterData';

const dataProdi = [
  {prodi: 'Administrasi Publik', prefix: '170104'},
  {prodi: 'Administrasi Bisnis', prefix: '170610'},
  {prodi: 'Agribisnis', prefix: '150610'},
  {prodi: 'Agroteknologi', prefix: '150510'},
  {prodi: 'Aktuaria', prefix: '141010'},
  {prodi: 'Akuntansi', prefix: '120104'},
  {prodi: 'Antropologi', prefix: '170510'},
  {prodi: 'Biologi', prefix: '140410'},
  {prodi: 'Bisnis Digital', prefix: '120510'},
  {prodi: 'Ekonomi Islam', prefix: '120410'},
  {prodi: 'Ekonomi Pembangunan', prefix: '120210'},
  {prodi: 'Farmasi', prefix: 'F. Farmasi'},
  {prodi: 'Fisika', prefix: '140310'},
  {prodi: 'Geofisika', prefix: '140710'},
  {prodi: 'Geologi', prefix: '270110'},
  {prodi: 'Hubungan Internasional', prefix: '170210'},
  {prodi: 'Hubungan Masyarakat', prefix: '210310'},
  {prodi: 'Hukum', prefix: '110110'},
  {prodi: 'Ilmu Kelautan', prefix: '230210'},
  {prodi: 'Ilmu Komunikasi', prefix: '210110'},
  {prodi: 'Ilmu Pemerintahan', prefix: '170410'},
  {prodi: 'Ilmu Politik', prefix: '170810'},
  {prodi: 'Ilmu Sejarah', prefix: '180310'},
  {prodi: 'Jurnalistik', prefix: '210610'},
  {prodi: 'Kedokteran', prefix: '130110'},
  {prodi: 'Kedokteran Gigi', prefix: '160110'},
  {prodi: 'Kedokteran Hewan', prefix: '130210'},
  {prodi: 'Keperawatan', prefix: '220110'},
  {prodi: 'Kesejahteraan Sosial', prefix: '170310'},
  {prodi: 'Kimia', prefix: '140210'},
  {prodi: 'Manajemen', prefix: '120310'},
  {prodi: 'Manajemen Komunikasi', prefix: '210510'},
  {prodi: 'Matematika', prefix: '140110'},
  {prodi: 'Perikanan', prefix: '230110'},
  {prodi: 'Perpustakaan', prefix: '210210'},
  {prodi: 'Peternakan', prefix: 'F. Peternakan'},
  {prodi: 'Psikologi', prefix: 'F. Psikologi'},
  {prodi: 'Sastra Arab', prefix: '180910'},
  {prodi: 'Sastra Indonesia', prefix: '180110'},
  {prodi: 'Sastra Inggris', prefix: '180410'},
  {prodi: 'Sastra Jepang', prefix: '180610'},
  {prodi: 'Sastra Jerman', prefix: '180810'},
  {prodi: 'Sastra Perancis', prefix: '180510'},
  {prodi: 'Sastra Rusia', prefix: '180710'},
  {prodi: 'Sastra Sunda', prefix: '180210'},
  {prodi: 'Statistika', prefix: '140610'},
  {prodi: 'Sosiologi', prefix: '170710'},
  {prodi: 'Teknik Elektro', prefix: '140910'},
  {prodi: 'Teknik Informatika', prefix: '140810'},
  {prodi: 'Teknik Pertanian', prefix: '240110'},
  {prodi: 'Teknologi Pangan', prefix: '240210'},
  {prodi: 'Televisi dan Film', prefix: '210410'},
  {prodi: 'T. Industri Pertanian', prefix: '240310'},
];
export default checkStudentExist = async (prodi, level, nim) => {
  var filteredData = await filterData(dataProdi, 'prodi', prodi);
  var prefix = filteredData[0].prefix;
  const promise = new Promise(async (resolve, reject) => {
    await axios
      .get(
        `https://media.unpad.ac.id/photo/mahasiswa/${prefix}/${level}/${nim}.JPG`,
      )
      .then(
        res => resolve({message: 'Terverifikasi Mahasiswa Unpad'}),
        err =>
          reject({message: 'Oops, Sepertinya Anda Bukan Mahasiswa Unpad?'}),
      );
  });
  return promise;
};
