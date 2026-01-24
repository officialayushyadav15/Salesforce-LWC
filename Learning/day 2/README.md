# JavaScript – Day 2

## What is JavaScript?

JavaScript is a **programming language** used to add logic, behavior, and interaction to web pages.

It allows web pages to:

* Respond to user actions
* Update content without reloading
* Validate input
* Perform calculations

In short, JavaScript makes web pages **interactive and dynamic**.

---

## Variables

Variables are **containers that store data values** so they can be reused later.

JavaScript provides three keywords to declare variables:

* `var`
* `let`
* `const`

Example:

```js
var name = "Ayush";
let age = 21;
const course = "LWC";
```

JavaScript identifiers are **case-sensitive**, so `Name` and `name` are different.

A value can be assigned:

* At the time of declaration
* Or later using the `=` operator

---

## var, let, and const – Scope and Behavior

| Feature           | var | let | const |
| ----------------- | --- | --- | ----- |
| Global Scope      | Yes | Yes | Yes   |
| Function Scope    | Yes | Yes | Yes   |
| Block Scope       | No  | Yes | Yes   |
| Can be Reassigned | Yes | Yes | No    |
| Can be Redeclared | Yes | No  | No    |

### Important Points

* `var` does **not** support block scope
* `let` supports block scope and can be updated
* `const` supports block scope but cannot be updated or redeclared

Block level means value defined in block cannot be accessed outside block

Example:

```js
let a = 10;
a = 20; // allowed

const b = 30;
// b = 40; ❌ not allowed
```

---

## Data Types in JavaScript

JavaScript has **8 basic data types**.

### 1. Number

Used for integers and decimals. There is **no separate int type** in JavaScript.

```js
let num = 10;
```

### 2. String

Used for text. Can be written using single or double quotes.

```js
let name = "Ayush";
```

### 3. Boolean

Represents `true` or `false`.

```js
let isActive = true;
```

### 4. BigInt

Used for very large integers. Created by adding `n` at the end.

```js
let big = 10n;
```

### 5. Undefined

If a variable is declared but not assigned a value, JavaScript automatically assigns `undefined`.

```js
let x;
```

### 6. Null

Represents an intentional empty or unknown value. It is **assigned explicitly**.

```js
let y = null;
```

### 7. Object

Used to store data in key-value pairs (Similar to dictionary in python).

```js
let user = { name: "Ayush", age: 21 };
```

### 8. Symbol

Used to create unique identifiers.

```js
let id = Symbol("id");
```

---

## Null vs Undefined

| Feature        | undefined                | null                   |
| -------------- | ------------------------ | ---------------------- |
| Assigned By    | JavaScript               | Developer              |
| Meaning        | Variable not initialized | Empty or unknown value |
| typeof         | undefined                | object                 |
| == Comparison  | true                     | true                   |
| === Comparison | false                    | false                  |

Example:

```js
let a;
let b = null;

console.log(a == b);  // true
console.log(a === b); // false
```

---

## Equality Operators

### `==` (Loose Equality)

Compares **only values**.

```js
100 == "100" // true
```

### `===` (Strict Equality)

Compares **value and data type**.

```js
100 === "100" // false
```

---

## Spread Operator (`...`)

The spread operator allows elements of arrays, strings, or objects to be **expanded**.

### Expanding a String

```js
let text = "Ayush";
let chars = [...text];
```

### Combining Arrays

```js
let a = ["Ayush"];
let b = ["Yadav"];
let c = [...a, ...b];
```

### Combining Objects

```js
let obj1 = { name: "Ayush", age: 21 };
let obj2 = { age: 22 };
let obj3 = { ...obj1, ...obj2 };
```

### Shallow Copy

```js
let arr = [1,2,3];
let copy = [...arr];
```

Note: Shallow copy does **not work fully for nested objects**.

---

## Destructuring

Destructuring allows values from arrays or objects to be unpacked into variables.

### Array Destructuring

```js
let arr = ["Ayush", "Yadav"];
let [firstName, lastName] = arr;
```

### Object Destructuring

```js
let user = { name: "Ayush", age: 21 };
let { name, age } = user;
```

---

## String Interpolation

String interpolation allows variables and expressions inside strings using **backticks**.

```js
let name = "Ayush";
let age = 21;
console.log(`My name is ${name} and my age is ${age}`);
```

Expressions can also be evaluated:

```js
console.log(`Sum is ${2 + 3}`);
```

---

## String Methods

Commonly used string methods:

* `includes()` – checks if a string contains a value
* `indexOf()` – returns position of a value
* `startsWith()` – checks starting characters
* `slice()` – extracts part of a string
* `toLowerCase()` – converts to lowercase
* `toUpperCase()` – converts to uppercase
* `trim()` – removes extra spaces

Example:

```js
let text = " Hello Ayush ";
text.trim();
```

---

## Array Methods

Array methods are used to perform operations on arrays such as transforming values, filtering data, checking conditions, sorting elements, and reducing an array into a single value.
These methods are widely used in JavaScript and LWC because they make code cleaner and easier to read.

Below is a common array used to demonstrate all array methods:

```js
var array_methods_test = [1,2,3,4,5,6,7,8,9,0]
```

General syntax of array methods:

```js
arr.methodName(function(currentItem, index, actualArray){
    // logic
})
```


### 1. map()

`map()` loops over the array and **returns a new array** based on the value returned from the callback function.
It is mainly used to **transform** array values.

```js
let updated_array = array_methods_test.map(function(currentItem, index, actualarray){
    console.log(`current item is ${currentItem} on index ${index} and array is ${actualarray}`)
    return currentItem * 2
})

console.log(updated_array)
```

### 2. filter()

`filter()` returns a **new array** containing only those elements that satisfy the given condition.

```js
let filter_arr = array_methods_test.filter(function(currentItem, index, actualarray){
    return currentItem > 6
})

console.log(filter_arr)
```

### 3. every()

`every()` checks whether **all elements** in the array satisfy the condition.
It returns `true` if all elements pass, otherwise `false`.

```js
let true_arr = array_methods_test.every(function(currentItem, index, actualarray){
    return currentItem >= 0
})

console.log(true_arr)

let false_arr = array_methods_test.every(function(currentItem, index, actualarray){
    return currentItem > 6
})

console.log(false_arr)
```

### 4. some()

`some()` checks whether **at least one element** in the array satisfies the condition.
It returns `true` if any element passes, otherwise `false`.

```js
let true_arr1 = array_methods_test.some(function(currentItem, index, actualarray){
    return currentItem >= 8
})

console.log(true_arr1)

let false_arr1 = array_methods_test.some(function(currentItem, index, actualarray){
    return currentItem > 22
})

console.log(false_arr1)
```

### 5. sort()

`sort()` is used to sort elements of an array.

* For strings, sorting happens alphabetically.
* For numbers, a comparison function is required.

```js
array_methods_char = ["Papaya","Apple","Appla"]
console.log(array_methods_char.sort())
```

Sorting numbers in ascending and descending order:

```js
let sortedvalasc = array_methods_test.sort(function(a,b){
    return a - b
})
console.log(sortedvalasc)

let sortedvaldsc = array_methods_test.sort(function(a,b){
    return b - a
})
console.log(sortedvaldsc)
```

### 6. reduce()

`reduce()` reduces the array into a **single value**, processing elements from left to right.

Syntax:

```js
array.reduce(function(total, currentValue, index, array){
    // logic
}, initialValue)
```

Example:

```js
let sum_array_test = array_methods_test.reduce(function(total, currentItem){
    return total + currentItem
}, 15)

console.log(sum_array_test)
```

### 7. forEach()

`forEach()` executes a function for each array element.
It **does not return anything**, unlike `map()`.

```js
array_methods_test.forEach(function(currentItem){
    console.log(currentItem)
})
```


---

## JSON (JavaScript Object Notation)

JSON is a **lightweight format** used to store and transport data.

### Convert Object to JSON String

```js
JSON.stringify(obj);
```

### Convert JSON String to Object

```js
JSON.parse(jsonString);
```

### Get Keys and Values

```js
Object.keys(obj);
Object.values(obj);
```

All related `.js` files are attached separately for hands-on practice and execution.
