import React from 'react'
import About from './pages/About'
import {Routes,Route,Link} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Tasks</h1>
      <h1 className='py-5'><span className='text-2xl font-bold'>Abhishek</span>-Make anything at about page . Create branch "abhi-test" branch and do your task</h1>
      <button className="bg-green-200 text-green-900 px-5 py-2 rounded-lg font-semibold hover:bg-green-300 transition"><Link to='/About' > About </Link></button>
      <br />
      <br />
      <h1><span className='text-2xl font-bold'>Bharat</span>-Make anything at info page . Create branch "bharat-test" branch and do your task</h1>
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
  
}

export default App