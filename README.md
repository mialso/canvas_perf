#### train repo for canvas performance measurement with redux store

##### what's inside:
* `webpack` simple setup
* `eslint` "config-airbnb-base" setup
* simple `http-server` to serve static resources
* `madge` to create simple dependcy graph and checks
* `redux` with dev-tools attached (please install browser extension on your own)
> NOTE: instead of conventional redux `action` naming, the `message` is used

#### how to:
> npm install + npm run build:watch + npm run dev:server -> open browser localhost:8099

* just webpack build: `npm run build`,
* webpack build and watch: `npm run build:watch`
* run dev server: `npm run dev:server`
> more at `package.json`

##### in order to adjust the number of "Smiles"
> goto `src/smile/reducer.js` and change `line 8` as you wish
> `createSmiles({ lines: 3, perLine: 3 }),`

#### app:
* canvas on-state-change drawer
* []TODO: canvas raf render
* the ui layer with raw dom element rendering

#### "Smile" model:
* dedicated canvas renderer
* custom items creator in order to check different amounts of elements
* conventional split: message, reducer, selector, 
* [TODO] smile/model with different colors

##### ui components
* `Mover` to render with mouse move
* `Toolbar` with some 
* `PerfMeter` is an example of "elm" style component, when everything is in one file
