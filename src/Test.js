import React, { useCallback, useEffect, useMemo, useState } from 'react'

function Test () {
  const [count, setCount] = useState(0)
  const remainder = useMemo(() => {
    if (count % 2 !== 0) {
      return 1
    } else {
      return 2
    }
  }, [count])

  const cb = ()=>{};

  const cb1 = useCallback(()=>{},[])

  useEffect(() => {
    console.log('useEffect')
    const tt=setTimeout(() => {
      console.log('setTimeOut')
      setCount(count + 1)
    }, 1000)
    return (()=>{
      clearTimeout(tt)
    })
    cb1();
    cb();
  }, [count,cb])
  return (
    <div className="App">
      <span className={`${remainder === 1 ? 'green' : 'red'}`}>{count}</span>
    </div>
  )
}

export default Test
