# Day 7: Lightning Web Components – Getters, Conditional Rendering & Template Looping

Day 7 focuses on making Lightning Web Components more dynamic. The concepts covered today help control what data is shown, when it is shown, and how repeated data is rendered efficiently in the UI.

---

## 1. Getters in LWC

Getters are special JavaScript methods used to return **derived or modified data** to the HTML template.

They solve a simple problem: **HTML cannot run logic**, so any calculation or transformation must happen in JavaScript.

### Why getters are used

* To format data before displaying it
* To calculate values dynamically
* To keep HTML clean and readable

### Example Explained Line by Line

```js
// Array of users
users = ["Ayush", "Yadav", "Salesforce"];

// Two number variables
n1 = 10;
n2 = 20;

// Getter to return first user in uppercase
get firstuser() {
    // this.users[0] → gets first value from array
    // toUpperCase() → converts string to uppercase
    return this.users[0].toUpperCase();
}

// Getter to calculate multiplication
get multi() {
    // Multiplies n1 and n2 and returns result
    return this.n1 * this.n2;
}
```

```html
<!-- Calling getters like normal properties -->
<lightning-card title="Getters">
    <div>First user name is {firstuser}</div>
    <div>Multiplication of {n1} and {n2} is {multi}</div>
</lightning-card>
```

### Important Notes

* Getters are accessed **without brackets** in HTML
* They auto-update when dependent values change
* Never write logic directly inside HTML

---

## 2. What is a Directive in LWC

Directives are **special HTML attributes** provided by LWC to control how elements behave in the DOM.

They allow developers to:

* Show or hide elements
* Loop over lists
* Control rendering without manual DOM manipulation

LWC does not allow direct DOM control like `document.querySelector` inside templates. Directives handle this safely.

---

## 3. Conditional Rendering Directives

Conditional rendering means showing or hiding elements based on a condition.

LWC provides two built-in directives for this:

1. `if:true`
2. `if:false`

These directives decide **whether a block of HTML should exist in the DOM or not**.

---

### if:true Directive

Renders content only when the expression evaluates to `true`.

#### Syntax

```html
<template if:true={expression}>
    Content visible when expression is true
</template>
```

#### Rules

* Expression must be a JavaScript property or getter
* Dot notation is allowed (`user.fullName`)
* Ternary operators are not allowed
* Complex logic should be handled using getters

---

### if:false Directive

Renders content only when the expression evaluates to `false`.

#### Syntax

```html
<template if:false={expression}>
    Content visible when expression is false
</template>
```

The same expression rules apply as `if:true`.

---

## 4. Conditional Rendering Example (Line by Line)

### JavaScript Explained

```js
import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    // Controls visibility of content
    isVisible = false;

    // Stores user input value
    name;

    // Toggles isVisible between true and false
    handleClick() {
        this.isVisible = !this.isVisible;
    }

    // Captures input value from textbox
    changeHandler(event) {
        // event.target.value contains input text
        this.name = event.target.value;
    }

    // Getter used for conditional rendering
    get helloMethod() {
        // Returns true only when user types "hello"
        return this.name === "hello";
    }
}
```

### HTML Explained

```html
<lightning-card title="Conditional Rendering">

    <!-- Button to toggle visibility -->
    <lightning-button
        label="Show Data"
        onclick={handleClick}>
    </lightning-button>

    <!-- Renders only when isVisible is true -->
    <template if:true={isVisible}>
        <div>Welcome I am Ayush Yadav Learning LWC</div>
    </template>

    <!-- Renders only when isVisible is false -->
    <template if:false={isVisible}>
        <div>Data is hidden click on show data</div>
    </template>

    <!-- Input field to capture user text -->
    <lightning-input
        type="text"
        label="Type hello to see data"
        onkeyup={changeHandler}>
    </lightning-input>

    <!-- Uses getter instead of logic in HTML -->
    <template if:true={helloMethod}>
        <div>Your answer is right</div>
    </template>

</lightning-card>
```

### Key Takeaways

* Conditions must be properties or getters
* Never use comparisons directly in HTML
* Getters keep templates clean

---

## 5. Template Looping in LWC

Template looping is used when the **same UI structure** must repeat for multiple data items.

Instead of copying HTML again and again, loops make code reusable and clean.

LWC provides two looping directives:

1. `for:each` – simple repetition
2. `iterator` – advanced control (first/last)

---

## 6. for:each Loop

Used for rendering a simple list of items.

### Syntax

```html
<template for:each={array} for:item="item" for:index="index">
    <!-- Repeatable template -->
</template>
```

### Attributes

* `for:each` → array to loop
* `for:item` → current item alias
* `for:index` → index of current item

---

### Key Attribute

Every looped element must have a `key`.

Why key is important:

* Helps LWC track changes efficiently
* Improves performance

Rules:

* Key must be a string or number
* Must be unique
* Do not use index as key

---

### for:each Loop Explained

```js
// Simple array of car names
cars = ["audi", "bmw", "maruti", "honda", "tata"]; 
```

```html
<!-- Looping through car list -->
<template for:each={cars} for:item="car">

    <!-- key uniquely identifies each element -->
    <ul key={car}>
        <li>{car}</li>
    </ul>

</template>
```

### Why key is mandatory

* Helps LWC track DOM changes
* Improves performance
* Must be unique

Do not use index as key.

---

## 7. iterator Loop

The iterator loop is used when you need extra control like identifying the first or last element.

### Syntax

```html
<template iterator:alias={array}>
    <!-- Repeatable template -->
</template>
```

---

### Iterator Properties

Using the iterator alias, you get access to:

* `value` → current item
* `index` → item index
* `first` → true if first item
* `last` → true if last item

---

### iterator Loop Explained

```js
ceoList = [
    { id: 1, name: "Ayush", city: "Hyderabad" },
    { id: 2, name: "Yadav", city: "Delhi" },
    { id: 3, name: "Salesforce", city: "Bangalore" }
];
```

```html
<template iterator:ceo={ceoList}>

    <!-- Unique key using object id -->
    <div key={ceo.value.id}>

        <!-- Shown only for first item -->
        <div if:true={ceo.first}>
            <strong>List of people and cities</strong>
        </div>

        <!-- Accessing object values using value -->
        <p>{ceo.value.city} : {ceo.value.name}</p>

        <!-- Shown only for last item -->
        <div if:true={ceo.last}>
            <strong>Thanks for visiting</strong>
        </div>

    </div>

</template>
```

### When to use iterator

* When first or last item needs special handling
* When additional metadata is required

---
## Reference Code Repository

For complete source code and full component implementation, refer to the GitHub repository below.

👉 https://github.com/officialayushyadav15/LWC-Connection-establishment-and-learnings

All components explained in this README (getters, conditional rendering, and template looping) are available in this repository. Refer to the respective component folders for the exact implementation.