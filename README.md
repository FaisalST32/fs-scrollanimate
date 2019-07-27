# fs-scrollanimate
  
A simple JavaScript library to animate your HTML elements when they are scrolled into view. This library doesn't have any dependencies and can be used with any webpage.

### CDN Links:

[https://cdn.jsdelivr.net/gh/FaisalST32/fs-lightbox@latest/src/js/fs-scrollanimate.min.js](https://cdn.jsdelivr.net/gh/FaisalST32/fs-scrollanimate@latest/src/js/fs-scrollanimate.min.js)  
[https://cdn.jsdelivr.net/gh/FaisalST32/fs-lightbox@latest/src/css/fs-scrollanimate.min.css](https://cdn.jsdelivr.net/gh/FaisalST32/fs-scrollanimate@latest/src/css/fs-scrollanimate.min.css)  
  
### NPM

npm i fs-scrollanimate

[https://www.npmjs.com/package/fs-scrollanimate](https://www.npmjs.com/package/fs-scrollanimate)

### Usage:

* To use this library, you can simply add a reference to the .js file at the end of the body of your html and the .css file in the head of your html page.  

* To animate an element when it's scrolled into view, you need to add the 'fs-scroll' class to that element.

* Next you need to add the animation class to the same element. At the moment, following classes are supported:

  * **fs-fadein**: Gives the element a fade effect when it's scrolled into view.

  * **fs-slideup**: The element will slide up with a fade-in effect when scrolled into view.

  * **fs-slideright**: The element will slide right with a fade-in effect when scrolled into view.
 
  * **fs-slideleft**: The element will slide left with a fade-in effect when scrolled into view.

* Additionally you can add a timing class to the animation. At the moment, following class is supported:
 
  * **fs-slow**: Slows down the animation.

* As an example, if you want to add **slide-up** animation to an element with a slowed down effect, you will do the following:

    **&lt;p class="fs-scroll fs-slideup fs-slow"&gt; This is a paragraph&lt;/p&gt;**

* That's it. Your elements will be animated when they are scrolled into view.
  
