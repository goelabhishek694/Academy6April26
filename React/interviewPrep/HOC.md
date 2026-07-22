# Higher Order Components

## When To Use HOCs

- **Code reusability:** Use an HOC when the same logic needs to be shared across multiple components.
- **Separation of concerns:** Move reusable behavior into the HOC so the wrapped component can focus on UI.
- **Enhancing existing components:** Add extra functionality without directly changing the original component.

## When Not To Use HOCs

- **Too much complexity:** Overusing HOCs can make the component tree harder to understand.
- **Performance concerns:** Multiple nested HOCs can sometimes cause extra renders.

## Common Use Cases

Use an HOC when you need to:

- Add common behavior, such as loading, logging, or error handling.
- Wrap multiple components with the same logic.
- Separate business logic from presentation logic.

## Important Notes

- HOCs are a React pattern, not a React feature.
- HOCs do not modify the original component. They wrap it and return a new enhanced component.
- HOCs can become difficult to manage when deeply nested, so use them carefully.

## Conclusion

HOCs are useful for reusing logic across React components. However, they should be used thoughtfully because they can add complexity. In modern React, many HOC use cases can also be solved with hooks, so choose the approach that keeps your code simpler and easier to maintain.