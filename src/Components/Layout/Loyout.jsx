import React from 'react'
import NavBar from '../NavBar/NavBar'

const Loyout = ({children}) => {
  return (
    <>
    <NavBar />
    <main>
        {children}
    </main>
    </>

  )
}

export default Loyout