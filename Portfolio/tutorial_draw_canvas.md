source: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
## `<canvas>` is an HTML element which can be used to draw graphics via scripting (JavaScript).

1. For instance
2. Draw graphs
3. Combine photos
4. Create simple animations


----
### Default size of canvas is 300px 150px

## Steps.

1. How to set up canvas 2D context.
```html
    <canvas id="tutorial" width="150" height = "150" ></canvas> 
```
    
1.1 The `<canvas>` element like `<img>`, `<video>`, `<audio>`... must be made accessible by providing fallback text to displayed when the media doesn't load.

1.2 If fallback content is not needed, a simple 

```html
<canvas id="foo" role="presentation" …></canvas>
```
is fully compatible with all browsers that support canvas at all. This should only be used if the canvas is purely presentational.

2. The rendering context
- We will focus on the 2D rendering

``` js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

---

## Drawing shapes with canvas

> Get into details of how to draw on the canvas!
> Learned how to draw rectangles, triangles, lines, arcs and curves.

There are three functions that draw rectangles on the canvas

```js
// Draws a filled rectangled
fillRect(x, y, width, height);

// Draws a rectangular outline.
strokeRect(x, y, width, height);

// Clears the specified rectangular area, making it fully transparent
clearRect(x, y, width, height);
```


### Drawing paths

> A path is a list of points

To make shapes using paths, we take some extra steps:

1. First, you create the path.
2. Then you use drawing commands([[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#paths]]) to draw into the path.
3. Once the path has been created, you can stroke or fill the path to render it
