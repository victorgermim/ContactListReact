import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 1, name: 'Victor Prado', phone: '4002-8922', email: 'vitgermim@gmail.com' },

  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });
    },
    removeContact: (state, action) => {
      state.list = state.list.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const index = state.list.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = { ...state.list[index], ...action.payload };
      }
    },
  },
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
