import { useState } from 'react'
import { Grid } from './Grid'
import { Projects } from './Projects'
import {AboutMePopup} from './AboutMePopup'
import './App.css'

function App() {
  

  return (
    <main>
       <section className='main-container'>
          <Grid/>
          <Projects />
       </section>
    </main>
  )
}

export default App
