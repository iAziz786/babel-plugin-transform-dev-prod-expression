# babel-plugin-transform-dev-prod-expression

[![Build Status](https://travis-ci.org/iAziz786/babel-plugin-transform-dev-prod-expression.svg?branch=master)](https://travis-ci.org/iAziz786/babel-plugin-transform-dev-prod-expression)

A babel plugin to transform `__DEV__` and `__PROD__` expressions.

### What magic it does?

It can convert this:

```js
if (__DEV__) {
  // some script to run in development mode
}

if (__PROD__) {
  // some script to run in development mode
}
```

Into this:

```js
if (process.env.NODE_ENV === 'development') {
  // some script to run in production mode
}

if (process.env.NODE_ENV === 'production') {
  // some script to run in production mode
}
```
