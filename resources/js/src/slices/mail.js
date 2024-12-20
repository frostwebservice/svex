import { createSlice } from '@reduxjs/toolkit';
import { objFromArrayMail } from '@/utils/obj-from-array-mail';

const initialState = {
  emails: {
    byId: {},
    allIds: []
  },
  cntemails: {
    byId: {},
    allIds: []
  },
  tmpmails: [],
  labels: []
};

const reducers = {
  getLabels(state, action) {
    state.labels = action.payload;
  },
  getEmails(state, action) {
    const emails = action.payload;

    state.emails.byId = objFromArrayMail(emails);
    state.emails.allIds = Object.keys(state.emails.byId);
  },
  getCntEmails(state, action) {
    const cntemails = action.payload;
    state.cntemails.byId = objFromArrayMail(cntemails);
    state.cntemails.allIds = Object.keys(state.cntemails.byId);
  },
  getTmpEmails(state, action) {
    const tmpemails = action.payload;
    state.tmpmails = tmpemails;
  },
  getEmail(state, action) {
    const email = action.payload;

    state.emails.byId[email.id] = email;

    if (!state.emails.allIds.includes(email.id)) {
      state.emails.allIds.push(email.id);
    }
  }
};

export const slice = createSlice({
  name: 'mail',
  initialState,
  reducers
});

export const { reducer } = slice;
