import styles from './GroupNav.module.css'

export type GroupNavSite = 'center' | 'monthly' | 'auction'

interface GroupNavProps {
  currentSite?: GroupNavSite
}

const sites: { id: GroupNavSite; label: string; href: string }[] = [
  { id: 'center',  label: '서울사진센터', href: import.meta.env.VITE_URL_CENTER  ?? 'http://localhost:5173' },
  { id: 'monthly', label: '월간사진',     href: import.meta.env.VITE_URL_MONTHLY ?? 'http://localhost:5174' },
  { id: 'auction', label: '포토옥션',     href: import.meta.env.VITE_URL_AUCTION ?? 'http://localhost:5175' },
]

export function GroupNav({ currentSite }: GroupNavProps) {
  return (
    <nav className={styles.nav} aria-label="그룹 내비게이션">
      <div className={styles.inner}>
        <div className={styles.logoMark}>
          <span className={styles.logoText}>SP</span>
        </div>

        <ul className={styles.siteLinks}>
          {sites.map(site => (
            <li key={site.id}>
              <a
                href={site.href}
                className={`${styles.siteLink} ${currentSite === site.id ? styles.siteLinkActive : ''}`}
                aria-current={currentSite === site.id ? 'page' : undefined}
              >
                {site.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <div className={styles.searchWrap}>
            <input
              type="search"
              placeholder="통합 검색"
              className={styles.searchInput}
              aria-label="통합 검색"
            />
          </div>
          <a href="#" className={styles.authLink}>로그인</a>
          <span className={styles.authDivider}>/</span>
          <a href="#" className={styles.authLink}>회원가입</a>
        </div>
      </div>
    </nav>
  )
}
