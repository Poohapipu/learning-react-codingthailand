import React from 'react'
import {logo} from '../style/style'

const Logo = () => {
  const LogoImage ={
    url : './logo192.png'
  }
  return (
    <div>
        <img style={logo} src={LogoImage.url} width='100' alt='logo'></img>
    </div>
  )
}

export default Logo