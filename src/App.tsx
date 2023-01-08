import React from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MyRoutes from './routers';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyRoutes />
    </ThemeProvider>
  );
}

export default App;
