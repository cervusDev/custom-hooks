import { useState } from "react";
/*
  *Utilizar a estrutura de um hook useState e retornar seus 
  elementos em um array acaba entregando Array<(number | Dispatch<SetStateAction<number>>)>
  o que impossibilita o funcionamento integral de um hook

  *Em casos simples, o ideal é expor apenas o hook com o valor inicial
  passado como parâmetro
*/
export const useNumber = (initialValue: number) => useState(initialValue);


// a expressão acima retorna readonly [number | Dispatch<SetStateAction<number>>]