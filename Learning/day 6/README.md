# Day 6: Lightning Web Components (LWC) – Components, Naming, and Data Binding

This day focuses on the core building blocks of Lightning Web Components. The goal is to understand how components are created, named, structured, and how data flows between JavaScript and HTML templates.
---

## 1. What is a Lightning Web Component

A Lightning Web Component (LWC) is a reusable UI unit in Salesforce. Each component lives inside its own folder and is made up of HTML, JavaScript, and configuration files.

A component controls:

* How data is handled (JavaScript)
* How data is displayed (HTML)
* Where it can be used in Salesforce (XML configuration)

---

## 2. Component Naming Convention

LWC has strict naming rules. These rules are important because Salesforce uses them internally to register and render components.

### Rules

* Must start with a lowercase letter
* Can contain only letters, numbers, or underscores
* Must be unique in the namespace
* No spaces allowed
* Cannot end with an underscore
* Cannot contain two consecutive underscores
* Hyphens (dashes) are not allowed

### Example

Valid name:

```
helloWorld
```

Invalid names:

```
HelloWorld
hello-world
hello__world
hello world
```

---

## 3. Ways to Create an LWC Component

There are two common ways to create a component.

### 1. Using the Terminal

```
sfdx force:lightning:component:create --type lwc -n helloWorld
```

This creates a new LWC component named `helloWorld` in the default `lwc` folder.

---

### 2. Using VS Code Command Palette

Steps:

1. Open VS Code
2. Go to **View → Command Palette**
3. Type **Create Lightning Web Component**
4. Press Enter
5. Enter the component name
6. Press Enter again to select the default path

This method is beginner-friendly and avoids typing mistakes.

---

## 4. Component Folder Structure

Each LWC component lives inside its own folder.

Example:

```
helloWorld
│
├── helloWorld.html
├── helloWorld.js
├── helloWorld.js-meta.xml
├── helloWorld.css
├── helloWorld.svg
├── moreSharedCode.js
└── __tests__
    └── helloWorld.test.js
```

### Default Files

These files must have the same name as the component:

* `helloWorld.html`
* `helloWorld.js`
* `helloWorld.js-meta.xml`

Only one file of each default type is allowed.

### Extra Files

* You can add any number of additional `.js` files
* Test files live inside the `__tests__` folder
* Test file name must match the component name

---

## 5. Naming Conventions Used in LWC

| Case Type  | Example     | Usage                                   |
| ---------- | ----------- | --------------------------------------- |
| camelCase  | helloWorld  | Component name                          |
| PascalCase | HelloWorld  | Component class name                    |
| kebab-case | hello-world | Component reference and HTML attributes |

Example usage in HTML:

```
<c-hello-world></c-hello-world>
```

---

## 6. Creating and Using an App

To display a component in Salesforce:

1. Go to **App Manager**
2. Create a new Lightning App
3. Open **Lightning App Builder**
4. Assign the component to a page

### Important Configuration

To make a component visible in App Builder, set `isExposed` to `true` in the configuration file.

```
<isExposed>true</isExposed>
```

---

## 7. Deploying Components to Salesforce

To push all local components to Salesforce:

```
sf project deploy start
```

This deploys the entire project metadata.

---

## 8. Data Binding in LWC

Data binding connects the JavaScript controller and the HTML template.

### One-Way Data Binding

Data flows from JavaScript to HTML.

#### JavaScript

```
fullname = "Salesforce Troop";
```

#### HTML

```
My Full Name is {fullname}
```

The value updates in the UI when the property changes in JavaScript.

---

## 9. Things to Remember About Templates

* Primitive values and objects can be accessed directly
* Use dot notation for objects
* Computed expressions are not allowed

  * `{2 + 2}` ❌
  * `{names[0]}` ❌
* Expressions must be valid identifiers

  * `{name}` ✅
  * `{user.name}` ✅
* Avoid spaces inside curly braces

  * `{data}` ✅
  * `{ data }` ❌

---

## 10. Two-Way Data Binding

Two-way binding allows data to move:

* From controller to template
* From template back to controller

This is done using event handlers.

### JavaScript

```
fullnameis = "Ayush Yadav";
title = "LWC";

changeHandler(event) {
    this.title = event.target.value;
}
```

### HTML

```
<lightning-input type="text" label="Enter Course name" onkeyup={changeHandler}></lightning-input>
<div>{fullnameis} is learning {title} in salesforce</div>
```

Any change in the input updates the JavaScript property.

---

## 11. @track Decorator

By default, LWC tracks only top-level property changes.

When dealing with objects or arrays, nested changes are not detected unless `@track` is used.

### Without @track

Only re-renders when the entire object is replaced.

### With @track

Nested property changes are observed automatically.

### Example

#### JavaScript

```
import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    @track address = {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    };

    trackchangeHandler(event) {
        this.address.city = event.target.value;
    }
}
```

#### HTML

```
<lightning-input type="text" label="Enter city" onkeyup={trackchangeHandler}></lightning-input>
<div>{address.city} is my city</div>
```

---

## 12. Using Salesforce Resources

* Lightning Component Library:
  [https://developer.salesforce.com/docs/component-library/overview/components](https://developer.salesforce.com/docs/component-library/overview/components)

* Lightning Design System:
  [https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2](https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2)

---

## Reference Code Repository

For complete source code and full component implementation, refer to the GitHub repository below.

👉 https://github.com/officialayushyadav15/LWC-Connection-establishment-and-learnings

All components explained in this README (getters, conditional rendering, and template looping) are available in this repository. Refer to the respective component folders for the exact implementation.
