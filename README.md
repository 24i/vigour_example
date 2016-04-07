## To use as a component
```shell
npm i vigour-play-example --save
```

```javascript
exports.thing = { type: 'example' }
```
To check code for isolated working example please look at [`test/index.js`](https://github.com/vigour-io/play-example/blob/master/test/index.js).


## To run in isolation
To be able to run in isolation, you need `vpack` runner and `vigour-element` for browser rendering.
```shell
npm i vpack -g && npm i
```
And then to run using `vpack`, use:
```shell
npm run dev
```
