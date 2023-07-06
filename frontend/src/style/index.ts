const Colors = {
    white: '#fff',
    black: '#000',
    red: '#e00',
    darkRed: '#c00',
    yellow: '#fe0',
}
  
const Fonts = {
    text: 'Poppins',
    logo: 'Legothick',
}

const Sizes = {
    medium: 1,
    container: 80,
}
  
const TextSizes = {
    medium: Sizes.medium,
}
  
const Spacing = {
    medium: Sizes.medium,
}
  
const Rounded = {
    medium: Sizes.medium,
}
  
export const Variables = {
    colors: { 
        ...Colors,
        primary: Colors.red,
        primaryDark: Colors.darkRed,
        secondary: Colors.yellow,
        text: Colors.black,
        logoText: Colors.white,
        buttonText: Colors.white,
    },
    fonts: { ...Fonts },
    sizes: { ...Sizes },
    textSizes: { ...TextSizes },
    spacing: { ...Spacing },
    rounded: { ...Rounded },
}