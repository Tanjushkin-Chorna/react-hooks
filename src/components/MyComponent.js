import React, {useState, useEffect} from 'react'

export const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [disable, setDisable] = useState(false)
    const handler = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setMessage(`Button was clicked ${count} times`);
        if (count > 3) {
            setDisable(true)
        }
}, [count, message, disable])

  return (
    <div>
          <div> {message}</div>
          <button disabled={disable} onClick={handler}>click</button>
    </div>
  )
}
