import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Home } from './Home';
import './index.css'


const darkTheme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
  palette: {
  mode: 'dark',
}
})

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif',
  },
});


export function App() {

  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const selectedTheme = systemDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <Home></Home>
    </ThemeProvider>
  );
}