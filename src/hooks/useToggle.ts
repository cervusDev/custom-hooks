import { useReducer } from "react";

/**
 * a fim de reduzir a manipulação de estados por parte da 
 * arvore de renderização, utilizamos o useReducer, que embora
 * possua uma estrutura distinta de usecallback, quanto a 
 * renderização tem a mesma finalidade performando ainda melhor 
 * 
 * @param initialValue 
 * @returns boolean
 */

export const useToggle = (initialValue: boolean) =>
  useReducer((prevState: boolean) => !prevState, initialValue);
