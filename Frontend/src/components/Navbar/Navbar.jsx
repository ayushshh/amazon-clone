import React from 'react'
import NavbarBelt from './NavbarBelt/NavbarBelt'
import NavbarBanner from './NavbarBanner/NavbarBanner'

function Navbar() {
  return (
    <div className="w-full flex flex-col border border-solid">
        <NavbarBelt />
        <NavbarBanner />
    </div>
  )
}

export default Navbar