import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = location.href;
  if(import.meta.env.DEV){
    axios.defaults.baseURL = 'http://localhost:3000';
   }
  return (
    <>
     
    </>
  )
}

export default App
