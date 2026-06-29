import { useEffect, useState } from 'react'
import styles from './SiteHeader.module.css'

interface NavItem {
  label: string
  href: string
}

interface SiteHeaderProps {
  siteName: string
  navItems: NavItem[]
  dark?: boolean
  scrollTransparent?: boolean
}

export function SiteHeader({ siteName, navItems, dark = false, scrollTransparent = false }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!scrollTransparent) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTransparent])

  const isDark = dark || (scrollTransparent && scrolled)
  const isTransparent = scrollTransparent && !scrolled

  return (
    <header
      className={[
        styles.header,
        isDark      ? styles.dark        : '',
        isTransparent ? styles.transparent : '',
      ].filter(Boolean).join(' ')}
    >
      <div className={styles.inner}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoText}>{siteName}</span>
        </a>
        <nav className={styles.nav} aria-label="메인 내비게이션">
          <ul className={styles.navList}>
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
