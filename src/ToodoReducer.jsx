import { createSlice, current } from "@reduxjs/toolkit";

const toodoData = [];
export const toodoSlice = createSlice({
  name: "toodo",
  initialState: toodoData,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      let deleteId = action.payload;
      const findUser = state.find((user) => +user.id === +deleteId);
      if (findUser) {
        return state.filter((item) => item.id != deleteId);
      }
    },
    update: (state, action) => {
      const updateId = action.payload;
      console.log(updateId);
      const findTood = state.find((tood) => +tood.id === +updateId.id);
      console.log(findTood);
      if (findTood) {
        findTood.id = updateId.id;
        findTood.toodoData = updateId.toodoData;
      }
    },
  },
});

export const { addTask, deleteTask, EditTask, update } = toodoSlice.actions;
export default toodoSlice.reducer;
