import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-300  text-3xl font-bold underline">
      Prathmesh Gavande
      </h1>
      <br />

       {/* we are not able to give the parameter to props as object, array so store object in variable then pass to props
       eg, let obj={
              "name"="prathmesh"
              "roll"="09"
             }
       */}
      <Card myname="Alia" btnText="click me"></Card>
      <br />
      <Card myname="rashmika" ></Card>
    </>
  )
}

export default App
