import React, { useState } from 'react'

const WithHOC = (WrappedComponent,num) =>{

function HOC(props) {
    const [count , setCount] = useState(0)
    const inc = () =>{
        setCount(count+num)
    }
  return (
    <div>
      <WrappedComponent COUNT = {count} INC = {inc}/>
    </div>
  )
}
return HOC


}
export default WithHOC 
