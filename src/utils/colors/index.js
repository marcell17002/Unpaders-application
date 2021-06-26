const mainColors = {
  blue: '#14B1F5',
  blueLight: '#DDF4FD',
  donker1: '#010080',
  donker2: '#254CA7',
  yellowLight: '#FEBF19',
  grey: '#A5A5A5',
  greyLight: '#787878',
  greylighter: '#BDBDBD',
  greyLightest: '#F2F2F2',
  black: '#4D4D4D',
  black2: '#2E2E2E',
  black3: 'rgba(0,0,0,0.3)',
  white: '#ffffff',
  red: '#CC0C09',
  green: '#27AE60',
};

export const colors = {
  primary: mainColors.blue,
  secondBlue: mainColors.blueLight,
  secondGrey: mainColors.greyLight,
  tertierGrey: mainColors.greylighter,
  primaryWhite: mainColors.white,
  primaryBlack: mainColors.black,
  backgroundgrey: mainColors.greyLightest,
  primarygrey: mainColors.grey,
  secondaryBlack: mainColors.black2,

  text: {
    primary: mainColors.black,
    title: mainColors.black2,
    primaryBlue: mainColors.blue,
    secondary: mainColors.grey,
    tertiary: mainColors.grey,
    quartenary: mainColors.yellowLight,
    primdonker1: mainColors.donker1,
    primdonker2: mainColors.donker2,
    grey: mainColors.greyLightest,
    secondGrey: mainColors.greyLight,
    primaryGreen: mainColors.green,
    primaryRed: mainColors.red,
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
    secondaryOutline: {
      background: mainColors.white,
      blue: mainColors.blue,
    },
    dropdown: {
      passive: mainColors.greyLightest,
      text: mainColors.greyLight,
    },
  },
  input: {
    background: mainColors.white,
    text: mainColors.greyLight,
    outline: mainColors.greylighter,
  },
  loadingBackground: mainColors.black3,
};
