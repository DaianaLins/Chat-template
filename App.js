import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components'
import themes from './src/themes'
import { SettingsProvider } from './src/context/SettingsContext';

export default function App() {
  const deviceTheme = useColorScheme()
  const theme = themes[deviceTheme] || theme.dark
  // para ver modo dark theme={themes.dark}
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        {/* backgroundColor aqui */}
        <StatusBar barStyle="light-content" />
        <SettingsProvider>
          <Routes />
        </SettingsProvider>

      </NavigationContainer>
    </ThemeProvider>
  );
}
registerRootComponent(App);
