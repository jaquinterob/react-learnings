import React, { useContext } from 'react'
import { Context } from '../context/Context'

export const Pierde = () => {
    const {palabra}=useContext(Context)
  return (
    <div>Perdiste la palabra era: {palabra.toUpperCase()} </div>
  )
}
