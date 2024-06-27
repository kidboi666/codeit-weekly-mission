/* eslint-disable no-param-reassign,prefer-destructuring */
import { createSlice } from '@reduxjs/toolkit'
import { COMBINED_FOLDER_NAME } from '@/src/constants/strings'

const initialState = {
  currentFolder: {
    id: 0,
    name: '',
  },
}

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setCurrentFolder: (state, action) => {
      state.currentFolder.id = action.payload?.id
      state.currentFolder.name = action.payload?.name
    },
    initCurrentFolder: (state) => {
      state.currentFolder.id = 0
      state.currentFolder.name = COMBINED_FOLDER_NAME
    },
  },
})

export const { setCurrentFolder, initCurrentFolder } = folderSlice.actions

export default folderSlice.reducer
