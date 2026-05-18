import { createElement, useState } from "./framework.js";
import { GreetingsComponent } from "./greetingsComponent.js";

export const App = () => {
    const [isVisible, setIsVisible] = useState(true);
 return createElement("div", null, "Hello, World!", 
           (isVisible ? createElement(GreetingsComponent, { name: "Alice" }): null),
           createElement(GreetingsComponent, { name: "Bob" }),
           createElement("button", { onClick: () => {setIsVisible(!isVisible)} }, "Toggle Alice")
       )
}
