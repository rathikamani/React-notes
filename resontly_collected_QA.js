1. What is React?omponent ?

     React is a popular open-source JavaScript library used for building user interfaces (UIs), 
     particularly single-page applications (SPAs) where data can change over time without reloading the entire page.
     Virtual DOM
     JSX (JavaScript XML)
8. What are fragments in react ?

        In React, Fragments are a feature that allows you to group multiple elements without adding an extra node to the DOM. 
        They are useful when you want to return multiple elements from a component but don’t want to create unnecessary wrappers, 
        such as <div> elements, which can affect the layout and performance.
        Ex:
        <>
        <h1>Title</h1>
        <p>Paragraph content</p>
        </>

2. What is useMemo ?
3. What are the features of React ?
    1.Virtual DOM
    2.Unidirectional Data Flow
    3.JSX (JavaScript XML)

4. What is JSX ?

JSX (JavaScript XML) is a syntax extension for JavaScript that is primarily used with React. 
It allows you to write HTML-like code within your JavaScript, making the process of creating user interfaces more intuitive and easier to manage. 
JSX looks very similar to HTML but has the full power of JavaScript behind it.
Why Use JSX?
Improves Readability: JSX makes it easier to visualize the UI because it combines the structure (HTML) and behavior (JavaScript) in one place.
Declarative Code: JSX allows you to write declarative code that is more readable and easier to maintain, especially for larger and more complex components.
Familiar Syntax: Developers who are familiar with HTML can quickly get up to speed with JSX, as it closely resembles HTML.

5. What is DOM ?
DOM stands for Document Object Model. It is a programming interface for web documents,

6. What is Virtual Dom ?
The Virtual DOM (VDOM) is a concept used in libraries and frameworks like React to improve the performance of web applications. 
It is an in-memory representation of the real DOM (Document Object Model) and acts as an intermediate layer between the UI and the real DOM.

### Virtual DOM vs Real DOM:

Here’s how the **Virtual DOM** compares to the **real DOM** in terms of performance and efficiency:

| Aspect               | Virtual DOM                               | Real DOM                                 |
|----------------------|-------------------------------------------|------------------------------------------|
| **Update Mechanism**  | React updates the Virtual DOM first, then selectively updates the real DOM. | Changes directly made to the real DOM, causing reflows and repaints. |
| **Efficiency**        | React optimizes DOM updates by comparing the new and old Virtual DOM and applying minimal changes. | Frequent updates to the real DOM can cause performance issues due to excessive reflows and repaints. |
| **Rendering Speed**   | Faster because it minimizes direct manipulation of the real DOM. | Slower, especially with complex UIs, because of the cost of direct DOM manipulation. |
| **Repaint/Reflow**    | No reflows/repaints until necessary updates are made to the real DOM. | Every change typically causes a reflow or repaint of the entire page. |

7. What is component life cycle of React class
9. What are props in react ?
   In React, props (short for properties) are a mechanism used to pass data from a parent component to a child component.

10. What are synthetic events in react ?
In order to work as a cross-browser application, React has created a wrapper same as the native browser.
In order to avoid creating multiple implementations for multiple methods for multiple browsers, creating common
names for all events acroess browsers. another benefit is that it increases the performance of the application as React reuses the event object.

syntax:
 e.preventDefault() prevents all the default behavior by the browser.
 e.stopPropagation() prevents the call to the parent component whenever a child componment gets called.

11. What are the difference between Package.json and Package.lock.json ?

package.json:
Purpose: The package.json file is the central configuration file for a Node.js project. 
It contains metadata about the project and the project’s dependencies, scripts, version, and other settings.
package-lock.json:
   - **Purpose**: The `package-lock.json` file is automatically generated when you run `npm install`. 
   Its primary role is to **lock** the exact version of every dependency (and its dependencies) used in the project, ensuring consistency across different environments and installations.
12. What are the differences between client side and server side rendering ?
13. What is state in Reactjs?
In React, state refers to an object that holds data or information about the component's condition. It is used to represent dynamic information that can change over time and affect how the component is rendered. The state can be thought of as the "memory" of a React component, as it keeps track of the current status and can change in response to user interactions, events, or other actions within the app.
14. What are props ?
15. What are the differences between State and Props in react ?
State is used to manage the component's internal data and can change over time, causing re-renders when updated.
Props are used to pass data from a parent component to a child component, and they cannot be modified by the child.
16. What is props drilling ?
Props drilling in React refers to the process of passing data from a parent component to a deeply nested child component through multiple layers of intermediate components. This occurs when data needs to be passed down from the root component to a deeply nested child component,
17. What are the disadvantages of props drilling and How we can avoid props drilling ?
18. What are Pure components in React ?
In React, pure components are components that only re-render when their props or state change. They avoid unnecessary re-renders by checking if the new props or state are different from the previous ones.

React provides a PureComponent class, which automatically performs this check for you. If the props and state haven't changed, the component doesn't re-render, improving performance.

In short, pure components optimize rendering by skipping updates when there’s no change in data.
 

example:
import React from 'react';

class MyComponent extends React.Component {
  handleClick = (event) => {
    // Synthetic event has the same properties as the native event
    console.log(event.target);  // Access the target of the event
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

export default MyComponent;
19. Whatare Ref’s in React?
In React, Refs (short for "references") are used to access and interact directly with a DOM element or a class component instance. Refs provide a way to bypass React's state and props system and perform operations directly on a DOM element or a component instance. This can be useful for tasks like focusing on an input field,
measuring the size of an element, or triggering imperative actions in class components.
20. What is meant by forward ref ?
21. What are Error boundaries ?
22. What are Higher order components in react ?
23. What are the differences between controlled and uncontrolled components ? 
24. What is useCallback ?
25. What are the differences between useMemo and useCallback ?
26. What are keys in React ?
27. What is Lazy loading in React ?
28. What is suspense in React ?
29. What are custom hooks ?
30. What is useReducer hook ?
31. What are Portals in react ?
32. What is context in react ?
33. Practical question: Give an example of context api usage ?
34. What is the purpose of callback function as an argument of setState()?
35. Practical question: create a custom hook for increment/decrement counter ?
36. Which lifecycle hooks in class component are replaced with useEffect in functional components ?
37. What is Strict mode in react ?
38. What are the different ways to pass data from child component to parent component in react ?
39. Practical question: How to send data from child to parent using callback functions ?
40. Practical question: How to send the data from child component to parent using useRef ?
41. How do you optimize your react application ?
42. How would you consume a RESTful JSON API in reactjs?
43.different design patterns used in react?
44. context api vs redux
45. prop types in react(How to apply validation on props in react)
46. What are React Mixins ?
47. what are the different hooks you have used ?
48. What are render props in react ?
49. What are the different types of exports and imports ?
50. What are the differences between create element vs clone element in react
51. When to use useState and useReducer
52. What is flushSync in react
53. What are protected routes in react
54. What is react-router






https://www.youtube.com/shorts/WMCdvNdF8TU



React Js Questions  
 
1)What are pure Components ?


 
3)How a virtual DOM works and Difference between Shallow DOM and Virtual DOM ?

### How a Virtual DOM Works


A Virtual DOM is like a copy of the real website or app. When something changes on the page, it first updates the Virtual DOM. Then, it compares the new Virtual DOM with the old one to see what is different. After that, it only changes the parts of the real page that need updating, making the process faster and more efficient.

Sure! Here's a simple example:

### Shallow DOM:
Imagine you have a list of items, and you want to update the text of one item. In a shallow DOM, it would check only that one item and update it directly, but it doesn't consider if other parts of the page are affected.

**Example:**
- List: [Item 1, Item 2, Item 3]
- You change "Item 2" to "Updated Item 2."
- The Shallow DOM directly updates just "Item 2."

### Virtual DOM:
Now, in a Virtual DOM, it makes a full copy of the entire list. When you change "Item 2," it first updates the Virtual DOM (a copy), compares it with the original, and then only changes "Item 2" in the real DOM.

**Example:**
- List: [Item 1, Item 2, Item 3]
- You change "Item 2" to "Updated Item 2."
- The Virtual DOM compares the full list, finds the change, and updates just "Item 2" in the real DOM.

In short, the Virtual DOM is smarter because it compares the entire structure and makes updates more efficiently, while the Shallow DOM only updates the immediate elements without looking deeper.

Definition: The Shallow DOM refers to a way of managing updates to the page where only the immediate elements (the top-level nodes) are checked and updated. It doesn't look deeply into the structure of the page. This can lead to less efficient updates, especially if changes affect parts of the page nested deeper down.

 
4)What is the purpose of key props in react ?

In React, the key prop helps React identify which items in a list have changed, been added, or been removed. It is used when rendering lists of elements, allowing React to optimize the update process by efficiently reordering and re-rendering only the elements that need to change.

 
5)What is the use of return statement in use Effect ?
 
6)How to call an async function in react ?
 
7)How to focus an input element in page load in react ?
import React, { useEffect, useRef } from 'react';

function FocusInput() {
  // Create a reference for the input element
  const inputRef = useRef(null);

  // Focus the input element on page load
  useEffect(() => {
    // Focus the input when the component is mounted
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this runs only once, when the component mounts

  return (
    <div>
      <label htmlFor="myInput">Enter text:</label>
      <input
        ref={inputRef} // Assign the ref to the input element
        type="text"
        id="myInput"
        placeholder="This will be focused on page load"
      />
    </div>
  );
}

export default FocusInput;

 
8)What is the difference between use Memo and use Callback ?
 
9)What is Suspense and use of Lazy loading ?
 
10)Please Explain the core principles of redux ?

Redux is a predictable state container for JavaScript applications, primarily used with libraries like React for state management. It helps manage and centralize the application's state in a single store, providing a consistent way to manage the flow of data throughout the application.

### **Core Principles of Redux**

Redux is based on three core principles:

### **1. Single Source of Truth**
In Redux, the entire application state is stored in a **single JavaScript object** called the "store". This means that all the data needed by the application is centralized in one place, rather than scattered across various components.

#### Benefits:
- **Consistency**: A single store provides a clear and consistent view of the application state.
- **Debugging**: Since there is one store, it is easier to track changes and see how the state evolves over time.
- **Simplified state management**: You don't need to pass data through props or rely on state duplication in different parts of the app.

#### Example:
```javascript
const store = {
  user: {
    name: 'John',
    age: 30,
  },
  posts: [],
};
```

### **2. State is Read-Only (Only via Actions)**
In Redux, **the state is immutable**, which means you cannot directly modify the state. Instead, to change the state, you must dispatch an **action**. Actions are payloads of information that send data from the application to the store. 

The state can only be modified by a **reducer** function, which listens to dispatched actions and returns a new state object.

#### Key Points:
- Actions describe **what** happened.
- The state remains unchanged unless an action is dispatched.
- Modifying the state requires using **pure functions** (reducers).

#### Example of Action:
```javascript
const addPostAction = {
  type: 'ADD_POST',
  payload: {
    id: 1,
    title: 'New Post',
    content: 'This is a new post',
  },
};
```

### **3. Changes are Made with Pure Functions (Reducers)**
Reducers are **pure functions** that specify how the application's state changes in response to actions. A reducer takes the previous state and an action as arguments and returns a new state object.

A **pure function** means:
- The function's output depends only on its input (state and action).
- It does not mutate its input; it returns a new object representing the updated state.
- It has no side effects, like API calls or modifying other variables.

#### Example of a Reducer:
```javascript
function postsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
}
```

In this example:
- The `postsReducer` listens for the `ADD_POST` action and updates the state by adding a new post to the array.

### **Redux Flow**
The Redux data flow follows these steps:

1. **Action Dispatching**:
   - A user triggers an action (e.g., clicking a button or submitting a form).
   - The action is dispatched using the `dispatch()` method.

2. **Action**:
   - The action is a plain JavaScript object that contains a `type` (required) and an optional `payload`.

3. **Reducer**:
   - The dispatched action is sent to the reducer.
   - The reducer processes the action and returns a new state.

4. **Store Update**:
   - The state of the store is updated with the new state returned by the reducer.

5. **UI Update**:
   - The view (UI) is updated based on the new state. In a React app, components are re-rendered when the store changes.

### **Redux Example Flow**
1. **Action is dispatched**:
```javascript
store.dispatch({
  type: 'ADD_POST',
  payload: { id: 1, title: 'New Post' },
});
```

2. **Action is processed by Reducer**:
```javascript
function postsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    default:
      return state;
  }
}
```

3. **New state**:
```javascript
const newState = postsReducer([], { type: 'ADD_POST', payload: { id: 1, title: 'New Post' } });
// newState = [{ id: 1, title: 'New Post' }]
```

4. **UI Updates**: Components connected to the store will now reflect the new state.

### **Additional Redux Concepts**
While the core principles are outlined above, there are a few additional concepts in Redux that enhance its power and flexibility:

#### **Middleware**:
Middleware is a way to extend Redux's abilities by adding custom behavior between dispatching an action and reaching the reducer. For example, middleware can handle asynchronous actions, logging, or error reporting. 

Common middleware includes:
- **Redux Thunk**: For handling async actions.
- **Redux Logger**: For logging actions and state changes.

#### **Store**:
The Redux store holds the entire application state and provides methods for:
- `getState()`: Access the current state.
- `dispatch(action)`: Dispatch an action to the store.
- `subscribe(listener)`: Listen for state changes.

#### **Connecting React and Redux**:
To integrate Redux with React, you typically use the `react-redux` library, which provides the following key components:
- **`Provider`**: A component that makes the Redux store available to the rest of the app.
- **`connect()`**: A higher-order function that allows React components to access the Redux store and dispatch actions.

#### Example of Connecting a React Component:
```javascript
import React from 'react';
import { connect } from 'react-redux';

function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// mapStateToProps maps the Redux state to the component's props
const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Posts);
```

### **Conclusion**
To summarize, the core principles of Redux are:

1. **Single Source of Truth**: The state is centralized in one store.
2. **State is Read-Only**: The only way to change the state is by dispatching actions.
3. **Changes with Pure Functions**: Reducers are pure functions that return new state based on the actions.

These principles create a predictable state management system that makes it easier to reason about your application’s state and debug it.
 
( For Lead candidates alone ask these 2 questions additionally )
 
1)What is Agile Methodology  
 
2)How do Plan a sprint  
 
Coding Exercise     ( Give any one of these two coding)
 
1) Write a Program to Find the consecutive letter count and display the output like => Input :"aaavvccfr", Output:"a3v2c2fr1"  

function consecutiveLetterCount(input) {
    let result = '';
    let count = 1;

    // Iterate through the string from the second character
    for (let i = 1; i <= input.length; i++) {
        // Check if current letter is the same as the previous one
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            // Add the character and its count to the result string
            result += input[i - 1] + count;
            count = 1; // Reset count for the next character
        }
    }

    return result;
}

// Example usage
let input = "aaavvccfr";
let output = consecutiveLetterCount(input);
console.log(output); // Output: "a3v2c2fr1"

 
Or  
 
2) Write a program to convert input [1,2,3,4,5] to output want to be [5,1,4,2,3]

function rearrangeArray(input) {
    let result = [];
    let left = 0;
    let right = input.length - 1;

    while (left <= right) {
        if (left !== right) {
            result.push(input[right]);
            result.push(input[left]);
        } else {
            result.push(input[left]); // For odd length arrays, handle the middle element
        }
        left++;
        right--;
    }

    return result;
}

// Example usage
let input = [1, 2, 3, 4, 5];
let output = rearrangeArray(input);
console.log(output); // Output: [5, 1, 4, 2, 3]


https://gamma.app/
https://archive.ph/
https://suno.com/
https://www.perplexity.ai/
https://sci-hub.ru/
https://www.anysummary.app/