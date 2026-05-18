import { App } from "./app.js";
import { createElement, render } from "./framework.js";
import { GreetingsComponent } from "./greetingsComponent.js";

document.addEventListener("DOMContentLoaded", function() {
  const root = document.getElementById("app");
  const globalState = {}
  const rerender = () => {

     root.innerHTML = "";

     const newElement = render( 
       createElement("div", null, "Hello, World!", 
           createElement(GreetingsComponent, { name: "Alice" }),
           createElement(GreetingsComponent, { name: "Bob" }),
           createElement("button", { onClick: () => {alert('click me')} }, "Click Me"),
            createElement(App, null)
       ),
       rerender,
       globalState
     );

     root.appendChild(newElement);
  }

  rerender();

  //setInterval(rerender, 1000);
})
