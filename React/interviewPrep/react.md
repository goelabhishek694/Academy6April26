# React Rendering Notes

This file covers two important React rendering topics:

- How React uses the Virtual DOM.
- How React Fiber improves rendering and scheduling.

## Virtual DOM

### What Is The Virtual DOM?

The Virtual DOM is a lightweight, in-memory representation of the real DOM.

Instead of directly updating the browser DOM for every state change, React first updates the Virtual DOM. Then it compares the new Virtual DOM with the previous one and updates only the required parts of the real DOM.

This makes React faster because direct DOM updates and UI repainting are expensive.

## How React Uses The Virtual DOM

React follows this flow:

1. A component's state or props change.
2. React creates a new Virtual DOM tree.
3. React compares the new tree with the previous tree.
4. React finds the minimum required changes.
5. React updates the real DOM in batches.

This comparison process is called **diffing**.

The full process of comparing and updating is called **reconciliation**.

## Batch Updates

React does not always update the real DOM immediately after every small change.

Instead, React groups multiple updates together and applies them in batches. This improves performance because repainting the browser UI is one of the most expensive operations.

## React Diffing Algorithm

React uses a heuristic `O(n)` diffing algorithm. It is based on two main assumptions:

- Two elements of different types will produce different trees.
- Developers can use the `key` prop to help React identify stable list items between renders.

These assumptions work well for most real-world React applications.

## Elements Of Different Types

When React compares two root elements of different types, it removes the old tree and creates a new one from scratch.

Example:

```jsx
<div>
  <Counter />
</div>

<span>
  <Counter />
</span>
```

Here, React sees that the root element changed from `div` to `span`.

As a result:

- The old `Counter` component is unmounted.
- A new `Counter` component is mounted.
- Any state inside the old `Counter` is lost.

## Recursing On Children

When React compares children, it checks both lists of children in order.

Adding an item at the end works efficiently:

```jsx
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

React matches:

- `first` with `first`
- `second` with `second`
- then inserts `third`

But adding an item at the beginning can be inefficient without keys:

```jsx
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>
```

Without keys, React may think every child changed, even though `Duke` and `Villanova` only moved.

## Use Of Keys

Keys help React identify which list items were added, removed, or moved.

Example:

```jsx
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

Now React understands:

- `2014` is a new item.
- `2015` and `2016` already existed.
- `Duke` and `Villanova` were moved, not recreated.

In real apps, use a stable unique ID from your data:

```jsx
<li key={item.id}>{item.name}</li>
```

Avoid using array indexes as keys when list items can be reordered, inserted, or deleted.

## Quick Summary

- **Real DOM:** The actual UI structure shown in the browser.
- **Virtual DOM:** A fast in-memory copy of the UI tree.
- **Reconciliation:** React's process of comparing old and new trees.
- **Diffing:** Finding the minimum changes needed.
- **Keys:** Help React track list items between renders.

## React Fiber Architecture

React Fiber is a reimplementation of React's core reconciliation algorithm.

Its main goal is to make React better at handling:

- animations
- layout updates
- gestures
- large UI updates
- concurrent rendering

The most important feature of Fiber is **incremental rendering**.

Incremental rendering means React can split rendering work into smaller chunks and spread that work across multiple frames.

## Why React Fiber Was Needed

Before Fiber, React rendered updates recursively in one continuous pass.

This could be a problem when a large update took too long. The browser could not pause that work, so animations and user interactions might feel slow or choppy.

Fiber allows React to:

- pause work
- resume work later
- reuse completed work
- abort unnecessary work
- assign priority to different updates

## Reconciliation Review

Reconciliation is the algorithm React uses to compare one tree with another and decide what needs to change.

An update usually happens when:

- state changes
- props change
- context changes

React gives developers a declarative model. You describe what the UI should look like for the current state, and React figures out how to update the actual screen efficiently.

## Reconciliation vs Rendering

Reconciliation and rendering are different phases.

- **Reconciliation:** Figures out what changed.
- **Rendering:** Applies those changes to the target environment.

The browser DOM is only one rendering target. React can also render to native mobile views using React Native.

This is why React separates the reconciler from the renderer:

- `react` contains the core logic.
- `react-dom` knows how to update the browser DOM.
- `react-native` knows how to update native mobile views.

Fiber mainly reimplements the reconciler.

## Scheduling

Scheduling means deciding **when** work should be performed.

In UI apps, not every update has the same priority.

For example:

- A button click or animation should feel immediate.
- A background data update can usually wait a little.
- Work for offscreen UI can be delayed.

React uses a pull-based approach. This means React can decide which work is most important and when to perform it.

This helps avoid dropped frames and keeps the UI responsive.

## What Is A Fiber?

A fiber is a JavaScript object that represents a unit of work.

You can think of a fiber as a virtual stack frame created specifically for React components.

React components can be described as:

```txt
v = f(d)
```

Meaning:

- `d` is data.
- `f` is the component function.
- `v` is the view returned by the component.

Rendering a React app is like calling many component functions. Fiber gives React a way to pause, resume, and manage that work manually instead of relying only on the JavaScript call stack.

## Why Fiber Helps

The normal JavaScript call stack runs until it is empty.

For UI rendering, that can be a problem. If too much work happens at once, the browser may not have time to update the screen smoothly.

Fiber lets React keep work in memory and decide:

- what work to do now
- what work to delay
- what work to reuse
- what work to throw away

This enables features like concurrent rendering, error boundaries, and smoother UI updates.

## Structure Of A Fiber

A fiber object stores information about:

- the component
- its props
- its children
- its sibling components
- its parent
- its priority
- its output

Some important fields are explained below.

## `type` And `key`

The `type` and `key` fields work similarly to React element `type` and `key`.

- `type` tells React what component or DOM element the fiber represents.
- `key` helps React decide whether the fiber can be reused during reconciliation.

For function or class components, `type` is the component itself.

For host components like `div` or `span`, `type` is a string.

## `child` And `sibling`

Fibers are connected together as a tree.

The `child` field points to the first child fiber.

Example:

```jsx
function Parent() {
  return <Child />;
}
```

Here, the child fiber of `Parent` points to `Child`.

The `sibling` field points to the next child at the same level.

Example:

```jsx
function Parent() {
  return [<Child1 />, <Child2 />];
}
```

Here:

- `Parent.child` points to `Child1`.
- `Child1.sibling` points to `Child2`.

## `return`

The `return` field points back to the parent fiber.

It works like the return address of a stack frame.

If `Child1` and `Child2` are children of `Parent`, then both child fibers have `Parent` as their `return` fiber.

## `pendingProps` And `memoizedProps`

Props are like arguments passed to a component.

- `pendingProps` are the new props for the current render.
- `memoizedProps` are the props from the previous completed render.

If `pendingProps` and `memoizedProps` are equal, React may be able to reuse previous work and skip unnecessary rendering.

## Priority

Fiber stores priority information so React can decide which work should happen first.

Older Fiber explanations may refer to `pendingWorkPriority`. The main idea is still useful: React tracks priority so urgent work can happen before less important work.

Example idea:

```js
function matchesPriority(fiber, priority) {
  return fiber.pendingWorkPriority !== 0 && fiber.pendingWorkPriority <= priority;
}
```

This is only for understanding the concept. It is not code you normally write in a React app.

## `alternate`

At any time, a component can have two related fibers:

- the current fiber, which represents what is already shown on the screen
- the work-in-progress fiber, which represents the next version being prepared

The `alternate` field connects these two fibers.

React creates alternate fibers lazily and reuses them when possible to reduce memory allocations.

## Output

The output is what React eventually gives to the renderer.

For browser apps, the renderer is React DOM, and the output becomes DOM operations.

Host components are leaf nodes like:

- `div`
- `span`
- `button`
- `input`

In JSX, host components use lowercase names.

## Final Interview Summary

- React uses the Virtual DOM to avoid unnecessary direct DOM updates.
- React compares old and new Virtual DOM trees using diffing.
- Reconciliation is the overall process of deciding what changed.
- Keys help React efficiently update lists.
- Fiber is React's modern reconciliation architecture.
- A fiber represents a unit of rendering work.
- Fiber lets React pause, resume, prioritize, reuse, or discard work.
- Scheduling helps React keep the UI responsive.
