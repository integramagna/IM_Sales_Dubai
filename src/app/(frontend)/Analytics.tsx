'use client'

import { useEffect } from 'react'

const CLARITY_ID = 'x14iuuw3q8'
const GA_ID = 'G-D4KRP8QQE4'
const META_PIXEL_ID = '28071693665753615'

function loadTrackers() {
  // Google Analytics
  const gaScript = document.createElement('script')
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  gaScript.async = true
  document.head.appendChild(gaScript)

  const gaInit = document.createElement('script')
  gaInit.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `
  document.head.appendChild(gaInit)

  // Meta Pixel
  const fbScript = document.createElement('script')
  fbScript.innerHTML = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${META_PIXEL_ID}');
    fbq('track', 'PageView');
  `
  document.head.appendChild(fbScript)

  // Clarity
  const clarityScript = document.createElement('script')
  clarityScript.innerHTML = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${CLARITY_ID}");
  `
  document.head.appendChild(clarityScript)
}

export default function Analytics() {
  useEffect(() => {
    // Load after first user interaction OR after 3 seconds — whichever comes first
    let loaded = false

    const load = () => {
      if (loaded) return
      loaded = true
      loadTrackers()
      cleanup()
    }

    const cleanup = () => {
      window.removeEventListener('scroll', load)
      window.removeEventListener('mousemove', load)
      window.removeEventListener('touchstart', load)
    }

    window.addEventListener('scroll', load, { once: true, passive: true })
    window.addEventListener('mousemove', load, { once: true, passive: true })
    window.addEventListener('touchstart', load, { once: true, passive: true })

    const timer = setTimeout(load, 8000)

    return () => {
      cleanup()
      clearTimeout(timer)
    }
  }, [])

  return null
}
