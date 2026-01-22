import { BaseSyntheticEvent, useState } from "react";
import { FormProps } from "../models/app.models";

function Form(props: FormProps) {
  const [name, setName] = useState<string>("");

  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();
    if (name) {
      props.addTask(name);
      setName(""); // This will now clear the input
    }
  }

  function handleChange(event: BaseSyntheticEvent) {
    setName(event.target.value);
  }

  return (
    <form
      className="p-6 rounded-lg bg-stone-100 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <label htmlFor="new-todo-input" className="text-lg text-center">
        What needs to be done?
      </label>
      <input
        type="text"
        id="new-todo-input"
        className="input input-lg"
        value={name}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit" disabled={!name} className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

export default Form;
