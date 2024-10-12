import { useState } from "react";
import styles from "./App.module.css";
import styles_btn from "./Button.module.css";
function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("render");
  return (
    <div>
      <h1 className={styles.title}> {counter}</h1>
      <button className={styles_btn.btn} onClick={onClick}>
        Click Me
      </button>
    </div>
  );
}
export default App;
