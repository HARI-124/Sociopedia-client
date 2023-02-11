import '@/styles/globals.css'
import { Provider } from 'react-redux'
import store from '@/state'
import { createTheme } from "@mui/material/styles";
import { themeSettings } from '@/theme';
import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
export default function App({ Component, pageProps }) {
  
  const theme = useMemo(() => createTheme(themeSettings("light")), ["light"]);
  
  return (
    <>
    
        <Provider store={store}>
        <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
        </Provider>
       
    </>
    
  )
  
  
}
