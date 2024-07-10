import { useCallback, useState } from "react"
import ChildComponent from "./ChildComponent"

const UseCallbackDemo = () => {
    const [count, setCount] = useState(0)

    const increment = useCallback(() => setCount(count + 1), [count])

  return (
    <div>
        <p>Current Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <ChildComponent increment={increment}/>
    </div>
  )
}
export default UseCallbackDemo