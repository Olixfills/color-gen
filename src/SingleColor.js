import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, ind,}) => {
  const [copy, setCopy] = useState(false)
  const n2rgb = rgb.join(',')

  useEffect(() => {
    const timeOut = setTimeout(() => {
       setCopy(false)
    }, 1000)
    return () => clearTimeout(timeOut);
  }, [copy])


  const handleClick = () => {
    setCopy(true)
    navigator.clipboard.writeText(rgbToHex(...rgb))
    // setTimeout(() => {
    //   setCopy(false)
    // }, 2000);
  }

  return <section
      onClick={handleClick}
      key={ind}
      className={`color ${ind > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${n2rgb})` }} >
    
    <p className='percent-value'>{weight}%</p>
    <p className="color-value">{rgbToHex(...rgb)}</p>
    {copy && <p className={`alert`}>Copied to clipboard</p> }
  </section>
}

export default SingleColor
