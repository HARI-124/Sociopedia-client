import '@/styles/globals.css'
import { useState,createContext } from 'react'
// import authReducer from "../state/index.js";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/integration/react";

// const persistConfig = { key: "root", storage, version: 1 };
// const persistedReducer = persistReducer(persistConfig, authReducer);
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });



export default function App({ Component, pageProps }) {

  return (
    <>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}> */}
          <Component {...pageProps} />
      {/* </PersistGate>
    </Provider> */}

    </>
    
  )
  
  
}
