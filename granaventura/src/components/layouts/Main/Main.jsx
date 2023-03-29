import React from 'react'
import { Inicio } from '../../ui/Inicio/Inicio'
import { Lugares } from '../../ui/Lugares/Lugares'
import { Personal } from '../../ui/Personal/Personal'
import { Documento } from '../../ui/Documento/Documento'

export const Main = () => {
  return (
    <main>
        <Inicio />
        <Lugares />
        <Personal />
        <Documento/>

    </main>
  )
}