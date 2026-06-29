import { SiteHeader, GroupNav } from '@seoulphoto/design-system'

const navItems = [
  { label: '아트', href: '#' },
  { label: '포트폴리오', href: '#' },
  { label: '인터뷰', href: '#' },
  { label: '리뷰', href: '#' },
  { label: '아카이브', href: '#' },
  { label: 'KR', href: '#' },
]

export default function About() {
  return (
    <>
      <SiteHeader siteName="월간사진 / MONTHLY PHOTOGRAPHY" navItems={navItems} />
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
      <GroupNav currentSite="monthly" />
    </>
  )
}
