import { configureStore } from '@reduxjs/toolkit'
import WriteAnythingRelevantToReducer from '../redux/InfoSlice'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'write-anything-relevant-to-app',
    storage,
}

const persistedReducer = persistReducer(persistConfig, WriteAnythingRelevantToReducer)

export const store = configureStore({
    reducer: {
        value: persistedReducer,
    },
  })
  
export const persistor = persistStore(store)