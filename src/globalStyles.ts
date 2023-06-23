import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    800: '#0e2420',
    500: '#2cb59b',
    300: '#27CC7F',
    200: '#E2FFFA',
    100: '#F7FCFC'
  },
  brandRed: {
    50: '#F6E0DF',
    100: '#FFE4E3',
    200: '#C26D67',
    400: '#B5353C',
    500: '#692004'
  },
  brandYellow: {
    100: '#FFF9E4',
    200: '#C2A442'
  },
  brandOrange: {
    300: '#B57522',
    400: '#B5512B'
  },
  brandBlue: {
    50: '#F6FDFE',
    100: '#DCF2FE',
    200: '#D3F7FB',
    400: '#258AC2',
    500: '#27BDCC',
    600: '#20A1E8'
  },
  brandPurple: {
    200: '#dfc7ff',
    400: '#BC8CBD',
    500: '#703EB5'
  },
  brandGray: {
    50: '#F5F8F7',
    80: '#E4E4E4',
    100: '#DFECE9',
    200: '#B6C0BE',
    400: '#9BA1A0',
    500: '#5B5B5B'
  },
  transparentWhite: {
    200: '#ffffffea',
    300: '#ffffffbb'
  }
};

const theme = extendTheme({
  fonts: {
    heading: `'Nunito', sans-serif`,
    body: `'Nunito', sans-serif`
  },
  colors
});

export default theme;
