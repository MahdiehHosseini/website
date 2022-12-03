import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    them : {mainBgColor : 'white' , mainTxtColor : 'black' , subTxtColor : 'neutral-400' , subBorderColor : 'neutral-200'},
    lang : 'EN'
}
export const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleMode : (state , actions)=>{
        actions.payload === 'dark' ?
        state.them = {mainBgColor : 'light-black' , mainTxtColor : 'white' , subTxtColor : 'neutral-600' , subBorderColor : 'neutral-800'} :
        state.them = {mainBgColor : 'white' , mainTxtColor : 'black' , subTxtColor : 'neutral-400' , subBorderColor : 'neutral-200'}
    },toggleLang : (state , actions)=>{
        state.lang = actions.payload
    }
  },
})

export const { toggleMode,toggleLang } = toggleSlice.actions
export default toggleSlice.reducer