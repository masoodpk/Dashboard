import { useState } from 'react'
import axios from 'axios';
import Sidebar from './components/sidebar';
import Card from './components/card';
import Card2 from './components/card2';
import Table from './components/Table/table';
import NavBar from './components/Navbar';
import Graph from './components/Graph/graph';
import PieChart from './components/Pie-chart/pie-chart';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = location.href;
  if (import.meta.env.DEV) {
    axios.defaults.baseURL = 'http://localhost:3001';
  }
  return (
    <>
      <div className='body'>
        <Sidebar />
        <div className="right">
          <div className="one">
            <p>Good morning</p>
          <Card2 />
          </div>
          <div className="two">
            <div className="graph">
            <Graph />
            <PieChart />
            </div>
            <div className="pie">
              <PieChart/>
            </div>
          </div>
          <div className="three">
          <Table />
          <Card />
          </div>
        </div>
        {/* <NavBar /> */}
      </div>
    </>
  )
}

export default App
