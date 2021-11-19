import { useEffect, useReducer, useRef } from "react";

export function MyComponent() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "start":
        return { ...state, isRunning: true };
      case "stop":
        return { ...state, isRunning: false };
      case "tick":
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);
  const idRef = useRef(0);

  useEffect(() => {
    if (!state.isRunning) {
      return;
    }
    idRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);

  return (
    <div>
      {state.time}s
      <button onClick={() => dispatch({ type: "start" })}>Start</button>
      <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}
