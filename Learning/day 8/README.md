## Day 8: Component Composition, DOM & Shadow DOM in LWC

Day 8 focused on how Lightning Web Components are structured and rendered in the browser. I learned how components are composed, how the DOM works under the hood, and why Shadow DOM is a core concept in LWC.

---

### Component Composition in LWC

Component composition means **adding one component inside another component**.
Instead of building everything in one file, you break the UI into small, reusable components and combine them.

This makes components easier to read, test, and maintain.

#### Example: Parent and Child Component

**Parent Component (`helloParent.html`)**

```html
<template>
    <lightning-card title="Hello Parent Component">
        <div class="slds-var-m-around_medium">
            <h1>Hello I am Ayush in Parent Component</h1>
            <c-hellochild></c-hellochild>
        </div>
    </lightning-card>
</template>
```

**Child Component (`helloChild.html`)**

```html
<template>
    <lightning-card title="Hello Child Component">
        <div class="slds-var-m-around_medium">
            <h1>Hello I am Ayush in Child Component</h1>
        </div>
    </lightning-card>
</template>
```

Here, the parent component embeds the child component using:

```html
<c-hellochild></c-hellochild>
```

This is component composition in action.

---

### How Child Component Names Work in LWC

LWC uses **kebab-case** for component tags.

Rules:

* Convert camelCase to lowercase
* Add hyphens before capital letters
* Prefix with `c-`
* Avoid continuous capital letters in component names

Examples:

| JavaScript Component Name | HTML Tag                   |
| ------------------------- | -------------------------- |
| `childComponent`          | `<c-child-component>`      |
| `childComponentDemo`      | `<c-child-component-demo>` |
| `sampleDemoLWC`           | `<c-sample-demo-l-w-c>`    |

---

### What is the DOM?

DOM stands for **Document Object Model**.

It is a programming interface that represents an HTML page as a **tree structure**, where:

* Every HTML tag is a node
* Text inside elements is also a node
* JavaScript can access and manipulate these nodes

#### Example HTML Structure

```html
<html>
  <head>
    <title>Zero to Hero</title>
  </head>
  <body>
    <h1>Heading</h1>
    <a href="https://salesforcetroop.com">Link</a>
  </body>
</html>
```

In the DOM:

* `<html>` is the root element
* `<head>` and `<body>` are child nodes
* `<h1>` and `<a>` are elements inside `<body>`
* Text like `"Heading"` and `"Link"` are text nodes

The browser builds this tree automatically and JavaScript interacts with it.

---

### What is Shadow DOM?

Shadow DOM introduces **encapsulation** to the DOM.

It allows a component to have its own **private DOM tree**, separate from the main document (Light DOM).

In LWC, **every component uses Shadow DOM by default**.

#### Key Parts of Shadow DOM

* **Shadow Host**: The element that owns the shadow DOM
* **Shadow Root**: The root of the shadow DOM tree
* **Shadow DOM**: The hidden DOM attached to the host

---

### Why Shadow DOM is Important

Shadow DOM provides strong isolation:

* DOM queries cannot cross the shadow boundary
* CSS styles do not leak in or out
* Event propagation is controlled
* Components stay predictable and safe

This is why LWC components don’t accidentally break each other.

---

### Shadow DOM Example (Vanilla JavaScript)

```html
<div id="host"></div>
<button onclick="fetchPtag()">Click me</button>

<script>
    const elem = document.querySelector('#host');
    const shadowRoot = elem.attachShadow({ mode: 'open' });

    shadowRoot.innerHTML = `<p>I am Shadow DOM</p>`;

    function fetchPtag() {
        let tags = document.querySelectorAll('p');
        console.log(tags);
    }
</script>
```

#### What Happens Here

* A shadow DOM is attached to `#host`
* The `<p>` inside shadow DOM is hidden from `document.querySelectorAll`
* Clicking the button only fetches `<p>` elements from the Light DOM
* Shadow DOM content remains isolated

This same concept is used internally by LWC.

---

### Functionalities of Shadow DOM in LWC

* Encapsulates HTML, CSS, and JS
* Prevents global CSS conflicts
* Keeps DOM queries scoped to the component
* Ensures predictable rendering
* Improves component reusability

