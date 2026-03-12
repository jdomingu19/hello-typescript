// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/components/Form.tsx

// . ?
import { SubscriberInterface } from "../types";
import useNewSubscriberForm from "../hooks/useNewSubscriberForm";

// . ?
interface FormPropsInterface {
  // onNewSubscriber: React.Dispatch<React.SetStateAction<SubscriberInterface[]>>;
  onNewSubscriber: (newSubscriber: SubscriberInterface) => void;
}

// . ?
const Form = ({ onNewSubscriber }: FormPropsInterface) => {
  // . ?
  // const [inputValues, setInputValues] =
  //   useState<FormStateInterface["inputValues"]>(INITIAL_STATE);

  // . ?
  // Error:  Tuple type '[SubscriberInterface, ActionDispatch<[action: FormReducerActionType]>]' of length '2' has no element at index '2'.
  // const [inputValues, dispatch, abc] = useNewSubscriberForm();

  // . ?
  const [inputValues, dispatch] = useNewSubscriberForm();

  // . ?
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSubscriber(inputValues);
    handleClear();
    // dispatch({
    //   type: "clear",
    // });
  };

  // . ?
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    dispatch({
      // . ?
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

  // . ?
  const handleClear = () => {
    dispatch({
      type: "clear",
    });
    // setInputValues(INITIAL_STATE);
  };

  // . ?
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* . ? */}
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

// . ?
export default Form;
