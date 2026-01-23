# Day 1: Key Takeaways from Learning LWC (From Scratch)

This README captures everything I learned on Day 1 while starting with Lightning Web Components (LWC). The focus was on understanding the fundamentals of web development that LWC is built on: HTML, CSS, and a basic introduction to design systems like SLDS.

---

## 1. Core Components of a Web Page

Every web page is built using three core technologies:

* **HTML (HyperText Markup Language)**
  Defines the structure and content of the web page.

* **CSS (Cascading Style Sheets)**
  Controls how the page looks, including layout, colors, spacing, and fonts.

* **JavaScript**
  Adds behavior, logic, and interactivity to the page.

These three work together to create a complete user interface.

---

## 2. Basics of HTML

HTML is used to structure a web page. It tells the browser what each piece of content represents. HTML code is usually written in a file named `index.html`.

### HTML5 Declaration

```html
<!DOCTYPE html>
```

This declaration tells the browser that the document follows the HTML5 standard.

### Common HTML Tags

Some commonly used HTML tags include:

* `<html></html>`: Root element of the HTML document
* `<div>`: Defines a section or container
* `<p>`: Paragraph element
* `<img>`: Used to display images
* `<h1>` to `<h6>`: Headings, from largest to smallest
* `<a>`: Anchor tag used for links
* `<ul>`: Unordered list

### Example

```html
<p>Below is an image tag</p>
<img src="https://picsum.photos/id/0/200/300">
```

---

## 3. HTML Attributes

Attributes provide additional information about HTML elements. They are written as **name-value pairs** inside the opening tag.

### Syntax

```html
name="value"
```

### Example

```html
<a href="https://google.com">Go to Google</a>
```

Here, `href` is an attribute that defines the destination of the link.

---

## 4. Data Attributes

Data attributes are used to store custom data inside HTML elements. These values can later be accessed using JavaScript.

### Example

```html
<div data_name="ayush">Username</div>
```

---

## 5. Block-Level and Inline Elements

HTML elements are mainly divided into block-level and inline elements.

### Block-Level Elements

* Always start on a new line
* Take up the full available width

**Examples:** `div`, `p`, `h1`–`h6`, `ul`, `header`, `article`

### Inline Elements

* Do not start on a new line
* Take only the space required by their content

**Examples:** `span`, `img`, `a`, `label`, `strong`

### Example

```html
<div>
    I am a block-level element
    <span>I am an inline element inside a block-level element</span>
</div>
```

---

## 6. Complete HTML Example (Day 1)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Day 1</title>
</head>
<body>
    <a href="https://google.com">Go to Google</a>
    <p>Below is image tag</p>
    <img src="https://picsum.photos/id/0/200/300">

    <div>Welcome to my first day</div>
    <p>This is a paragraph (used to add margin before and after text)</p>

    <ul>
        <li>Used to create a list</li>
        <li>Second line of list</li>
    </ul>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>

    <p>---------------------------------------------</p>

    <p>Below is the execution of block-level and inline elements</p>

    <div>
        I am a block-level tag
        <span>I am a span tag and I am inline</span>
    </div>

    <div>I am another block-level element</div>

    <strong>I am an inline tag used to make text bold</strong>
    <a href="https://google.com">I am also an inline tag</a>
</body>
</html>
```

---

## 7. Basics of CSS

CSS is used to style HTML elements. It defines how elements look on the page. CSS is usually written in a separate file called `style.css` and linked to the HTML file.

### CSS Syntax

```css
selector {
    property: value;
}
```

* **Selector**: Specifies which HTML element to style
* **Property**: Defines what aspect to change
* **Value**: Sets the value for that property

---

## 8. CSS Selectors

### Element Selector

Targets HTML elements directly.

```css
p {
    color: blue;
}
```

### ID Selector

* Uses the `id` attribute
* Must be unique
* Not used in LWC

```css
#User {
    color: aqua;
    font-size: 30px;
}
```

### Class Selector

Used to apply styles to multiple elements.

```css
.para {
    border: 9px solid blue;
}
```

---

## 9. Types of CSS Styles

There are three ways to apply CSS:

1. **Internal CSS** – Written inside a `<style>` tag (not used in LWC)
2. **Inline CSS** – Written directly inside HTML tags
3. **External CSS / Third-Party Libraries**

Popular third-party libraries include:

* Bootstrap
* Salesforce Lightning Design System (SLDS)

For third-party libraries, we generally use **cdnjs**. The process is simple:

* Go to [https://cdnjs.com/](https://cdnjs.com/)
* Search for the CSS library you need
* Copy the provided CDN link
* Paste it inside the `<link>` tag in your HTML file

When the page loads, the browser refers to that CDN link, downloads the CSS, and applies the styles automatically.

These libraries are imported using CDN links.

### Example

```html
<link rel="stylesheet" href="./style.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/design-system/2.28.0/styles/salesforce-lightning-design-system.min.css">
```

---

## 10. Salesforce Lightning Design System (SLDS)

SLDS provides predefined utility classes that help maintain a consistent Salesforce look and feel. Once the SLDS stylesheet is imported, these classes can be used directly.

To explore and understand available SLDS utility classes, Salesforce provides official documentation:

* [https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2](https://www.lightningdesignsystem.com/2e1ef8501/p/85bd85-lightning-design-system-2)

Under the **Utilities** section, all supported classes are documented. We simply import the SLDS stylesheet and use these classes exactly as provided by Salesforce, without modifying them.

### Example

```html
<div class="slds-text-heading_large">
    The quick brown fox jumps over the lazy dog.
</div>
```

---

## 11. CSS Box Model

Every HTML element follows the CSS box model. It consists of:

* **Content**: The actual content inside the element
* **Padding**: Space between the content and the border
* **Border**: Wraps around the padding
* **Margin**: Space outside the border

### Box Model Diagram

![CSS Box Model](box_model.png)

### Example

```css
.box_padding {
    padding: 30px;
    border: 1px solid brown;
}

.box_margin {
    margin: 30px;
    border: 1px solid rgb(69, 42, 165);
}
```

---

## 12. Complete CSS Example

```css
div {
    color: rosybrown;
}

#User {
    color: aqua;
    font-size: 30px;
}

.para {
    border: 9px solid blue;
}

.box_padding {
    padding: 30px;
    border: 1px solid brown;
}

.box_margin {
    margin: 30px;
    border: 1px solid rgb(69, 42, 165);
}
```

---