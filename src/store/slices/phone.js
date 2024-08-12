import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    data: [],
  },
  reducers: {
    removePhone(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    createPhone(state, action) {
      const newTodo = {
        ...action.payload,
        id: uuidv4(),
      };
      state.data.push(newTodo);
    },
    editPhone(state, action) {
      const { id, updatedData } = action.payload;
      const index = state.data.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.data[index] = {
          ...state.data[index],
          ...updatedData,
        };
      }
    },
  },
});
export const selectPhones = (state) => state.phone.data;
export const { createPhone, editPhone, removePhone } = phoneSlice.actions;
export default phoneSlice.reducer;
