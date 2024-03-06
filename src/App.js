import React from 'react'
import HomePages from './page/HomePages'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
        <HomePages />
      <Footer />
    </>
  )
}

export default App