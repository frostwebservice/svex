import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        // extraArgument: myCustomApiService
      }
    }),
  devTools: true
});

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();
