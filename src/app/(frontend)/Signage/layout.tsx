import React from 'react'
import Header from './Components/Header/Header'

export default function RabtoraLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      <Header />
      {children}
    </div>
  )
}
