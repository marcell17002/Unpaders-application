export const getTime = date => {
  const hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const getDateName = (date, less) => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateParsed = new Date(date);
  const dayName = days[dateParsed.getDay()];
  const monthName = months[dateParsed.getMonth()];

  const timeParse = date.split('T');
  const timeParsed = timeParse[0];
  const time = dateParsed.getHours();
  const minutes = dateParsed.getMinutes();

  const year = timeParsed.split('-')[0];
  const newDate = timeParsed.split('-')[2];
  if (less) {
    return `${dayName}, ${newDate} ${monthName} ${year}`;
  } else {
    return `${dayName}, ${newDate} ${monthName} ${year} ${time}:${minutes} `;
  }
};
