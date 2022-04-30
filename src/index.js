
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
