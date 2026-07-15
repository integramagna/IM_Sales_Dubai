import React from 'react'
import Header from './Components/Header/Header'

export default function RabtoraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
