![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# DOM Manipulation

## Objectives
- Use `document` to manipulate html
- Bridge together `javascript` and `html` and `css`

## Requirements
- Indepth understanding of functions
- Basic understanding of objects
- Use if/switch

## DOM Introduction (15min)

### What Is Dom
DOM stands Document Object Model.

DOM is a description of a website (HTML) and it defines the relationship each element has with another. Below is a picture giving a short overview of a table

![](http://www.w3.org/TR/DOM-Level-2-Core/images/table.gif)

Another way to visualize this is using the `Element` tab in chrome. You will see arrows on the left and by expanding it it will tell you how the `inner html` is constructed and allow us to have a `parent & child` relationship

![](images/element.png)

Now that we have this structure, we can now apply `css` and find specific element using `javascript`

Another concept to get a hold that that the DOM is actually not your html. What this mean is that DOM is something that looks like your HTML. But in some cases, it will not look the same. For example, there are mistakes in your HTML and the browser has fixed them for you. Let's say you have a <table> element in your HTML and leave out the required <tbody> element. The browser will just insert that <tbody> for you.

### What we do to DOM using Javascript
Since DOM server as a bridge between `javascript` and `html`, we can actually use `javascript` to manipulate the `DOM` to manipulate our webpage or we can simply `retrieve` information from `html` using `javascript`.

If you go to [this link](http://www.w3schools.com/jsref/dom_obj_document.asp) you can see all of DOM's methods available in our browser. By using these methods, you can add, remove, and edit new `element & attributes`. You can return a array of `img` if your document. You can target specific `class` or `id` and retrieve its underlying `html`. And many more things.

## Codealong (10min)
Lets start by retrieving all the `div` in a our [Lab: CSS Site Replication](https://github.com/wdi-hk-9/lab-css-site-replication)'s `solution-code/index.html`

`var x = document.getElementsByTagName('li')`

This will return us an array of `nodes` that represent our `html element`

If we go to [this link](http://www.w3schools.com/jsref/dom_obj_all.asp) we will be able to see methods that we can use on specific `node`. For example, `someNodeElement.innerHTML` returns you a string that is inside an element. Like `"hello world"` in `<div>hello world</div>`. Or it allows you to change the content by passing it a string variable like `someNodeElement.innerHTML = "destroy the world"`

You can also `chain` multiple methods. such as `var firstChildOfChildOfFooter = document.getElementsByTagName('footer')[0].firstElementChild.firstElementChild`

## Independence Practice (15min)
Head to these two link. [this link](http://www.w3schools.com/jsref/dom_obj_document.asp) to see all the methods there is for `document` and [this link](http://www.w3schools.com/jsref/dom_obj_all.asp) to see all the methods there are for `specific node`.

Spend sometime adding new elements, editing new elements, deleting elements.

Get very familiar with these specific `document methods`.

``` javascript
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
```

Get very familar with these specific `node methods`.

``` javascript
someNodeElement.getAttribute()
someNodeElement.innerHTML
someNodeElement.style
someNodeElement.className
```
