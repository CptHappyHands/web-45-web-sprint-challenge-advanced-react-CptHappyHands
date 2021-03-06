// write your custom hook here to control your checkout form
import { useState } from "react";

const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
    localStorage.setItem(key, JSON.stringify(initValue));
    return initValue;
  });

  const setLocalStorageValue = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [value, setLocalStorageValue];
};

export const useForm = (initValues) => {
  const [values, setValues] = useLocalStorage("form", initValues);

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
};
