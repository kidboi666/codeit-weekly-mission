/* eslint-disable no-param-reassign */
import { Link } from '@/src/types'
import { createSlice } from '@reduxjs/toolkit'
import {
  getLinkList,
  postLink,
  deleteLink,
  putFavoriteLink,
  getAllLinkList,
} from '@/src/services/link'
import { API_MSG } from '@/src/constants/strings'

interface Props {
  data: Link[]
  status: string
}

const initialState: Props = {
  data: [],
  status: '',
}

const linkSlice = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLinkList.pending, (state) => {
        state.status = API_MSG.PEN
      })
      .addCase(getLinkList.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = API_MSG.FUL
      })
      .addCase(getLinkList.rejected, (state) => {
        state.status = API_MSG.REJ
      })
      .addCase(getAllLinkList.pending, (state) => {
        state.status = API_MSG.PEN
      })
      .addCase(getAllLinkList.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = API_MSG.FUL
      })
      .addCase(getAllLinkList.rejected, (state) => {
        state.status = API_MSG.REJ
      })
      .addCase(postLink.pending, (state) => {
        state.status = API_MSG.PEN
      })
      .addCase(postLink.fulfilled, (state) => {
        state.status = API_MSG.FUL
      })
      .addCase(postLink.rejected, (state) => {
        state.status = API_MSG.REJ
      })
      .addCase(deleteLink.pending, (state) => {
        state.status = API_MSG.PEN
      })
      .addCase(deleteLink.fulfilled, (state) => {
        state.status = API_MSG.FUL
      })
      .addCase(deleteLink.rejected, (state) => {
        state.status = API_MSG.REJ
      })
      .addCase(putFavoriteLink.pending, (state) => {
        state.status = API_MSG.PEN
      })
      .addCase(putFavoriteLink.fulfilled, (state) => {
        state.status = API_MSG.FUL
      })
      .addCase(putFavoriteLink.rejected, (state) => {
        state.status = API_MSG.REJ
      })
  },
})

export default linkSlice.reducer
