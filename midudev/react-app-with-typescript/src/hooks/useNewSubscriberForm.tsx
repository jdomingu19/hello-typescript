// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/hooks/useNewSubscriberForm.tsx

// . ?
import { useReducer } from "react";
import { SubscriberInterface } from "../types";

// . ?
const INITIAL_STATE = {
  nick: "",
  subscriptionMonths: 0,
  avatar: "",
  description: "",
};

// . ?
interface FormStateInterface {
  inputValues: SubscriberInterface;
}

// . ?
type FormReducerActionType =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | { type: "clear" };

// . ?
const formReducer = (
  state: FormStateInterface["inputValues"],
  action: FormReducerActionType,
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;

    // optional
    default:
      return state;
  }
};

//  . ?
const useNewSubscriberForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

// . ?
export default useNewSubscriberForm;
