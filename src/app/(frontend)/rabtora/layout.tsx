import React from 'react'
import Header from './_components/Header/Header'

export default function RabtoraLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
