import { SiteHeader, GroupNav } from '@seoulphoto/design-system'

const navItems = [
  { label: '경매', href: '#' },
  { label: '마켓', href: '#' },
  { label: '작가', href: '#' },
  { label: '뉴스', href: '#' },
  { label: '고객센터', href: '#' },
  { label: 'KR', href: '#' },
]

export default function About() {
  return (
    <>
      <SiteHeader siteName="PHOTO AUCTION" navItems={navItems} dark />
      <main style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.3)',
        textTransform: 'uppercase',
      }}>
        준비 중입니다
      </main>
      <GroupNav currentSite="auction" />
    </>
  )
}
