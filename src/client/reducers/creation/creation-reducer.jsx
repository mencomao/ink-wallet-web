/* eslint-disable max-len */
// @flow
import type {CreationState} from "../../initial-state";
import {initialState} from "../../initial-state";
import type {CreateWalletAction} from "../../actions/creation-actions";
import {STEPS} from "../../actions/creation-actions";

export const creationState = (store: CreationState = initialState.creationState, action: CreateWalletAction): CreationState => {
  switch (action.type) {
    case "RESET_CREATION_ACTION":
      return {
        ...store,
        step: STEPS.FIRST,
        inputRepeatPassword: "",
        inputPassword: "",
        mnemonic: {},
        password: "",
        areInputPasswordsEqual: false,
        arePasswordsValid: true,
        isAgreed: false
      };
    case "SET_INPUT_PASSWORD_ACTION":
      return {
        ...store,
        inputPassword: action.inputPassword
      };
    case "SET_INPUT_REPEAT_PASSWORD_ACTION":
      return {
        ...store,
        inputRepeatPassword: action.inputRepeatPassword
      };
    case "SET_AGREED_ACTION":
      return {
        ...store,
        isAgreed: action.isAgreed
      };
    case "SET_PASSWORD_CREATION_ERROR_ACTION":
      return {
        ...store,
        areInputPasswordsEqual: action.areInputPasswordsEqual,
        arePasswordsValid: action.arePasswordsValid
      };
    case "COMMIT_PASSWORD_CREATION_ACTION":
      return {
        ...store,
        password: store.inputPassword,
        step: STEPS.SECOND,
        mnemonic: action.mnemonic,
        hdPrivateKey: action.hdPrivateKey,
        privateKey: action.privateKey,
        address: action.address
      };
    case "COMMIT_ADDRESS_ACTION": {
      return {
        ...store,
        step: STEPS.THIRD
      };
    }
    default:
      return store;
  }
};