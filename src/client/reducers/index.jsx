import {combineReducers} from "redux";
import {i18nReducer} from "react-redux-i18n";
import {config} from "./config/config-reducer";
import {creationState} from "./creation/creation-reducer";
import {loginState} from "./login/login-reducer";
import {amountState} from "./amount/amount-reducer";
import {reducer as formReducer} from "redux-form";
import {sendTransactionState} from "./sent-transaction/sent-transaction-reducer";
import {receiveState} from "./receive/receive-reducer";
import {ROUTE_URLS} from "../routes";
import {initialState} from "../initial-state";
import {browserHistory} from "react-router";

const appReducer = combineReducers({
  i18n: i18nReducer,
  creationState,
  loginState,
  amountState,
  config,
  form: formReducer,
  sendTransactionState,
  receiveState
});

export default (store, action) => {
  switch (action.type) {
    case "LOGOUT_ACTION":
      if (typeof window !== "undefined") {
        browserHistory.push(ROUTE_URLS.HOME_PAGE);
      }
      return {
        ...store,
        creationState: initialState.creationState,
        loginState: initialState.loginState,
        amountState: initialState.amountState,
        sendTransactionState: initialState.sendTransactionState,
        receiveState: initialState.receiveState
      };
  }
  return appReducer(store, action);
};
