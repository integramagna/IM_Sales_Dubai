'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import newlogo from './newlogo.png'

import styles from './header.module.css'

function Header() {
  const pathname = usePathname()
  if (pathname === '/rabtora/thank-you' || pathname === '/Signage/thank-you') return null
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const headerLink = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset
      setIsScrollingDown(currentPosition > scrollPosition)
      setScrollPosition(currentPosition)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPosition])

  useEffect(() => {
    let gsapInstance = null
    let cancelled = false

    const applyHoverEffects = () => {
      if (window.innerWidth > 960 && gsapInstance) {
        const gsap = gsapInstance
        headerLink.current.forEach((element) => {
          const link = element.querySelector('span')
          if (!link) return
          if (!element.querySelector('.link-container')) {
            const clone = link.cloneNode(true)
            const container = document.createElement('div')
            container.classList.add('link-container')
            container.appendChild(link)
            container.appendChild(clone)
            element.appendChild(container)

            container.addEventListener('mouseover', () => {
              gsap.to(container.querySelectorAll('span'), {
                y: '-100%',
                duration: 0.3,
                ease: 'power1.out',
              })
            })
            container.addEventListener('mouseout', () => {
              gsap.to(container.querySelectorAll('span'), {
                y: '0',
                duration: 0.3,
                ease: 'power1.out',
              })
            })
          }
        })
      }
    }

    import('gsap').then((mod) => {
      if (cancelled) return
      gsapInstance = mod.default || mod.gsap || mod
      applyHoverEffects()
    })

    window.addEventListener('resize', applyHoverEffects)
    return () => {
      cancelled = true
      window.removeEventListener('resize', applyHoverEffects)
    }
  }, [])

  const sidebarRef = useRef(null)
  const dropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsSidebarOpen(false)
      }
    }
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSidebarOpen])
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  const handleSidebarNavClick = (e, href) => {
    e.preventDefault()
    setIsSidebarOpen(false)
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.MainContainer}>
          <div className={styles.left}>
            <Image src={newlogo} alt="new" />
          </div>
          <a
            href="https://wa.me/971585792934"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.right}
          >
            <div className={styles.svgwp}>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1534 11.6349C13.9101 11.5117 12.7252 10.9336 12.5037 10.851C12.2823 10.7722 12.1215 10.7309 11.9601 10.9742C11.8024 11.2114 11.3376 11.7544 11.1957 11.9128C11.0537 12.0711 10.9141 12.0833 10.6745 11.9759C10.4312 11.8527 9.654 11.5997 8.73119 10.7722C8.01041 10.1309 7.53051 9.34093 7.38793 9.09764C7.24596 8.85738 7.37215 8.72148 7.49228 8.60135C7.6027 8.49093 7.73557 8.32348 7.85874 8.17787C7.97583 8.03226 8.01345 7.93458 8.099 7.77683C8.17787 7.60634 8.13722 7.47347 8.07715 7.35335C8.01709 7.23322 7.53354 6.04224 7.3315 5.56779C7.13857 5.09698 6.93653 5.15705 6.78789 5.15705C6.64895 5.14431 6.48757 5.14431 6.32679 5.14431C6.16601 5.14431 5.90331 5.20437 5.68186 5.43492C5.46041 5.67822 4.83489 6.25944 4.83489 7.43525C4.83489 8.61409 5.70066 9.75471 5.82079 9.9252C5.94395 10.0829 7.52383 12.5098 9.94765 13.5527C10.5258 13.796 10.9748 13.9416 11.3255 14.0618C11.9037 14.245 12.4315 14.2195 12.8483 14.1594C13.3094 14.0836 14.2765 13.5746 14.4792 13.0061C14.6849 12.4339 14.6848 11.9601 14.6248 11.8527C14.5647 11.7423 14.407 11.6822 14.1637 11.5748L14.1534 11.6349ZM9.75774 17.5946H9.745C8.31013 17.5946 6.89164 17.2057 5.65273 16.4789L5.36212 16.3054L2.32856 17.0953L3.14398 14.1437L2.94801 13.8403C2.14695 12.5664 1.72192 11.0921 1.72185 9.58726C1.72185 5.18253 5.32754 1.58958 9.76381 1.58958C11.9128 1.58958 13.9289 2.42685 15.4457 3.94363C16.1939 4.683 16.7873 5.56395 17.1915 6.53509C17.5957 7.50623 17.8024 8.54812 17.7997 9.6C17.7936 14.0017 14.191 17.5946 9.76078 17.5946H9.75774ZM16.599 2.79027C14.7534 1.00775 12.3266 0 9.745 0C4.4205 0 0.0849396 4.31675 0.0819061 9.62184C0.0819061 11.3158 0.524199 12.9685 1.37117 14.4312L0 19.4148L5.1255 18.0782C6.54512 18.8444 8.13241 19.2471 9.74561 19.2504H9.74864C15.0762 19.2504 19.4117 14.9336 19.4148 9.62487C19.4148 7.05606 18.4131 4.63831 16.5869 2.82121L16.599 2.79027Z" fill="black"/>
</svg>


            </div>
            <div className={styles.text}>
              <p>Let’s Talk</p>
              <span className={styles.arrow}>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.68504 0.310761C9.61974 0.245456 9.54183 0.193422 9.45648 0.158153C9.37113 0.122891 9.27951 0.105513 9.18717 0.105672H2.33431C2.24202 0.105513 2.15031 0.122933 2.065 0.158153C1.97964 0.193422 1.90174 0.245456 1.83643 0.310761C1.77128 0.375937 1.71976 0.453491 1.68452 0.538637C1.66686 0.581368 1.65337 0.626078 1.64447 0.67122L1.63135 0.808636C1.63119 0.900956 1.64859 0.992617 1.68383 1.07794C1.71909 1.1633 1.77182 1.24052 1.83712 1.30582C1.90228 1.37095 1.9792 1.42318 2.06431 1.45843C2.10699 1.47607 2.1518 1.48957 2.19689 1.49848L2.33431 1.5116H7.23434L7.49053 1.51091L0.313807 8.68763C0.182349 8.8192 0.108718 8.99812 0.108718 9.18412C0.108769 9.37014 0.182966 9.54838 0.314497 9.67993C0.446034 9.81146 0.624286 9.88564 0.810301 9.8857C0.996301 9.88571 1.17522 9.81207 1.30679 9.68062L8.48282 2.50459V2.76009L8.48351 7.6608C8.48351 7.84728 8.55812 8.02682 8.68998 8.15868C8.82182 8.29036 9.00082 8.36446 9.18717 8.36446C9.37353 8.36441 9.55255 8.29043 9.68435 8.15868C9.81612 8.02691 9.89003 7.84784 9.89013 7.6615V0.808636C9.89029 0.716281 9.87223 0.623993 9.83696 0.538637C9.80173 0.453505 9.75017 0.375935 9.68504 0.310761Z"
                    fill="white"
                    stroke="black"
                    strokeWidth="0.211765"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.headerSpacer} />
    </>
  )
}

export default Header
