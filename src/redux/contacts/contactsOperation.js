import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';


axios.defaults.baseURL = 'https://63bd44e2d6600623889fa9fb.mockapi.io';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `/contacts`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone, id }, thunkAPI) => {
    try {
      const response = await axios.post(
        `/contacts`,
        { name, phone, id: nanoid() }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `/contacts/${id}`

      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
