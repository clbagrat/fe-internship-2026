import { createElement, useState } from "./framework.js";

export const GreetingsComponent = (props) => {
  const [count, setCount] = useState(0);

  const callback = () => {
    setCount(count + 1);
  }

  return createElement("div", null, `Hel44lo, ${props.name}!`, 
    createElement("button", { onClick: callback }, `Greet ${count}`),
    ...(new Array(count).fill(0).map((_, i) => createElement("p", null, `Hello again, ${props.name}! (${i + 1})`)))
  );
}


