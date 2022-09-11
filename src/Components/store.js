import { configureStore } from '@reduxjs/toolkit';
import CounterSLice from './CounterSLice';

 const store=configureStore({
    reducer:{
      'count':CounterSLice,
    }

 })
  export default store