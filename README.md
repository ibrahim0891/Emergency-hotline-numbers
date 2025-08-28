### What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

**Ans:** These are some method to select elements from DOM. Althought they all are used to select elements, there are some difference between them. 
`getElementById()` method select an element with a given id. If there are more than one element with same id, this method will select only the first one. 
`getElementsByClassName()` method is used to select multiple elements with the same class name. This method returns a live HTML collection, which means the list will automatically update if the DOM changes. For example, if JavaScript adds a new element with the given class name, the collection will dynamically include that new element.
`querySelector()` This selector somewhat works like getElmentById. Main difference is that getElementById() can select with id, but querySelector() can select the **first element** with not only id but also with other css selectors. 
`querySelectorAll()` this works similarly to getElementByClassName. But it can select multiple elements with given css selector and return a static NodeList. By static it means it does not update on DOM change. 



### How do you create and insert a new element into the DOM?

**Ans:** We can create and insert element into dom with JS DOM methods.
To create an elelment we can pass html tag name in the `document.createElement()` function. 
then we have to use `docuemtn.appendChild()` method to add the newly created element in the docuemnt. 
 

### What is Event Bubbling and how does it work?
**Ans:** This is a system of event trigger on the DOM.Where the event on a elemnet is passed from the parents and grandparent to all the way to the root and window object. 
If there is a button on the body and an event is triggered on it, it executes the task and after exection, this event start moving to the below parents and if it finds any other events on the way, they are also get triggered.
In this case, the flow will be `button > body > html > document > window` 


### What is Event Delegation in JavaScript? Why is it useful?

**Ans:** Event delegaiotn is a tricky way to trigger same event on multiple element using just only one eventlistener. 
Here on this trick, we have to attach an event listener in the parent element. now when we click or trigger any other event on a child , this actually means to click on the parent. we can get the child when the event is triggerd  on the parent. 
THis way we can perform operation on the child even though we have not added any event listener to the childs. 
This is helpful when we have a lots of child element to run a event on each of them. This saves memmory and coding effort at the same time and improve performance because of low useges of eventListeners.

### What is the difference between `preventDefault()` and `stopPropagation()` methods?
**Ans:** Both methods are called on event object. They both control the flow of event but they perform diffent tasks. 
`preventDefault()` stops the default events of the html elements and let the custom event run after it. 
`stopPropagtion()` method stops the bubbling of events. Which means, it stops an event going down to the parents from where it has triggerd.  