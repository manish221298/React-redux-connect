// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { Provider } from 'react-redux';
// import configStore from './store/configStore';

// const store = configStore()

// store.subscribe(() => {
//   console.log("data", store.getState())
// })

// //console.log("store", store)

// const jsx = (
//   <Provider store = {store}>
//   <App />
//   </Provider>
// )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     jsx,
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./configStore/store";
const store = configureStore();

const data = store.getState()

console.log("redux initial state", data);

store.subscribe(() => {
  console.log("store updated", store.getState());
});

const jsx = (
  <Provider store={store}>
    
    <App data={data}/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
