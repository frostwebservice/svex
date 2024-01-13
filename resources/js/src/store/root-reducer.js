import { combineReducers } from '@reduxjs/toolkit';
import { reducer as calendarReducer } from '@/slices/calendar';
import { reducer as chatReducer } from '@/slices/chat';
import { reducer as kanbanReducer } from '@/slices/kanban';
import { reducer as mailReducer } from '@/slices/mail';
import profileReducer from '../reducers/profile';
import billinginfoReducer from '../reducers/billinginfo';
import searchReducer from '../reducers/search';
import onsearchReducer from '../reducers/onsearch';
import outreachReducer from '../reducers/getoutreachs';
import runsaveReducer from '../reducers/runsave.jsx';
import favReducer from '../reducers/fav.jsx';
import jobReducer from '../reducers/job.jsx';
import jobsReducer from '../reducers/jobs.jsx';
export const rootReducer = combineReducers({
  calendar: calendarReducer,
  chat: chatReducer,
  kanban: kanbanReducer,
  mail: mailReducer,
  profile: profileReducer,
  billinginfo: billinginfoReducer,
  searchs: searchReducer,
  runsavestate: runsaveReducer,
  searchresult: onsearchReducer,
  favs: favReducer,
  outreachs:outreachReducer,
  job:jobReducer,
  jobs:jobsReducer,
});
