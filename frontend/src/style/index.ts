const Colors = {
  white: '#fff',
  black: '#000',
  red: '#e00',
  darkRed: '#c00',
  grey: '#777',
  lightGrey: '#eee',
}

const Fonts = {
  text: 'Poppins',
  logo: 'Legothick',
}

const Breakpoints = {
  mobile: 30,
  tablet: 50,
}

const Sizes = {
  xxsmall: 0.25,
  xsmall: 0.5,
  small: 0.75,
  nearlyMedium: 0.9,
  medium: 1,
  large: 2,
  container: 80,
}

const TextSizes = {
  small: Sizes.nearlyMedium,
  medium: Sizes.medium,
}

const Spacing = {
  xsmall: Sizes.xsmall,
  small: Sizes.small,
  medium: Sizes.medium,
  large: Sizes.large,
}

const Rounded = {
  small: Sizes.xxsmall,
  medium: Sizes.medium,
}

export const Variables = {
  colors: {
    ...Colors,
    primary: Colors.red,
    primaryDark: Colors.darkRed,
    secondary: Colors.white,
    text: Colors.black,
    placeHolder: Colors.grey,
    logoText: Colors.white,
    buttonText: Colors.white,
    errorText: Colors.red,
  },
  fonts: { ...Fonts },
  breakpoints: { ...Breakpoints },
  sizes: { ...Sizes },
  textSizes: { ...TextSizes },
  spacing: { ...Spacing },
  rounded: { ...Rounded },
}
