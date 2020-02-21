import React from "react";
import ReactDOM from "react-dom";

// Styling
import "./index.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import App from "./components/App";

// Services
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

// Reducer
import { rootReducer } from './reducers/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
