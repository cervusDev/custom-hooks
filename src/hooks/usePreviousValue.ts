import { useRef } from "react";


/**
 * O uso de generics no typescript torna a linguagem mais versátil
 * visto que agora podemos passar qualquer objeto como parametro 
 * da função e está recebera o objeto sem nenhum tipo de restrição
 * @param value  
 * @returns 
 */
export const usePreviousValue = <T>(value: T) => {
  const previousValue = useRef(value);

  return previousValue.current;
};
