import { useEffect, useState } from "react";

/**
 * o controle de renderização de estado pode ser realizado
 * por estratégias chamadas de debaunceds, o que possibilita 
 * constrolarmos o momomento de renderização ou mesmo 
 * requisições dada uma seguinte ação
 * 
 * @param value number | string
 * @param delay  number
 * @returns debaunced value
 */

export const useDebauncedValue = (value: number | string, delay = 500) => {
  const [debauncedValue, setDebauncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebauncedValue(value), delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debauncedValue;
};
