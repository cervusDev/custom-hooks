import { useEffect, useRef } from "react";

/*
 * useRef é um hook muito utilizado parar persistir um objeto
 * simples para além do lifecycle, assim os valores são
 * persistentes no objeto independente se está montado ou
 * desmontado

 * Este é acessado pela propriedade .current que tem a 
 * possibilidade de ser alterado dado as condições de 
 * interesse
 */

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return isMounted.current;
}
