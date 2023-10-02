

import './App.css'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
import PriceOption from './Components/PriceOption/PriceOption'
import NavBar from './NavBar/NavBar'
// import DaisyNav from './Components/DaisyNav/DaisyNav'


function App() {
  

  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      
      <h1 className='text7xl bg-rose-600'>Vite + React</h1>

      <PriceOption></PriceOption>

      <LineChart></LineChart>

      <Phones></Phones>
      
      
    </>
  )
}

export default App
