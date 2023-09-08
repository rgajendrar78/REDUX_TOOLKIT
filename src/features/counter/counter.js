import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="increment by 5 value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
         increment by 5 value
        </button>
        <button
          aria-label="Decriment by 5 value"
          onClick={() => dispatch(decrementByAmount(5))}
        >
         decriment by 5 value
        </button>
      </div>
    </div>
  )
}