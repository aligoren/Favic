# Favic: Favicon Changer

When you change the tab in the browser, your site's favicon will be replaced by **Favic**.

## Usage

**Params**

    old: Default favicon
    new: When change the tab in the browser, you'll see this icon
    timeout: When icon will change, default: 0

**HTML Structure**

```html
<link rel="icon" href="https://assets-cdn.github.com/favicon.ico">
<script src="favic.js"></script>
<script src="example.js"></script>
```

**Just initialize favic class**

```js
new Favic({
    old: 'https://assets-cdn.github.com/favicon.ico',
    new: 'https://abs.twimg.com/favicons/favicon.ico',
    timeout: 0,
})
```