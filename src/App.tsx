import { useEffect } from "react";
import "./App.css";
import { useIsMounted } from "./hooks/useIsMounted";
import { useNumber } from "./hooks/useNumber";

export function App() {
  const [count, setCount] = useNumber(20);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      console.log("mounted component");
    }
  }, [isMounted]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>run</button>
    </div>
  );
}
