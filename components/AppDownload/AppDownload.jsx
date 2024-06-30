import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For better Experience Download<br/>ServiNest App</p>
        <div className='app-download-platforms'>
            <img src={assets.both} alt="" />
        </div>
    </div>
  )
}

export default AppDownload