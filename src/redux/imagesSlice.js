import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  images: [],
  authorImages: [],
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    addImages: (state, action) => {
      state.images = [...state.images, action.payload];
    },
    addAuthorImages: (state, {payload}) => {
      return {
        ...state,
        authorImages : payload,
      };
    },
  },
});

export const {addImages, addAuthorImages} = imagesSlice.actions;

const imagesReducer = imagesSlice.reducer;

export default imagesReducer;
