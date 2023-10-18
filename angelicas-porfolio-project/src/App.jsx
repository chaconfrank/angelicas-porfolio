import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'


const darkTheme = createTheme({
  palette:{
    mode: 'dark',
  }
})

const lightTheme = createTheme();


export default function App() {

  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const selectedTheme = systemDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
  );
}