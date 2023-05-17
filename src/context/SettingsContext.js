import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const SettingsContext = createContext({})

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const [color, setColor] = useState('#1976D2')
  const themeKey = `@callon:themegeneral`
  const colorKey = `@callon:colorgeneral`

  const handleChangeTheme = async (value) => {
    setTheme(value)

    try {
      await AsyncStorage.setItem(themeKey, JSON.stringify(value))
    } catch (err) {
      console.log(err)
      Alert.alert('Não foi possível salvar as informações')
    }
  }

  const handleChangeColor = async (value) => {
    setColor(value)

    try {
      await AsyncStorage.setItem(colorKey, JSON.stringify(value))
    } catch (err) {
      console.log(err)
      Alert.alert('Não foi possível salvar as informações')
    }
  }

  async function loadTheme() {
    const themeVar = await AsyncStorage.getItem(themeKey)
    if (themeVar) {
      setTheme(JSON.parse(themeVar))
    }
  }

  async function loadColor() {
    const colorVar = await AsyncStorage.getItem(colorKey)
    if (colorVar) {
      setColor(JSON.parse(colorVar))
    }
  }

  useEffect(() => {
    loadTheme()
  }, [, theme])

  useEffect(() => {
    loadColor()
  }, [, color])

  return (
    <SettingsContext.Provider value={{
      theme,
      color,
      handleChangeTheme,
      handleChangeColor,
      loadTheme
    }}
    >
      {children}
    </SettingsContext.Provider>
  )
}