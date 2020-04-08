import React from 'react'
import { useStore } from 'react-context-hook'
import { useFlashWhenRender } from './utils/useFlash'

export default function SetAmountExample() {
  const [count, setCount, deleteCount] = useStore('count', 0)

  return (
    <section ref={useFlashWhenRender()}>
      <h3>
        Set the value <em>"count"</em> in the store
      </h3>
      <button onClick={() => setCount(count - 1)}>Decrement - </button>
      <span className="count">{count}</span>
      <button onClick={() => setCount(count + 1)}>Increment + </button>
      <button onClick={() => deleteCount()}>Delete "count" from store</button>
    </section>
  )
}
