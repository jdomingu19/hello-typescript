// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/components/Form.tsx

// 1. Import subscriber type and custom form hook
import { SubscriberInterface } from "../types";
import useNewSubscriberForm from "../hooks/useNewSubscriberForm";

// 2. Define props interface for Form component
interface FormPropsInterface {
  // onNewSubscriber: React.Dispatch<React.SetStateAction<SubscriberInterface[]>>;
  onNewSubscriber: (newSubscriber: SubscriberInterface) => void;
}

// 3. Form component definition
const Form = ({ onNewSubscriber }: FormPropsInterface) => {
  // 4. Example of using useState for form values before refactor
  // const [inputValues, setInputValues] =
  //   useState<FormStateInterface["inputValues"]>(INITIAL_STATE);

  // 5. Example of incorrect tuple destructuring from custom hook
  // Error:  Tuple type '[SubscriberInterface, ActionDispatch<[action: FormReducerActionType]>]' of length '2' has no element at index '2'.
  // const [inputValues, dispatch, abc] = useNewSubscriberForm();

  // 6. Initialize form state and reducer dispatcher from custom hook
  const [inputValues, dispatch] = useNewSubscriberForm();

  // 7. Handle form submission, add new subscriber and clear inputs
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSubscriber(inputValues);
    handleClear();
    // dispatch({
    //   type: "clear",
    // });
  };

  // 8. Handle input changes and dispatch reducer action
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    dispatch({
      // 9. Example of invalid action type assignment
      // Error: Type '"abc"' is not assignable to type '"change_value" | "clear"'.
      // type: "abc",
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
    // setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  // 10. Handle clearing form inputs by dispatching clear action
  const handleClear = () => {
    dispatch({
      type: "clear",
    });
    // setInputValues(INITIAL_STATE);
  };

  // 11. Render form layout with controlled inputs and buttons
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* 12. Example of inline input change handler before refactor */}
        {/* <input
          onChange={(event) => {
            setInputValues({
              ...inputValues,
              [event.target.name]: event.target.value,
            });
          }}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        /> */}
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.subscriptionMonths}
          type="text"
          name="subscriptionMonths"
          placeholder="subscriptionMonths"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          Clear the Form
        </button>
        <button type="submit">Save New Subscriber!</button>
      </form>
    </div>
  );
};

// 13. Export Form component as default
export default Form;
