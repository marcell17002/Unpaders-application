const mainColors = {
  blue: '#14B1F5', //biru
  blueLight: '#DDF4FD', //biru muda
  donker1: '#010080', //donker tua
  donker2: '#254CA7', //donker agak muda
  yellow: '#FFB900', //menu
  yellowLight: '#FEBF19', //kuning
  grey: '#A5A5A5', //Abu2
  greyLight: '#787878', //U-Tulisan, Abu1
  greylighter: '#BDBDBD',
  greyLightest: '#F2F2F2',
  greyLightBox: '#C4C4C4', //warna box shadow
  black: '#4D4D4D', //warna tulisan
  black1: 'rgba(0,0,0,0.3)',
  black2: '#2E2E2E', //warna tulisan
  white: '#ffffff', //white
  red: '#CC0C09',
  green: '#27AE60',
};

export const colors = {
  primary: mainColors.blue,
  secondBlue: mainColors.blueLight,
  secondary: mainColors.yellow,
  primaryWhite: mainColors.white,
  primaryBlack: mainColors.black,
  primaryBlack1: mainColors.black2,
  backgroundgrey: mainColors.greyLightest,
  primarygrey: mainColors.grey,
  secondGrey: mainColors.greyLight,

  text: {
    primary: mainColors.black, //warna tulisan
    title: mainColors.black2, //warna tulisan lebih bold
    primaryBlue: mainColors.blue,
    secondary: mainColors.grey,
    tertiary: mainColors.grey, //tulisan abu
    quartenary: mainColors.yellowLight,
    primdonker1: mainColors.donker1,
    primdonker2: mainColors.donker2,
    grey: mainColors.greyLightest,
    primaryWhite: mainColors.primaryWhite,
    secondGrey: mainColors.greyLight,
    primaryGreen: mainColors.green,
    primaryRed: mainColors.red,
  },
  boxShadow: {
    primary: mainColors.greyLightBox,
  },
  button: {
    primary: {
      background: mainColors.blue,
      text: mainColors.white,
    },
    primaryOutline: {
      background: mainColors.white,
      text: mainColors.blue,
      outline: mainColors.blue,
    },
    secondary: {
      background: mainColors.yellow,
      text: mainColors.white,
    },
    secondaryOutline: {
      background: mainColors.white,
      text: mainColors.black,
      outline: mainColors.yellowLight,
      blue: mainColors.blue,
    },
    dropdown: {
      passive: mainColors.greyLightest,
      active: mainColors.blue,
      text: mainColors.greyLight,
      outline: mainColors.greylighter,
    },
  },
  input: {
    background: mainColors.white,
    text: mainColors.greyLight,
    outline: mainColors.greylighter,
  },
  notifications: {
    success: {
      background: mainColors.green,
      text: mainColors.white,
    },
    warning: {
      background: mainColors.yellow,
      text: mainColors.white,
    },
    error: {
      background: mainColors.red,
      text: mainColors.white,
    },
  },
};
