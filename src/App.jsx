import { useState } from 'react'
import axios from 'axios';
import Sidebar from './components/sidebar';
import Card from './components/card';
import Card2 from './components/card2'
import NavBar from './components/Navbar';

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
    
     <Card2 />
  <Sidebar />
 
  
  <Card />
  {/* <NavBar /> */}




     </div>
    </>
  )
}

export default App
