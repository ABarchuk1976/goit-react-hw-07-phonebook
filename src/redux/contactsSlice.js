import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  toast(action.payload);
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // Oldschool vertion
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.rejected]: handleRejected,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [addContact.pending]: handlePending,
  //   [addContact.rejected]: handleRejected,
  //   [addContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items.unshift(action.payload);
  //   },
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.rejected]: handleRejected,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = state.items.filter(({ id }) => id !== action.payload.id);
  //   },
  // },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(({ id }) => id !== action.payload.id);
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
