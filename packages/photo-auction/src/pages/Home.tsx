import { useEffect, useState } from 'react'
import { SiteHeader, GroupNav, EditorialLabel } from '@seoulphoto/design-system'
import styles from './Home.module.css'

const navItems = [
  { label: '경매', href: '#auction' },
  { label: '마켓', href: '#market' },
  { label: '작가', href: '#artists' },
  { label: '뉴스', href: '#news' },
  { label: '고객센터', href: '#' },
  { label: 'KR', href: '#' },
]

const heroLots = [
  {
    artist: '구본창',
    title: '백자 연구 No. 7',
    titleEn: 'Baekja Study No. 7',
    year: '2018',
    medium: '아카이벌 피그먼트 프린트',
    dimensions: '100 × 80 cm',
    src: 'https://picsum.photos/seed/pa-lot1/900/1100?grayscale',
  },
  {
    artist: '배병우',
    title: '소나무 #SU03-033',
    titleEn: 'Pine Tree #SU03-033',
    year: '2003',
    medium: '젤라틴 실버 프린트',
    dimensions: '80 × 100 cm',
    src: 'https://picsum.photos/seed/pa-lot2/900/1100?grayscale',
  },
  {
    artist: '김아타',
    title: 'On Air — Ice Man',
    titleEn: 'On Air — Ice Man',
    year: '2006',
    medium: '크로모제닉 프린트',
    dimensions: '120 × 90 cm',
    src: 'https://picsum.photos/seed/pa-lot3/900/1100?grayscale',
  },
]

const marketItems = [
  { artist: '오혜진', title: '서울의 봄 No. 3', year: '2024', price: '₩ 2,400,000', src: 'https://picsum.photos/seed/pa-mkt1/600/750?grayscale' },
  { artist: '이인성', title: '빈 의자', year: '2022', price: '₩ 3,100,000', src: 'https://picsum.photos/seed/pa-mkt2/600/750?grayscale' },
  { artist: '권오상', title: 'Deodorant Type 42', year: '2020', price: '₩ 4,800,000', src: 'https://picsum.photos/seed/pa-mkt3/600/750?grayscale' },
]

const trustItems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: '진품 보증',
    desc: '전문 감정인 검증 완료 작품만 등록',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    label: '안전 결제',
    desc: '에스크로 방식 구매자 보호',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    label: '전문 배송',
    desc: '미술품 전문 포장·배송 서비스',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: '사후 관리',
    desc: '낙찰 후 1년 작품 상태 보증',
  },
]

const AUCTION_END = new Date('2026-07-15T18:00:00').getTime()

function useCountdown(target: number) {
  const [remaining, setRemaining] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, target - Date.now()))
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])

  const total = Math.floor(remaining / 1000)
  const secs  = total % 60
  const mins  = Math.floor(total / 60) % 60
  const hours = Math.floor(total / 3600) % 24
  const days  = Math.floor(total / 86400)

  return { days, hours, mins, secs }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0)
  const lot = heroLots[heroIdx]
  const { days, hours, mins, secs } = useCountdown(AUCTION_END)
  const totalLots = heroLots.length

  const prev = () => setHeroIdx(i => (i - 1 + totalLots) % totalLots)
  const next = () => setHeroIdx(i => (i + 1) % totalLots)

  return (
    <div className={styles.page}>
      <SiteHeader
        siteName="PHOTO AUCTION"
        navItems={navItems}
        dark
      />

      {/* ── Hero ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroArtwork}>
          <img
            key={heroIdx}
            src={lot.src}
            alt={`${lot.artist} — ${lot.title}`}
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroMeta}>
          <h1 className={styles.heroArtist}>{lot.artist}</h1>
          <p className={styles.heroTitle}><em>{lot.titleEn}</em></p>
          <p className={styles.heroDetails}>{lot.year} · {lot.medium} · {lot.dimensions}</p>
          <a href="#" className={styles.heroLink}>VIEW AUCTIONS →</a>
        </div>
        <div className={styles.heroNav}>
          <button onClick={prev} className={styles.heroNavBtn} aria-label="이전 작품">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M10 12L6 8l4-4" />
            </svg>
          </button>
          <span className={styles.heroNavLabel}>
            {String(heroIdx + 1).padStart(2, '0')} / {String(totalLots).padStart(2, '0')}
          </span>
          <button onClick={next} className={styles.heroNavBtn} aria-label="다음 작품">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        </div>
      </section>

      {/* ── Live Auction ─────────────────────────────── */}
      <section className={styles.liveAuction} id="auction">
        <div className={styles.liveHeader}>
          <span className={styles.liveBadge}>● LIVE</span>
          <h2 className={styles.liveTitle}>Live Auction</h2>
        </div>
        <div className={styles.liveContent}>
          <div className={styles.liveImageWrap}>
            <img
              src="https://picsum.photos/seed/pa-live/800/700?grayscale"
              alt="라이브 경매 작품"
              className={styles.liveImage}
            />
          </div>
          <div className={styles.liveInfo}>
            <div className={styles.liveLotInfo}>
              <span className={styles.liveLotNum}>Lot 014</span>
              <EditorialLabel variant="terracotta">진행 중</EditorialLabel>
              <h3 className={styles.liveArtist}>구본창</h3>
              <p className={styles.liveWorkTitle}><em>백자 연구 No. 14</em></p>
              <p className={styles.liveMedium}>아카이벌 피그먼트 프린트 · 에디션 1/5 · 80 × 64 cm</p>
            </div>

            <div className={styles.countdown}>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNum}>{pad(days)}</span>
                <span className={styles.countdownLabel}>DAYS</span>
              </div>
              <div className={styles.countdownSep}>:</div>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNum}>{pad(hours)}</span>
                <span className={styles.countdownLabel}>HOURS</span>
              </div>
              <div className={styles.countdownSep}>:</div>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNum}>{pad(mins)}</span>
                <span className={styles.countdownLabel}>MINS</span>
              </div>
              <div className={styles.countdownSep}>:</div>
              <div className={styles.countdownUnit}>
                <span className={styles.countdownNum}>{pad(secs)}</span>
                <span className={styles.countdownLabel}>SECS</span>
              </div>
            </div>

            <a href="#" className={styles.bidBtn}>입찰하기</a>
          </div>
        </div>
      </section>

      {/* ── Premium Market ───────────────────────────── */}
      <section className={styles.market} id="market">
        <div className={styles.marketHeader}>
          <h2 className={styles.marketTitle}>Premium Market</h2>
          <a href="#" className={styles.marketAll}>전체 보기 →</a>
        </div>
        <div className={styles.marketGrid}>
          {marketItems.map(item => (
            <article key={item.title} className={styles.marketItem}>
              <a href="#" className={styles.marketLink}>
                <div className={styles.marketImageWrap}>
                  <img
                    src={item.src}
                    alt={`${item.artist} — ${item.title}`}
                    className={styles.marketImage}
                  />
                </div>
                <div className={styles.marketMeta}>
                  <p className={styles.marketArtist}>{item.artist}</p>
                  <p className={styles.marketWork}>{item.title}</p>
                  <p className={styles.marketYear}>{item.year}</p>
                  <p className={styles.marketPrice}>{item.price}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Why Photo Auction ────────────────────────── */}
      <section className={styles.trust}>
        <div className={styles.trustGrid}>
          {trustItems.map(item => (
            <div key={item.label} className={styles.trustItem}>
              <div className={styles.trustIcon}>{item.icon}</div>
              <p className={styles.trustLabel}>{item.label}</p>
              <p className={styles.trustDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <GroupNav currentSite="auction" />
    </div>
  )
}
