import { useState } from 'react'
import axios from 'axios';
import Sidebar from './components/sidebar';
import Card from './components/card';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = location.href;
  if(import.meta.env.DEV){
    axios.defaults.baseURL = 'http://localhost:3001';
   }
  return (
    <>
     <div>

  <Sidebar />
  <Card />



     </div>
    </>
  )
}

export default App
