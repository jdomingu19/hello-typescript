// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/hooks/useNewSubscriberForm.tsx

// 1. Import useReducer hook and SubscriberInterface type
import { useReducer } from "react";
import { SubscriberInterface } from "../types";

// 2. Define initial state for subscriber form inputs
const INITIAL_STATE = {
  nick: "",
  subscriptionMonths: 0,
  avatar: "",
  description: "",
};

// 3. Interface describing form state structure
interface FormStateInterface {
  inputValues: SubscriberInterface;
}

// 4. Define reducer action types for handling input changes and clearing form
type FormReducerActionType =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | { type: "clear" };

// 5. Reducer function to update form state based on dispatched actions
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

    // 6. Default case returns current state if action type is not recognized
    default:
      return state;
  }
};

// 7. Custom hook to manage subscriber form state using useReducer
const useNewSubscriberForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

// 8. Export custom hook as default
export default useNewSubscriberForm;

// 9. Alternative implementation with clearForm helper using useCallback
// const useNewSubscriberForm = () => {
//   const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE);

//   const clearForm = useCallback(() => dispatch({ type: "clear" }), []);

//   return {
//     formState: inputValues,
//     clearForm,
//   };
// };
