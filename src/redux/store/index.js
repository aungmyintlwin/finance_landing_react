// lib
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

//custom
import appStateReducer from '../reducer/appState';
import userReducer from '../reducer/userSlice';


const appReducer = combineReducers({
  app: appStateReducer,
  user: userReducer
});



const middlewares = [
  /* other middlewares */
];

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});
export default store;