import { useReducer } from "react";

type AnyObject = Record<string, unknown>;

type StateAction<S> =
  | Partial<Record<keyof S, S[keyof S]>>
  | import("react").ReducerStateWithoutAction<S>;

export const useRecordState = <T extends AnyObject>(initialState: T) => {
  return useReducer((prev: T, action: StateAction<T>) => {
    if (typeof action === "function") {
      return {
        ...prev,
        ...action(prev),
      };
    }

    const hasUpdate = Object.entries(action).some(
      ([key, value]) => prev[key] !== value
    );

    return hasUpdate ? { ...prev, ...action } : prev;
  }, initialState);
};

type Payload = {
  name: string;
  age?: number;
  state: string;
};

export const App = () => {
  const [payload, setPayload] = useRecordState<Payload>({
    name: "",
    age: undefined,
    state: "",
  });

  //retorna um erro por conta da validação do generic
  // con st [fail, setFail] = useRecordState("failed");

  setPayload({
    name: "levir",
    age: 22,
  });

  setPayload((prev) => {
    return {
      ...prev,
      name: "levir",
      age: 22,
      state: prev.name === "luke" ? "São Paulo" : "Manaus",
    };
  });
};
