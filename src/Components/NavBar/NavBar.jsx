import React from 'react'
import './NavBar.css'
import Link from 'next/link'
const NavBar = () => {
  return (
    <header>
        <div> LOGO</div>

        <nav>

              <li>
                <Link href={'/'}>Home</Link>
              
                </li>
              <li>
              <Link href={'/contact'}>Contat</Link>
              </li>
              <li>
              <Link href={'/product'}>Product</Link>
              </li>
        </nav>
    </header>
  )
}

export default NavBar