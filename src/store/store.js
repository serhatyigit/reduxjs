import {configureStore} from '@reduxjs/toolkit';
import reducer from './names';

export default function () {
  return configureStore({reducer});
}
