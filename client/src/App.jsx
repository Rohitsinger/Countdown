import { useState } from 'react'
import axios from 'axios'

import './App.css'
import Graph from './components/Graph'
import Form from './components/Form'

axios.defaults.baseURL = `http://localhost:5000`

function App() {


  return (
    <>
      <div className='container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800'>
       <h1 className='text-4xl font-serif mb-8 py-10  bg-slate-900 text-white'>Expense Tracker</h1>
      </div>
      {/*grid collumns*/}
   <div className='grid md:grid-cols-2 gap-4 '>
        {/*chart*/}
        <Graph></Graph>
           {/*Form*/}
           <Form/>
           
   </div>

    
    </>
  )
}

export default App
