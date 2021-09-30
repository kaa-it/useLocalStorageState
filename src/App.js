import "./styles.css";
import { useState } from "react";

const useLocalStorageState = (key, initialValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStorageValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
  };

  return [storageValue, setValue];
};

export default function App() {
  const [value, setValue] = useLocalStorageState("name", "");

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input name="name" onChange={onChange} value={value} />
    </div>
  );
}
