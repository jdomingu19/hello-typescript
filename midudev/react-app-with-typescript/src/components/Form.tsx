// Hello, TypeScript! @jdomingu19
// React & TypeScript App by @midudev (2022)
// src/Components/Form.tsx

// . ?
import { useState } from "react";
import { SubscriberInterface } from "../types";

// . ?
interface FormStateInterface {
  inputValues: SubscriberInterface;
}

// . ?
interface FormPropsInterface {
  onNewSubscriber: () => {};
}

// . ?
const Form = ({ onNewSubscriber }: FormPropsInterface) => {
  // . ?
  const [inputValues, setInputValues] = useState<
    FormStateInterface["inputValues"]
  >({
    nick: "",
    subscriptionMonths: 0,
    avatar: "",
    description: "",
  });

  // . ?
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  // . ?
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
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
        <button>Save new sub!</button>
      </form>
    </div>
  );
};

// . ?
export default Form;
