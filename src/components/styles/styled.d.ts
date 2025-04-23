import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        dark: string,
        light: string,
        background: string,
        text: string,
      },
      fonts: {
          heading: string,
          main: string,
      },
      fontSizes: {
        big: string,
        mid: string,
        sm: string
      },
      borderRadius: string
  }
}
