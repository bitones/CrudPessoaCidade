import { createTheme } from '@mui/material';
import { cyan, pink } from '@mui/material/colors'

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: pink[700],
      dark: pink[800],
      light: pink[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper:'#ffffff',
      default:'#f7f6f3',
    }
  }
})