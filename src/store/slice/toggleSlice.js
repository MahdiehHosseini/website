import { createSlice } from '@reduxjs/toolkit'

const themes = {
  light: {
    mainBg: '#ffffff',
    mainTxt: '#000000',
    subTxt: '#a3a3a3',
    subBorder: '#e5e5e5',
    name: 'light',
  },
  dark: {
    mainBg: '#1a1a1a',
    mainTxt: '#ffffff',
    subTxt: '#525252',
    subBorder: '#262626',
    name: 'dark',
  },
}

const initialState = {
  them: themes.light,
  lang: 'EN',
}

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleMode: (state, actions) => {
      state.them = actions.payload === 'dark' ? themes.dark : themes.light
    },
    toggleLang: (state, actions) => {
      state.lang = actions.payload
    },
  },
})

export const { toggleMode, toggleLang } = toggleSlice.actions
export default toggleSlice.reducer
