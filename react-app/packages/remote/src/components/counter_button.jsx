import { useState, useEffect } from "react"
import { useAtom } from 'jotai'
import { countAtom } from '../share/counter_state'

export function Counter({
  label,
  onButtonClick
}) {
const [count, setCount] = useAtom(countAtom)


useEffect(() => {
  onButtonClick(count)

  const event = new CustomEvent(
      'remoteClickAction',
      { 
        detail : {
          count : count
        }
      }
    );
  window.dispatchEvent(event);
  console.log("publish the event")
}, [count]);


return (<button  onClick={() => setCount((count) => count + 1)}>
          ButtonFromRemote: count is {count} {label}
        </button>)
}
