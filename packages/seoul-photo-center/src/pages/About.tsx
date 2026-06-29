import { SiteHeader } from '@seoulphoto/design-system'
import { GroupNav } from '@seoulphoto/design-system'

const navItems = [
  { label: '전시', href: '#' },
  { label: '교육', href: '#' },
  { label: '아카이브', href: '#' },
  { label: '뉴스', href: '#' },
  { label: 'KR', href: '#' },
]

export default function About() {
  return (
    <>
      <SiteHeader siteName="서울사진센터 / SEOUL PHOTOGRAPHY CENTER" navItems={navItems} />
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        letterSpacing: '0.08em',
        color: 'rgba(17,17,17,0.4)',
        textTransform: 'uppercase',
      }}>
        준비 중입니다
      </main>
      <GroupNav currentSite="center" />
    </>
  )
}
