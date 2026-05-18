let globalRerender;
let currentState;
let currentHookIndex = 0;
let previousRoot = null;

export const useState = (initialValue) => {
  currentHookIndex++;
  const hookIndex = currentHookIndex;
  currentState[hookIndex] ??= initialValue;
  let currentValue = currentState[hookIndex];
  let myState = currentState;
  return [
    currentValue,
    (newValue) => {
      myState[hookIndex] = newValue;
      globalRerender();
    }
  ]
}

export const render = (element, globalRererender1, oldElement) => {
  if (globalRererender1) {
    globalRerender = globalRererender1;
    oldElement = previousRoot;
    previousRoot = element;
  }

  if (!element) return null;
  const { compBody, props, children } = element;
  const sameType = oldElement
    && typeof oldElement !== "string"
    && oldElement.compBody === compBody;

  if (typeof compBody === "string") {
    const domElement = document.createElement(compBody);

    if (props) {
      for (const [key, value] of Object.entries(props)) {
        if (key.startsWith("on")) {
          const eventType = key.slice(2).toLowerCase();
          domElement.addEventListener(eventType, value);
        } else {
          domElement.setAttribute(key, value);
        }
      }
    }

    if (children) {
      children.forEach((child, i) => {
        if (typeof child === "string") {
          domElement.appendChild(document.createTextNode(child));
        } else {
          const oldChild = sameType ? oldElement.children?.[i] : null;
          const rendered = render(child, null, oldChild);
          if (rendered) domElement.appendChild(rendered);
        }
      });
      return domElement;
    }
  }

  if (sameType) element.state = oldElement.state;
  currentHookIndex = 0;
  currentState = element.state;
  const compElement = compBody(props);
  element._prevRendered = compElement;
  return render(compElement, null, sameType ? oldElement._prevRendered : null);
}

export const createElement = (compBody, props, ...children) => {
  return {
    compBody,
    props,
    children,
    state: {}
  }
}
