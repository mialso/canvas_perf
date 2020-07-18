/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar compose = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\").compose;\n\nexports.__esModule = true;\nexports.composeWithDevTools = (\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :\n    function() {\n      if (arguments.length === 0) return undefined;\n      if (typeof arguments[0] === 'object') return compose;\n      return compose.apply(null, arguments);\n    }\n);\n\nexports.devToolsEnhancer = (\n  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?\n    window.__REDUX_DEVTOOLS_EXTENSION__ :\n    function() { return function(noop) { return noop; } }\n);\n\n\n//# sourceURL=webpack:///./node_modules/redux-devtools-extension/index.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: __DO_NOT_USE__ActionTypes, applyMiddleware, bindActionCreators, combineReducers, compose, createStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__DO_NOT_USE__ActionTypes\", function() { return ActionTypes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMiddleware\", function() { return applyMiddleware; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindActionCreators\", function() { return bindActionCreators; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducers\", function() { return combineReducers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStore\", function() { return createStore; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n\n\n/**\n * These are private action types reserved by Redux.\n * For any unknown actions, you must return the current state.\n * If the current state is undefined, you must return the initial state.\n * Do not reference these action types directly in your code.\n */\nvar randomString = function randomString() {\n  return Math.random().toString(36).substring(7).split('').join('.');\n};\n\nvar ActionTypes = {\n  INIT: \"@@redux/INIT\" + randomString(),\n  REPLACE: \"@@redux/REPLACE\" + randomString(),\n  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\n    return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\n  }\n};\n\n/**\n * @param {any} obj The object to inspect.\n * @returns {boolean} True if the argument appears to be a plain object.\n */\nfunction isPlainObject(obj) {\n  if (typeof obj !== 'object' || obj === null) return false;\n  var proto = obj;\n\n  while (Object.getPrototypeOf(proto) !== null) {\n    proto = Object.getPrototypeOf(proto);\n  }\n\n  return Object.getPrototypeOf(obj) === proto;\n}\n\n/**\n * Creates a Redux store that holds the state tree.\n * The only way to change the data in the store is to call `dispatch()` on it.\n *\n * There should only be a single store in your app. To specify how different\n * parts of the state tree respond to actions, you may combine several reducers\n * into a single reducer function by using `combineReducers`.\n *\n * @param {Function} reducer A function that returns the next state tree, given\n * the current state tree and the action to handle.\n *\n * @param {any} [preloadedState] The initial state. You may optionally specify it\n * to hydrate the state from the server in universal apps, or to restore a\n * previously serialized user session.\n * If you use `combineReducers` to produce the root reducer function, this must be\n * an object with the same shape as `combineReducers` keys.\n *\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\n * to enhance the store with third-party capabilities such as middleware,\n * time travel, persistence, etc. The only store enhancer that ships with Redux\n * is `applyMiddleware()`.\n *\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\n * and subscribe to changes.\n */\n\nfunction createStore(reducer, preloadedState, enhancer) {\n  var _ref2;\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\n    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\n  }\n\n  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\n    enhancer = preloadedState;\n    preloadedState = undefined;\n  }\n\n  if (typeof enhancer !== 'undefined') {\n    if (typeof enhancer !== 'function') {\n      throw new Error('Expected the enhancer to be a function.');\n    }\n\n    return enhancer(createStore)(reducer, preloadedState);\n  }\n\n  if (typeof reducer !== 'function') {\n    throw new Error('Expected the reducer to be a function.');\n  }\n\n  var currentReducer = reducer;\n  var currentState = preloadedState;\n  var currentListeners = [];\n  var nextListeners = currentListeners;\n  var isDispatching = false;\n  /**\n   * This makes a shallow copy of currentListeners so we can use\n   * nextListeners as a temporary list while dispatching.\n   *\n   * This prevents any bugs around consumers calling\n   * subscribe/unsubscribe in the middle of a dispatch.\n   */\n\n  function ensureCanMutateNextListeners() {\n    if (nextListeners === currentListeners) {\n      nextListeners = currentListeners.slice();\n    }\n  }\n  /**\n   * Reads the state tree managed by the store.\n   *\n   * @returns {any} The current state tree of your application.\n   */\n\n\n  function getState() {\n    if (isDispatching) {\n      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\n    }\n\n    return currentState;\n  }\n  /**\n   * Adds a change listener. It will be called any time an action is dispatched,\n   * and some part of the state tree may potentially have changed. You may then\n   * call `getState()` to read the current state tree inside the callback.\n   *\n   * You may call `dispatch()` from a change listener, with the following\n   * caveats:\n   *\n   * 1. The subscriptions are snapshotted just before every `dispatch()` call.\n   * If you subscribe or unsubscribe while the listeners are being invoked, this\n   * will not have any effect on the `dispatch()` that is currently in progress.\n   * However, the next `dispatch()` call, whether nested or not, will use a more\n   * recent snapshot of the subscription list.\n   *\n   * 2. The listener should not expect to see all state changes, as the state\n   * might have been updated multiple times during a nested `dispatch()` before\n   * the listener is called. It is, however, guaranteed that all subscribers\n   * registered before the `dispatch()` started will be called with the latest\n   * state by the time it exits.\n   *\n   * @param {Function} listener A callback to be invoked on every dispatch.\n   * @returns {Function} A function to remove this change listener.\n   */\n\n\n  function subscribe(listener) {\n    if (typeof listener !== 'function') {\n      throw new Error('Expected the listener to be a function.');\n    }\n\n    if (isDispatching) {\n      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n    }\n\n    var isSubscribed = true;\n    ensureCanMutateNextListeners();\n    nextListeners.push(listener);\n    return function unsubscribe() {\n      if (!isSubscribed) {\n        return;\n      }\n\n      if (isDispatching) {\n        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\n      }\n\n      isSubscribed = false;\n      ensureCanMutateNextListeners();\n      var index = nextListeners.indexOf(listener);\n      nextListeners.splice(index, 1);\n      currentListeners = null;\n    };\n  }\n  /**\n   * Dispatches an action. It is the only way to trigger a state change.\n   *\n   * The `reducer` function, used to create the store, will be called with the\n   * current state tree and the given `action`. Its return value will\n   * be considered the **next** state of the tree, and the change listeners\n   * will be notified.\n   *\n   * The base implementation only supports plain object actions. If you want to\n   * dispatch a Promise, an Observable, a thunk, or something else, you need to\n   * wrap your store creating function into the corresponding middleware. For\n   * example, see the documentation for the `redux-thunk` package. Even the\n   * middleware will eventually dispatch plain object actions using this method.\n   *\n   * @param {Object} action A plain object representing “what changed”. It is\n   * a good idea to keep actions serializable so you can record and replay user\n   * sessions, or use the time travelling `redux-devtools`. An action must have\n   * a `type` property which may not be `undefined`. It is a good idea to use\n   * string constants for action types.\n   *\n   * @returns {Object} For convenience, the same action object you dispatched.\n   *\n   * Note that, if you use a custom middleware, it may wrap `dispatch()` to\n   * return something else (for example, a Promise you can await).\n   */\n\n\n  function dispatch(action) {\n    if (!isPlainObject(action)) {\n      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\n    }\n\n    if (typeof action.type === 'undefined') {\n      throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\n    }\n\n    if (isDispatching) {\n      throw new Error('Reducers may not dispatch actions.');\n    }\n\n    try {\n      isDispatching = true;\n      currentState = currentReducer(currentState, action);\n    } finally {\n      isDispatching = false;\n    }\n\n    var listeners = currentListeners = nextListeners;\n\n    for (var i = 0; i < listeners.length; i++) {\n      var listener = listeners[i];\n      listener();\n    }\n\n    return action;\n  }\n  /**\n   * Replaces the reducer currently used by the store to calculate the state.\n   *\n   * You might need this if your app implements code splitting and you want to\n   * load some of the reducers dynamically. You might also need this if you\n   * implement a hot reloading mechanism for Redux.\n   *\n   * @param {Function} nextReducer The reducer for the store to use instead.\n   * @returns {void}\n   */\n\n\n  function replaceReducer(nextReducer) {\n    if (typeof nextReducer !== 'function') {\n      throw new Error('Expected the nextReducer to be a function.');\n    }\n\n    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\n    // Any reducers that existed in both the new and old rootReducer\n    // will receive the previous state. This effectively populates\n    // the new state tree with any relevant data from the old one.\n\n    dispatch({\n      type: ActionTypes.REPLACE\n    });\n  }\n  /**\n   * Interoperability point for observable/reactive libraries.\n   * @returns {observable} A minimal observable of state changes.\n   * For more information, see the observable proposal:\n   * https://github.com/tc39/proposal-observable\n   */\n\n\n  function observable() {\n    var _ref;\n\n    var outerSubscribe = subscribe;\n    return _ref = {\n      /**\n       * The minimal observable subscription method.\n       * @param {Object} observer Any object that can be used as an observer.\n       * The observer object should have a `next` method.\n       * @returns {subscription} An object with an `unsubscribe` method that can\n       * be used to unsubscribe the observable from the store, and prevent further\n       * emission of values from the observable.\n       */\n      subscribe: function subscribe(observer) {\n        if (typeof observer !== 'object' || observer === null) {\n          throw new TypeError('Expected the observer to be an object.');\n        }\n\n        function observeState() {\n          if (observer.next) {\n            observer.next(getState());\n          }\n        }\n\n        observeState();\n        var unsubscribe = outerSubscribe(observeState);\n        return {\n          unsubscribe: unsubscribe\n        };\n      }\n    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\n      return this;\n    }, _ref;\n  } // When a store is created, an \"INIT\" action is dispatched so that every\n  // reducer returns their initial state. This effectively populates\n  // the initial state tree.\n\n\n  dispatch({\n    type: ActionTypes.INIT\n  });\n  return _ref2 = {\n    dispatch: dispatch,\n    subscribe: subscribe,\n    getState: getState,\n    replaceReducer: replaceReducer\n  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = observable, _ref2;\n}\n\n/**\n * Prints a warning in the console if it exists.\n *\n * @param {String} message The warning message.\n * @returns {void}\n */\nfunction warning(message) {\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error(message);\n  }\n  /* eslint-enable no-console */\n\n\n  try {\n    // This error was thrown as a convenience so that if you enable\n    // \"break on all exceptions\" in your console,\n    // it would pause the execution at this line.\n    throw new Error(message);\n  } catch (e) {} // eslint-disable-line no-empty\n\n}\n\nfunction getUndefinedStateErrorMessage(key, action) {\n  var actionType = action && action.type;\n  var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\n  return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\n}\n\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\n  var reducerKeys = Object.keys(reducers);\n  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\n\n  if (reducerKeys.length === 0) {\n    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\n  }\n\n  if (!isPlainObject(inputState)) {\n    return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\n  }\n\n  var unexpectedKeys = Object.keys(inputState).filter(function (key) {\n    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\n  });\n  unexpectedKeys.forEach(function (key) {\n    unexpectedKeyCache[key] = true;\n  });\n  if (action && action.type === ActionTypes.REPLACE) return;\n\n  if (unexpectedKeys.length > 0) {\n    return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\n  }\n}\n\nfunction assertReducerShape(reducers) {\n  Object.keys(reducers).forEach(function (key) {\n    var reducer = reducers[key];\n    var initialState = reducer(undefined, {\n      type: ActionTypes.INIT\n    });\n\n    if (typeof initialState === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\n    }\n\n    if (typeof reducer(undefined, {\n      type: ActionTypes.PROBE_UNKNOWN_ACTION()\n    }) === 'undefined') {\n      throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\n    }\n  });\n}\n/**\n * Turns an object whose values are different reducer functions, into a single\n * reducer function. It will call every child reducer, and gather their results\n * into a single state object, whose keys correspond to the keys of the passed\n * reducer functions.\n *\n * @param {Object} reducers An object whose values correspond to different\n * reducer functions that need to be combined into one. One handy way to obtain\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\n * undefined for any action. Instead, they should return their initial state\n * if the state passed to them was undefined, and the current state for any\n * unrecognized action.\n *\n * @returns {Function} A reducer function that invokes every reducer inside the\n * passed object, and builds a state object with the same shape.\n */\n\n\nfunction combineReducers(reducers) {\n  var reducerKeys = Object.keys(reducers);\n  var finalReducers = {};\n\n  for (var i = 0; i < reducerKeys.length; i++) {\n    var key = reducerKeys[i];\n\n    if (true) {\n      if (typeof reducers[key] === 'undefined') {\n        warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\n      }\n    }\n\n    if (typeof reducers[key] === 'function') {\n      finalReducers[key] = reducers[key];\n    }\n  }\n\n  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\n  // keys multiple times.\n\n  var unexpectedKeyCache;\n\n  if (true) {\n    unexpectedKeyCache = {};\n  }\n\n  var shapeAssertionError;\n\n  try {\n    assertReducerShape(finalReducers);\n  } catch (e) {\n    shapeAssertionError = e;\n  }\n\n  return function combination(state, action) {\n    if (state === void 0) {\n      state = {};\n    }\n\n    if (shapeAssertionError) {\n      throw shapeAssertionError;\n    }\n\n    if (true) {\n      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\n\n      if (warningMessage) {\n        warning(warningMessage);\n      }\n    }\n\n    var hasChanged = false;\n    var nextState = {};\n\n    for (var _i = 0; _i < finalReducerKeys.length; _i++) {\n      var _key = finalReducerKeys[_i];\n      var reducer = finalReducers[_key];\n      var previousStateForKey = state[_key];\n      var nextStateForKey = reducer(previousStateForKey, action);\n\n      if (typeof nextStateForKey === 'undefined') {\n        var errorMessage = getUndefinedStateErrorMessage(_key, action);\n        throw new Error(errorMessage);\n      }\n\n      nextState[_key] = nextStateForKey;\n      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\n    }\n\n    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\n    return hasChanged ? nextState : state;\n  };\n}\n\nfunction bindActionCreator(actionCreator, dispatch) {\n  return function () {\n    return dispatch(actionCreator.apply(this, arguments));\n  };\n}\n/**\n * Turns an object whose values are action creators, into an object with the\n * same keys, but with every function wrapped into a `dispatch` call so they\n * may be invoked directly. This is just a convenience method, as you can call\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\n *\n * For convenience, you can also pass an action creator as the first argument,\n * and get a dispatch wrapped function in return.\n *\n * @param {Function|Object} actionCreators An object whose values are action\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\n * syntax. You may also pass a single function.\n *\n * @param {Function} dispatch The `dispatch` function available on your Redux\n * store.\n *\n * @returns {Function|Object} The object mimicking the original object, but with\n * every action creator wrapped into the `dispatch` call. If you passed a\n * function as `actionCreators`, the return value will also be a single\n * function.\n */\n\n\nfunction bindActionCreators(actionCreators, dispatch) {\n  if (typeof actionCreators === 'function') {\n    return bindActionCreator(actionCreators, dispatch);\n  }\n\n  if (typeof actionCreators !== 'object' || actionCreators === null) {\n    throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\n  }\n\n  var boundActionCreators = {};\n\n  for (var key in actionCreators) {\n    var actionCreator = actionCreators[key];\n\n    if (typeof actionCreator === 'function') {\n      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\n    }\n  }\n\n  return boundActionCreators;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    keys.push.apply(keys, Object.getOwnPropertySymbols(object));\n  }\n\n  if (enumerableOnly) keys = keys.filter(function (sym) {\n    return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n  });\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(source, true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(source).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\n/**\n * Composes single-argument functions from right to left. The rightmost\n * function can take multiple arguments as it provides the signature for\n * the resulting composite function.\n *\n * @param {...Function} funcs The functions to compose.\n * @returns {Function} A function obtained by composing the argument functions\n * from right to left. For example, compose(f, g, h) is identical to doing\n * (...args) => f(g(h(...args))).\n */\nfunction compose() {\n  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\n    funcs[_key] = arguments[_key];\n  }\n\n  if (funcs.length === 0) {\n    return function (arg) {\n      return arg;\n    };\n  }\n\n  if (funcs.length === 1) {\n    return funcs[0];\n  }\n\n  return funcs.reduce(function (a, b) {\n    return function () {\n      return a(b.apply(void 0, arguments));\n    };\n  });\n}\n\n/**\n * Creates a store enhancer that applies middleware to the dispatch method\n * of the Redux store. This is handy for a variety of tasks, such as expressing\n * asynchronous actions in a concise manner, or logging every action payload.\n *\n * See `redux-thunk` package as an example of the Redux middleware.\n *\n * Because middleware is potentially asynchronous, this should be the first\n * store enhancer in the composition chain.\n *\n * Note that each middleware will be given the `dispatch` and `getState` functions\n * as named arguments.\n *\n * @param {...Function} middlewares The middleware chain to be applied.\n * @returns {Function} A store enhancer applying the middleware.\n */\n\nfunction applyMiddleware() {\n  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\n    middlewares[_key] = arguments[_key];\n  }\n\n  return function (createStore) {\n    return function () {\n      var store = createStore.apply(void 0, arguments);\n\n      var _dispatch = function dispatch() {\n        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\n      };\n\n      var middlewareAPI = {\n        getState: store.getState,\n        dispatch: function dispatch() {\n          return _dispatch.apply(void 0, arguments);\n        }\n      };\n      var chain = middlewares.map(function (middleware) {\n        return middleware(middlewareAPI);\n      });\n      _dispatch = compose.apply(void 0, chain)(store.dispatch);\n      return _objectSpread2({}, store, {\n        dispatch: _dispatch\n      });\n    };\n  };\n}\n\n/*\n * This is a dummy function to check if the function name has been altered by minification.\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\n */\n\nfunction isCrushed() {}\n\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\n  warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! store/index */ \"./src/store/index.js\");\n/* harmony import */ var ui_Mover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/Mover */ \"./src/ui/Mover.js\");\n/* harmony import */ var ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/Toolbar */ \"./src/ui/Toolbar.js\");\n/* harmony import */ var ui_Canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/Canvas */ \"./src/ui/Canvas.js\");\n/* harmony import */ var ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/PerfMeter */ \"./src/ui/PerfMeter.js\");\n\n\n\n\n\n\nfunction runApplication() {\n    // create store first\n    const store = Object(store_index__WEBPACK_IMPORTED_MODULE_0__[\"initStore\"])();\n    // create the ui\n    Object(ui_Mover__WEBPACK_IMPORTED_MODULE_1__[\"createMover\"])(store)(document.querySelector('.MapMover'));\n    Object(ui_Toolbar__WEBPACK_IMPORTED_MODULE_2__[\"createToolbar\"])(store)(document.querySelector('.ControlPanel'));\n    const updatePerfMeter = Object(ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__[\"createPerfMeter\"])(store)(document.querySelector('.PerfMeter'));\n    // create canvas\n    const drawCanvas = Object(ui_Canvas__WEBPACK_IMPORTED_MODULE_3__[\"createCanvas\"])(store)(document.getElementById('perfMe'));\n\n    // render canvas first time\n    drawCanvas();\n    // subscribe to subsequent state updates\n    // note - those are gonna be called on each \"dispatch(message)\" regardless state change\n    store.subscribe(drawCanvas);\n    store.subscribe(updatePerfMeter);\n}\n\ndocument.addEventListener('DOMContentLoaded', runApplication);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/smile/itemCreator.js":
/*!**********************************!*\
  !*** ./src/smile/itemCreator.js ***!
  \**********************************/
/*! exports provided: createSmiles, colorItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSmiles\", function() { return createSmiles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorItems\", function() { return colorItems; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/smile/model.js\");\n\n\nconst SCREEN_WIDTH = 750;\nconst SCREEN_HEIGHT = 750;\n\nfunction createSmiles({ perLine, lines }) {\n    const spaceItem = SCREEN_WIDTH / (perLine + 1);\n    const spaceLine = SCREEN_HEIGHT / (lines + 1);\n    const items = [];\n    for (let i = 0; i < lines; ++i) {\n        for (let j = 0; j < perLine; ++j) {\n            const item = {\n                x: spaceItem + (i * spaceItem),\n                y: spaceLine + (j * spaceLine),\n            };\n            items.push(item);\n        }\n    }\n    return items;\n}\n\nfunction colorItems(items) {\n    items.forEach((item) => {\n        const colorIndex = (item.x + item.y) % 3;\n        item.color = _model__WEBPACK_IMPORTED_MODULE_0__[\"COLORS\"][colorIndex];\n    });\n}\n\n\n//# sourceURL=webpack:///./src/smile/itemCreator.js?");

/***/ }),

/***/ "./src/smile/message.js":
/*!******************************!*\
  !*** ./src/smile/message.js ***!
  \******************************/
/*! exports provided: MOVE_SMILE_LEFT, MOVE_SMILE_RIGHT, moveSmileLeft, moveSmileRight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVE_SMILE_LEFT\", function() { return MOVE_SMILE_LEFT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVE_SMILE_RIGHT\", function() { return MOVE_SMILE_RIGHT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSmileLeft\", function() { return moveSmileLeft; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSmileRight\", function() { return moveSmileRight; });\nconst MOVE_SMILE_LEFT = 'MOVE_SMILE_LEFT';\nconst MOVE_SMILE_RIGHT = 'MOVE_SMILE_RIGHT';\n\nconst moveSmileLeft = () => ({\n    type: MOVE_SMILE_LEFT,\n});\n\nconst moveSmileRight = () => ({\n    type: MOVE_SMILE_RIGHT,\n});\n\n\n//# sourceURL=webpack:///./src/smile/message.js?");

/***/ }),

/***/ "./src/smile/model.js":
/*!****************************!*\
  !*** ./src/smile/model.js ***!
  \****************************/
/*! exports provided: COLOR_RED, COLOR_BLUE, COLOR_GREEN, COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_RED\", function() { return COLOR_RED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_BLUE\", function() { return COLOR_BLUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLOR_GREEN\", function() { return COLOR_GREEN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COLORS\", function() { return COLORS; });\nconst COLOR_RED = 'RED';\nconst COLOR_BLUE = 'BLUE';\nconst COLOR_GREEN = 'GREEN';\n\nconst COLORS = [COLOR_RED, COLOR_BLUE, COLOR_GREEN];\n\n\n//# sourceURL=webpack:///./src/smile/model.js?");

/***/ }),

/***/ "./src/smile/reducer.js":
/*!******************************!*\
  !*** ./src/smile/reducer.js ***!
  \******************************/
/*! exports provided: smileReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smileReducer\", function() { return smileReducer; });\n/* harmony import */ var smile_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smile/message */ \"./src/smile/message.js\");\n/* harmony import */ var smile_itemCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smile/itemCreator */ \"./src/smile/itemCreator.js\");\n\n\n\nconst DEFAULT_SPEED = 5;\n\nconst initialState = {\n    speed: DEFAULT_SPEED,\n    items: Object(smile_itemCreator__WEBPACK_IMPORTED_MODULE_1__[\"createSmiles\"])({ lines: 3, perLine: 3 }),\n};\n\nfunction mutateMoveLeft(items) {\n    items.forEach((smile) => {\n        smile.x -= 5;\n    });\n}\n\nfunction mutateMoveRight(items) {\n    items.forEach((smile) => {\n        smile.x += 5;\n    });\n}\n\nfunction smileReducer(state = initialState, message) {\n    switch (message.type) {\n    case smile_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVE_SMILE_LEFT\"]: {\n        mutateMoveLeft(state.items);\n        return state;\n    }\n    case smile_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVE_SMILE_RIGHT\"]: {\n        mutateMoveRight(state.items);\n        return state;\n    }\n    default: return state;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/smile/reducer.js?");

/***/ }),

/***/ "./src/smile/selector.js":
/*!*******************************!*\
  !*** ./src/smile/selector.js ***!
  \*******************************/
/*! exports provided: smileItems, smileItemsCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smileItems\", function() { return smileItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smileItemsCount\", function() { return smileItemsCount; });\nconst smileItems = (state) => state.smile.items;\nconst smileItemsCount = (state) => state.smile.items.length;\n\n\n//# sourceURL=webpack:///./src/smile/selector.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initStore\", function() { return initStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var smile_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smile/reducer */ \"./src/smile/reducer.js\");\n/* harmony import */ var ui_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ui/controller */ \"./src/ui/controller.js\");\n/* harmony import */ var ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ui/PerfMeter */ \"./src/ui/PerfMeter.js\");\n\n\n\n\n\n\nfunction connectController(controller) {\n    return (store) => (next) => (message) => {\n        next(message);\n        controller(store, message);\n    };\n}\n\nconst middlewares = [\n    ui_controller__WEBPACK_IMPORTED_MODULE_3__[\"moverController\"],\n    ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__[\"perfMeterController\"],\n].map(connectController);\n\nconst appReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n    smile: smile_reducer__WEBPACK_IMPORTED_MODULE_2__[\"smileReducer\"],\n    ui: Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n        [ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__[\"PERF_METER_KEY\"]]: ui_PerfMeter__WEBPACK_IMPORTED_MODULE_4__[\"perfMeterReducer\"],\n        mover: ui_controller__WEBPACK_IMPORTED_MODULE_3__[\"moverReducer\"],\n    }),\n});\n\nfunction initStore() {\n    const middlewareEnchancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(...middlewares);\n    const composedEnchancer = Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__[\"composeWithDevTools\"])(middlewareEnchancer);\n\n    const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(appReducer, composedEnchancer);\n    return store;\n}\n\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/ui/Button.js":
/*!**************************!*\
  !*** ./src/ui/Button.js ***!
  \**************************/
/*! exports provided: createButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createButton\", function() { return createButton; });\nfunction createButton({ text, onclick }) {\n    const button = document.createElement('button');\n    button.innerText = text;\n    button.onclick = onclick;\n    return button;\n}\n\n\n//# sourceURL=webpack:///./src/ui/Button.js?");

/***/ }),

/***/ "./src/ui/Canvas.js":
/*!**************************!*\
  !*** ./src/ui/Canvas.js ***!
  \**************************/
/*! exports provided: draw, createCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCanvas\", function() { return createCanvas; });\n/* harmony import */ var ui_Smile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/Smile */ \"./src/ui/Smile.js\");\n/* harmony import */ var smile_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smile/selector */ \"./src/smile/selector.js\");\n\n\n\nconst draw = ({ ctx, getState }) => () => {\n    console.info('DRAW');\n    ctx.clearRect(0, 0, 750, 750);\n\n    const items = Object(smile_selector__WEBPACK_IMPORTED_MODULE_1__[\"smileItems\"])(getState());\n\n    // create actual canvas-ui objects from state and draw them\n    items.map((center) => Object(ui_Smile__WEBPACK_IMPORTED_MODULE_0__[\"CanvasSmile\"])({ center })).forEach((item) => item(ctx));\n};\n\nconst createCanvas = ({ getState }) => (canvasElem) => {\n    const ctx = canvasElem.getContext('2d');\n    return draw({ ctx, getState });\n};\n\n\n//# sourceURL=webpack:///./src/ui/Canvas.js?");

/***/ }),

/***/ "./src/ui/Mover.js":
/*!*************************!*\
  !*** ./src/ui/Mover.js ***!
  \*************************/
/*! exports provided: createMover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMover\", function() { return createMover; });\n/* harmony import */ var ui_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/message */ \"./src/ui/message.js\");\n/* harmony import */ var ui_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/controller */ \"./src/ui/controller.js\");\n\n\n\nconst createMover = ({ dispatch, getState }) => (moverElem) => {\n    moverElem.addEventListener('mousedown', () => dispatch(Object(ui_message__WEBPACK_IMPORTED_MODULE_0__[\"moverOn\"])()));\n    moverElem.addEventListener('mousemove', (e) => {\n        if (Object(ui_controller__WEBPACK_IMPORTED_MODULE_1__[\"isMoverOn\"])(getState())) {\n            dispatch(Object(ui_message__WEBPACK_IMPORTED_MODULE_0__[\"moverStep\"])(e.offsetX));\n        }\n    });\n    moverElem.addEventListener('mouseup', () => dispatch(Object(ui_message__WEBPACK_IMPORTED_MODULE_0__[\"moverOff\"])()));\n    moverElem.addEventListener('mouseout', () => {\n        if (Object(ui_controller__WEBPACK_IMPORTED_MODULE_1__[\"isMoverOn\"])(getState())) {\n            dispatch(Object(ui_message__WEBPACK_IMPORTED_MODULE_0__[\"moverOff\"])());\n        }\n    });\n};\n\n\n//# sourceURL=webpack:///./src/ui/Mover.js?");

/***/ }),

/***/ "./src/ui/PerfMeter.js":
/*!*****************************!*\
  !*** ./src/ui/PerfMeter.js ***!
  \*****************************/
/*! exports provided: PERF_METER_KEY, PERF_METER_ENABLE, PERF_METER_DISABLE, PERF_METER_CLEAR, PERF_METER_SET_CANVAS_RENDER, perfMeterEnable, perfMeterDisable, perfMeterClear, perfMeterSetCanvasRender, perfMeterReducer, perfMeterController, createPerfMeter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERF_METER_KEY\", function() { return PERF_METER_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERF_METER_ENABLE\", function() { return PERF_METER_ENABLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERF_METER_DISABLE\", function() { return PERF_METER_DISABLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERF_METER_CLEAR\", function() { return PERF_METER_CLEAR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERF_METER_SET_CANVAS_RENDER\", function() { return PERF_METER_SET_CANVAS_RENDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterEnable\", function() { return perfMeterEnable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterDisable\", function() { return perfMeterDisable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterClear\", function() { return perfMeterClear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterSetCanvasRender\", function() { return perfMeterSetCanvasRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterReducer\", function() { return perfMeterReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"perfMeterController\", function() { return perfMeterController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPerfMeter\", function() { return createPerfMeter; });\n/* harmony import */ var smile_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smile/message */ \"./src/smile/message.js\");\n/* harmony import */ var smile_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smile/selector */ \"./src/smile/selector.js\");\n/* harmony import */ var ui_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ui/Button */ \"./src/ui/Button.js\");\n\n\n\n\nconst PERF_METER_KEY = 'perfMeter';\n\n// messages\nconst PERF_METER_ENABLE = 'PERF_METER_ENABLE';\nconst PERF_METER_DISABLE = 'PERF_METER_DISABLE';\nconst PERF_METER_CLEAR = 'PERF_METER_CLEAR';\nconst PERF_METER_SET_CANVAS_RENDER = 'PERF_METER_SET_CANVAS_RENDER';\nconst perfMeterEnable = () => ({ type: PERF_METER_ENABLE });\nconst perfMeterDisable = () => ({ type: PERF_METER_DISABLE });\nconst perfMeterClear = () => ({ type: PERF_METER_CLEAR });\nconst perfMeterSetCanvasRender = (msec, itemNum) => ({\n    type: PERF_METER_SET_CANVAS_RENDER,\n    payload: { msec, itemNum },\n});\n\n// state shape\nconst initialState = {\n    isEnabled: false,\n    avgMsec: 0,\n    itemNum: 0,\n};\n\n// selectors\nconst getPerfMeterAvgMsec = (state) => state.ui[PERF_METER_KEY].avgMsec;\nconst getPerfMeterItemNum = (state) => state.ui[PERF_METER_KEY].itemNum;\nconst isPerfMeterEnabled = (state) => state.ui[PERF_METER_KEY].isEnabled;\n\n// mutation\nfunction perfMeterReducer(state = initialState, message) {\n    switch (message.type) {\n    case PERF_METER_ENABLE: {\n        return { ...state, isEnabled: true };\n    }\n    case PERF_METER_DISABLE: {\n        return { ...state, isEnabled: false };\n    }\n    case PERF_METER_SET_CANVAS_RENDER: {\n        const { msec, itemNum } = message.payload;\n        return { ...state, avgMsec: msec, itemNum };\n    }\n    case PERF_METER_CLEAR: {\n        return {\n            ...state,\n            isEnabled: false,\n            avgMsec: 0,\n            itemNum: 0,\n        };\n    }\n    default: return state;\n    }\n}\n\n// async controller\nfunction perfMeterController({ getState, dispatch }, message) {\n    switch (message.type) {\n    case smile_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVE_SMILE_RIGHT\"]: {\n        if (isPerfMeterEnabled(getState())) {\n            performance.mark(smile_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVE_SMILE_RIGHT\"]);\n        }\n        break;\n    }\n    case PERF_METER_DISABLE: {\n        const entries = performance.getEntries();\n        const markStartTimes = [];\n        for (let i = 0; i < entries.length; ++i) {\n            if (entries[i].entryType === 'mark') {\n                markStartTimes.push(entries[i].startTime);\n            }\n        }\n        performance.clearMarks();\n        const durationTimes = markStartTimes.reduce(\n            (acc, startTime, index, startTimesArr) => acc.concat({\n                startTime,\n                duration: startTimesArr[index + 1] ? (startTimesArr[index + 1] - startTime) : 0,\n            }),\n            [],\n        ).filter((item) => !!item.duration);\n\n        const itemsQuantity = durationTimes.length;\n        const totalMsec = durationTimes.reduce((acc, item) => acc + item.duration, 0);\n        const averageMsec = totalMsec / itemsQuantity;\n        dispatch(perfMeterSetCanvasRender(averageMsec, itemsQuantity));\n        break;\n    }\n    default:\n    }\n}\n\n// ui update function on state change\nconst updatePerfMeter = ({ info, start, stop }, { getState }) => () => {\n    const state = getState();\n    const avgMsec = getPerfMeterAvgMsec(state) || 0;\n    const itemNum = getPerfMeterItemNum(state) || 0;\n    info.innerText = `avg: ${avgMsec} msec, num: ${itemNum}`;\n\n    const isEnabled = isPerfMeterEnabled(state);\n    if (start.disabled !== isEnabled) {\n        start.disabled = isEnabled;\n    }\n    if (stop.disabled === isEnabled) {\n        stop.disabled = !isEnabled;\n    }\n};\n\nconst createPerfMeter = ({ dispatch, getState }) => (perfMeterElem) => {\n    const perfMeterHeadElem = document.createElement('p');\n    perfMeterHeadElem.innerText = `Performance Meter: ${Object(smile_selector__WEBPACK_IMPORTED_MODULE_1__[\"smileItemsCount\"])(getState())} Smiles`;\n    const perfMeterInfoElem = document.createElement('div');\n    const clearButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"createButton\"])({ text: 'clear', onclick: () => dispatch(perfMeterClear()) });\n    const startButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"createButton\"])({ text: 'enable', onclick: () => dispatch(perfMeterEnable()) });\n    const stopButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_2__[\"createButton\"])({ text: 'stop', onclick: () => dispatch(perfMeterDisable()) });\n    perfMeterInfoElem.className = 'PerfMeterInfo';\n\n    perfMeterElem.appendChild(perfMeterHeadElem);\n    perfMeterElem.appendChild(perfMeterInfoElem);\n    perfMeterElem.appendChild(clearButton);\n    perfMeterElem.appendChild(startButton);\n    perfMeterElem.appendChild(stopButton);\n    const updateHandler = updatePerfMeter(\n        { info: perfMeterInfoElem, start: startButton, stop: stopButton },\n        { getState },\n    );\n    updateHandler();\n    return updateHandler;\n};\n\n\n//# sourceURL=webpack:///./src/ui/PerfMeter.js?");

/***/ }),

/***/ "./src/ui/Smile.js":
/*!*************************!*\
  !*** ./src/ui/Smile.js ***!
  \*************************/
/*! exports provided: CanvasSmile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasSmile\", function() { return CanvasSmile; });\nconst CanvasSmile = ({ center: c }) => (ctx) => {\n    const { radius: r } = { radius: 50 };\n\n    ctx.beginPath();\n    // outer circle\n    ctx.arc(c.x, c.y, r, 0, Math.PI * 2, true);\n    // mouth\n    ctx.moveTo(c.x + 35, c.y);\n    ctx.arc(c.x, c.y, r - 15, 0, Math.PI, false);\n    // left eye\n    ctx.moveTo(c.x - 10, c.y - 10);\n    ctx.arc(c.x - 15, c.y - 10, 5, 0, Math.PI * 2, true);\n    // right eye\n    ctx.moveTo(c.x + 20, c.y - 10);\n    ctx.arc(c.x + 15, c.y - 10, 5, 0, Math.PI * 2, true);\n    ctx.stroke();\n};\n\n\n//# sourceURL=webpack:///./src/ui/Smile.js?");

/***/ }),

/***/ "./src/ui/Toolbar.js":
/*!***************************!*\
  !*** ./src/ui/Toolbar.js ***!
  \***************************/
/*! exports provided: createToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createToolbar\", function() { return createToolbar; });\n/* harmony import */ var smile_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smile/message */ \"./src/smile/message.js\");\n/* harmony import */ var ui_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/Button */ \"./src/ui/Button.js\");\n\n\n\nconst createToolbar = ({ dispatch }) => (toolbarElem) => {\n    const moveLeftButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"createButton\"])({ text: 'move left', onclick: () => dispatch(Object(smile_message__WEBPACK_IMPORTED_MODULE_0__[\"moveSmileLeft\"])()) });\n    const moveRightButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"createButton\"])({ text: 'move right', onclick: () => dispatch(Object(smile_message__WEBPACK_IMPORTED_MODULE_0__[\"moveSmileRight\"])()) });\n    const move10RightButton = Object(ui_Button__WEBPACK_IMPORTED_MODULE_1__[\"createButton\"])({\n        text: 'move 10 right',\n        onclick: () => {\n            for (let i = 0; i < 10; ++i) {\n                dispatch(Object(smile_message__WEBPACK_IMPORTED_MODULE_0__[\"moveSmileRight\"])());\n            }\n        },\n    });\n\n    toolbarElem.appendChild(moveLeftButton);\n    toolbarElem.appendChild(moveRightButton);\n    toolbarElem.appendChild(move10RightButton);\n};\n\n\n//# sourceURL=webpack:///./src/ui/Toolbar.js?");

/***/ }),

/***/ "./src/ui/controller.js":
/*!******************************!*\
  !*** ./src/ui/controller.js ***!
  \******************************/
/*! exports provided: isMoverOn, moverCoordX, moverController, moverReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isMoverOn\", function() { return isMoverOn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverCoordX\", function() { return moverCoordX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverController\", function() { return moverController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverReducer\", function() { return moverReducer; });\n/* harmony import */ var ui_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ui/message */ \"./src/ui/message.js\");\n/* harmony import */ var smile_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! smile/message */ \"./src/smile/message.js\");\n\n\n\nconst initialState = {\n    step: 5,\n    x: {\n        prev: 0,\n        next: 0,\n    },\n    isMoving: false,\n};\n\nconst isMoverOn = (state) => state.ui.mover.isMoving;\nconst moverCoordX = (state) => state.ui.mover.x;\n\nfunction moverController({ dispatch, getState }, message) {\n    switch (message.type) {\n    case ui_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVER_STEP\"]: {\n        const { prev, next } = moverCoordX(getState());\n        if (next > prev) {\n            dispatch(Object(smile_message__WEBPACK_IMPORTED_MODULE_1__[\"moveSmileRight\"])());\n        } else {\n            dispatch(Object(smile_message__WEBPACK_IMPORTED_MODULE_1__[\"moveSmileLeft\"])());\n        }\n        break;\n    }\n    default:\n    }\n}\n\nfunction moverReducer(state = initialState, message) {\n    switch (message.type) {\n    case ui_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVER_ON\"]: return { ...state, isMoving: true };\n    case ui_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVER_OFF\"]: return { ...state, isMoving: false };\n    case ui_message__WEBPACK_IMPORTED_MODULE_0__[\"MOVER_STEP\"]: return {\n        ...state,\n        x: { prev: state.x.next, next: message.payload.offsetX },\n    };\n    default: return state;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ui/controller.js?");

/***/ }),

/***/ "./src/ui/message.js":
/*!***************************!*\
  !*** ./src/ui/message.js ***!
  \***************************/
/*! exports provided: MOVER_ON, MOVER_OFF, MOVER_STEP, CANVAS_MOVE, moverOn, moverOff, moverStep, canvasMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVER_ON\", function() { return MOVER_ON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVER_OFF\", function() { return MOVER_OFF; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MOVER_STEP\", function() { return MOVER_STEP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CANVAS_MOVE\", function() { return CANVAS_MOVE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverOn\", function() { return moverOn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverOff\", function() { return moverOff; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moverStep\", function() { return moverStep; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvasMove\", function() { return canvasMove; });\nconst MOVER_ON = 'MOVER_ON';\nconst MOVER_OFF = 'MOVER_OFF';\nconst MOVER_STEP = 'MOVER_STEP';\n\nconst CANVAS_MOVE = 'CANVAS_MOVE';\n\nconst moverOn = () => ({ type: MOVER_ON });\nconst moverOff = () => ({ type: MOVER_OFF });\nconst moverStep = (offsetX) => ({ type: MOVER_STEP, payload: { offsetX } });\n\nconst canvasMove = () => ({ type: CANVAS_MOVE });\n\n\n//# sourceURL=webpack:///./src/ui/message.js?");

/***/ })

/******/ });