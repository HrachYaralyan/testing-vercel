import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,incrementByAmount } from '../../app/slices/counterSlice'

export function Counter() {
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
          onClick={() => dispatch(decrement(5))}
        >
          Decrement
        </button>


        <button
          aria-label="?????"
          onClick={() => dispatch(incrementByAmount( 10 ))}
        >
          ???????
        </button>
      </div>
    </div>
  )
}