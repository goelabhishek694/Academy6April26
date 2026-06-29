# React Notes

## Rendering Without JSX

React can create elements using `React.createElement`.

```js
const rootElement = document.getElementById("root");

const headingElement = React.createElement(
  "h1",
  { style: { color: "blue" } },
  "Hello via React"
);

ReactDOM.render(headingElement, rootElement);
```

### How `React.createElement` Works

`React.createElement` takes three main arguments:

1. The HTML tag or React component to create.
2. The props object, similar to HTML attributes.
3. The children to render inside the element.

In this example:

- `"h1"` creates an `h1` element.
- `{ style: { color: "blue" } }` passes styling as props.
- `"Hello via React"` becomes the text inside the heading.

`ReactDOM.render` then mounts the React element inside the DOM element with the id `root`.

## React Hooks

React Hooks were introduced in React 16.8. They allow function components to use state and other React features without writing a class component.

## Rules of Hooks

### 1. Call Hooks at the Top Level

Hooks should always be called at the top level of React function components.

Do not call hooks inside:

- Loops
- Conditions
- Nested functions

This helps React call hooks in the same order on every render.

### 2. Call Hooks Only from React Functions

Hooks can only be called from:

- React function components
- Custom hooks

Do not call hooks from regular JavaScript functions or class components.

### 3. Custom Hooks Follow the Same Rules

Custom hooks must follow the same rules as built-in hooks.

A custom hook should:

- Start with the word `use`
- Contain reusable hook logic
- Be called only from React components or other custom hooks

Example custom hook name:

```js
useCounter();
```

### 4. Use ESLint to Check Hook Rules

React provides an ESLint plugin named `eslint-plugin-react-hooks`.

It helps catch common hook mistakes during development.

## Updating State with `useState`

`useState` returns an array with two values:

```js
const [count, setCount] = useState(initialCount);
```

The first value is the current state.

The second value is a function used to update that state.

## Normal State Update

```js
setCount(count + 1);
```

This uses the `count` value from the current render.

If you call this multiple times in the same function, React may batch the updates, and each call can still use the same old `count` value.

## Functional State Update

```js
setCount((count) => count + 1);
```

This is safer when the next state depends on the previous state.

React gives the updater function the latest state value, so multiple updates work correctly.

Example:

```js
setCount((count) => count + 1);
setCount((count) => count + 1);
```

This increases the count by `2`.

## Summary

- Use `React.createElement` to create React elements without JSX.
- Use `ReactDOM.render` to render a React element into the DOM.
- Call hooks only at the top level of React components or custom hooks.
- Use functional updates when the new state depends on the previous state.