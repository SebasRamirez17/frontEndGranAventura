import React from 'react'
import { Navbar } from '../../../components/ui/Navbar/Navbar'
import { Nombre } from '../../ui/Nombre/Nombre'

export const Header = () => {
  return (
    <header>
      <Nombre content='Gran Aventura' style='h1'/>
      <Navbar />
    </header>
  )
}
