'use client'
import { usePathname } from 'next/navigation'
import Header from './Header'

export default function ConditionalHeader() {
  const pathname = usePathname()
  if (
    pathname.startsWith('/rabtora') ||
    pathname.startsWith('/uiux') ||
    pathname.startsWith('/Signage')
  )
    return null
  return <Header />
}
