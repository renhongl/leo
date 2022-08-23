---
title: 基础版本
tags: [手写JS]
---

## 主要 API

- createStore
- getState
- dispatch
- subscribe

## Core

```js
const createStore = (reducer) => {
    let state = reducer(undefined, {})
    const listener = []

    return {
        getState: () => {
            return state
        },
        subscribe: (fn) => {
            listener.push(fn)
        },
        dispatch: (action) => {
            state = reducer(state, action)
            for (let fn of listener) {
                fn && fn()
            }
        }
    }
}
```

## 测试代码

```js
const initState = {
    value: 0,
    name: 'test singel reducer'
}

const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + (action.payload || 1)
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - (action.payload || 1)
            }
        default:
            return {
                ...state
            }
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

store.dispatch({
    type: 'INCREMENT',
    payload: 10
})

store.dispatch({
    type: 'INCREMENT',
    payload: 5
})

store.dispatch({
    type: 'DECREMENT',
    payload: 2
})
```
