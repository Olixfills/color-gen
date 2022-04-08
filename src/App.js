import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [isError, setIsError] = useState(false)
  const [list, setList] = useState(new Values('#735B98').all(10));

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
      console.log(colors);

    } catch (error) {
      setIsError(true)
      console.log(error);
    }
  }

  return <>
    <section className="container">
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit} >
        <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
          placeholder='#735B98'
          className={`${isError? 'error': null}`}
        />
        <button className="btn" type='submit' >Generate</button>
      </form>
  </section>
      <div style={{width: '100%', height: '5px', marginTop: '0', marginBottom: '2rem', backgroundColor: color, borderRadius: '10px'}}></div>
    <section className="colors">
      {list.map((cols, ind) => {
        return <SingleColor key={ind} ind={ind} {...cols} />
        
      })}
  </section>
  </>
}

export default App
