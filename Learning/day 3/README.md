## Day 3: JavaScript Concepts for Lightning Web Components (LWC)

This day focused on core JavaScript concepts that are heavily used while building Lightning Web Components. The topics include Promises, modules (import/export), DOM selectors, events, arrow functions, timers, and an introduction to the Lightning framework.

---

## Promises

A Promise is an object that represents a value that will be available sometime in the future.

Promises are mainly used to handle asynchronous operations in JavaScript, such as server calls, file loading, or API requests.

### Promise States

A Promise can be in one of these three states:

1. **Pending**

   * The initial state
   * The operation is still in progress

2. **Fulfilled**

   * The operation completed successfully
   * A value is returned using `resolve()`

3. **Rejected**

   * The operation failed
   * An error is returned using `reject()`

### Use Cases in LWC

* Fetching data from the Salesforce server (Apex calls)
* Loading files or static resources
* Calling external APIs

### Promise Syntax Example

```js
new Promise(function(resolve, reject) {
    // resolve is used when the operation is successful
    // reject is used when an error occurs
    resolve("Success");
});
```

### Custom Promise Function Example

```js
function checkIf(data) {
    return new Promise(function(resolve, reject) {
        // Check condition
        if (data === true) {
            // Resolve promise if condition is true
            resolve("Success");
        } else {
            // Reject promise if condition is false
            reject("Unsuccess");
        }
    });
}
```

### Handling Promise Result

```js
checkIf(true)
    .then(function(result) {
        // then() is used to handle resolved value
        console.log(result);
    })
    .catch(function(error) {
        // catch() is used to handle rejected value
        console.error(error);
    });
```

> Calling a promise directly will not give the value. Use `then()` or `catch()` to access the result.

---

## Modules: Import and Export

Modules allow us to split code into reusable files.

### Exporting Members

#### Named Export

```js
export const PI = 3.14;

export function multiply(a, b) {
    // Returns multiplication of two numbers
    return a * b;
}
```

* Multiple variables or functions can be exported from a file
* They must be imported using the same name

#### Export with Alias

```js
export { PI as P };
```

#### Default Export

```js
export default function divide(a, b) {
    // Returns division of two numbers
    return a / b;
}
```

* Only one default export is allowed per file
* Curly braces are not required while importing default exports

### Importing Members

```js
import { PI, multiply } from './util.js';
import divide from './util.js';

console.log(PI);
console.log(multiply(2, 3));
console.log(divide(6, 3));
```

### Import Everything

```js
import * as util from './util.js';

console.log(util.PI);
console.log(util.multiply(2, 3));
```

---

## DOM Selectors

### querySelector()

Returns the first element that matches the given CSS selector.

```js
let element = document.querySelector('div');

// Logs the element
console.log(element);

// Logs HTML inside the element
console.log(element.innerHTML);

// Apply inline CSS using JavaScript
element.style.color = "blue";
```

### querySelectorAll()

Returns all matching elements as a static NodeList.

```js
let elements = document.querySelectorAll('div');

// Logs all div elements
console.log(elements);
```

* NodeList is not a true array
* Convert it to an array to use array methods
* In LWC, `document` is replaced with `this.template`

```js
this.template.querySelectorAll('div');
```

---

## Events

An event is an action that occurs in the browser and allows JavaScript to respond to user interaction.

### Examples of Events

* Click
* Mouse move
* Key press
* Form submit

### Event Handler

An event handler is a function that executes when an event occurs.

### Ways to Add Events

1. **HTML Event Attributes**

   * Uses attributes like `onclick`, `onchange`

2. **Event Listeners**

   * Uses JavaScript methods

### Event Listener Methods

* `addEventListener()` to register an event
* `removeEventListener()` to remove an event

### Event Bubbling

Event bubbling means the event starts from the target element and moves upward through its parent elements.

Order example:

* Button
* Div
* Body
* HTML
* Document

---

## Custom Events

Custom events allow us to create and dispatch our own events.

### Custom Event Example

```js
document.addEventListener("Hello", function(event) {
    // Access custom data using detail property
    console.log(event.detail.name);
});

function triggerCustomEvent() {
    let customEvent = new CustomEvent("Hello", {
        detail: { name: "Ayush" }
    });

    // Dispatch the custom event
    document.dispatchEvent(customEvent);
}
```

---

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Normal Function

```js
function getName() {
    return "Ayush";
}
```

### Arrow Function

```js
const getName = () => "Ayush";
```

### Benefits

* Shorter syntax
* Automatically binds `this` from surrounding context

### Example

```js
const sum = (a, b) => {
    // Adds two numbers
    let result = a + b;
    console.log(result);
};

sum(2, 3);
```

### Arrow Function with Array Methods

```js
let numbers = [1, 2, 3, 4];

let doubled = numbers.map(item => item * 2);

console.log(doubled);
```

---

## Arrow Function and `this`

Normal functions lose the outer `this` context inside nested functions.

Arrow functions preserve the outer context.

### Example Using Normal Function

```js
let user = {
    name: "Ayush",
    last: "Yadav",
    getName: function() {
        function fullName() {
            // this becomes undefined or window
            console.log(this.name);
        }
        fullName();
    }
};
```

### Example Using Arrow Function

```js
let user = {
    name: "Ayush",
    last: "Yadav",
    getName: function() {
        const fullName = () => {
            // this refers to outer object
            console.log(`My full name is ${this.name} ${this.last}`);
        };
        fullName();
    }
};
```

---

## Timers

### setTimeout()

Runs a function after a specified delay.

```js
let timerId = setTimeout(function() {
    console.log("Executed after 5 seconds");
}, 5000);
```

### clearTimeout()

Stops the execution of `setTimeout()`.

```js
clearTimeout(timerId);
```

### setInterval()

Runs a function repeatedly at a fixed interval.

```js
let intervalId = setInterval(function() {
    console.log("Hello");
}, 1000);
```

---

## Lightning Framework Overview

The Lightning Component Framework is a UI framework used to build single-page applications for Salesforce.

### Programming Models

1. Aura Components
2. Lightning Web Components (LWC)

### Aura vs LWC

* Aura requires more code
* Rendering was not optimized in Aura
* Modern JavaScript features were limited
* LWC uses modern ES standards
* LWC uses Shadow DOM and Web Components

### JavaScript Versions Used

* Aura is based on ES5
* LWC uses ES6 and later versions

### Benefits of LWC

* Lightweight framework
* Better performance
* Uses standard web technologies
* Easy integration with Aura components
* Better testing support using Jest
* Improved security

### Coexistence

* Aura and LWC can coexist on the same page
* Aura components can include LWC components
* Both share base Lightning components
* Both use common services like LDS and UI API

---