const mainColors = {
  blue: '#14B1F5', //biru
  yellow: '#FFB900', //menu
  yellowLight: '#FEBF19', //kuning
  grey: '#A5A5A5', //Abu2
  greyLight: '#787878', //U-Tulisan, Abu1
  greylighter: '#BDBDBD',
  greyLightest: '#F2F2F2',
  black: '#000000', //black
  white: '#ffffff', //white
  red: '#F84F31',
  green: '#23C552',
};

export const colors = {
  primary: mainColors.blue,
  secondary: mainColors.yellow,
  primaryWhite: mainColors.white,

  text: {
    primary: mainColors.black,
    primaryBlue: mainColors.blue,
    secondary: mainColors.grey,
    tertiary: mainColors.greyLight,
    quartenary: mainColors.yellowLight,
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
    },
    dropdown: {
      background: mainColors.greyLightest,
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
