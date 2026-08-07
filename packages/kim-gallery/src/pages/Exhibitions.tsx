import { SiteHeader, GroupNav } from '@seoulphoto/design-system'
import { galleryNavItems, SITE_NAME } from '../shared/nav'
import styles from './Exhibitions.module.css'

const filters = ['전체', '개인전', '기획전', '아트페어']

const current = {
  category: '개인전',
  artist: '구본창',
  title: '백자 — 그릇의 초상',
  period: '2026. 07. 02 — 2026. 09. 13',
  room: '1층 전시실',
  works: '젤라틴 실버 프린트 40점',
  seed: 'kg-ex-c1',
  desc: '조선 백자를 20년 가까이 촬영해 온 구본창의 연작. 유약의 미세한 결과 그림자만으로 형태를 세우는 작가의 정물 언어를 한자리에 모았다. 국내 미공개 신작 12점이 함께 걸린다.',
}

interface Show {
  category: string
  artist: string
  title: string
  period: string
  room: string
  seed: string
}

const upcoming: Show[] = [
  { category: '개인전', artist: '배병우', title: '소나무 — 새로운 프린트', period: '2026. 09. 24 — 2026. 11. 15', room: '1층 전시실', seed: 'kg-ex-u1' },
  { category: '개인전', artist: '이갑철', title: '충돌과 반동, 30년', period: '2026. 11. 26 — 2027. 01. 24', room: '1–2층 전시실', seed: 'kg-ex-u2' },
  { category: '기획전', artist: '오혜진 · 임태훈 · 박미나', title: '반포 아파트, 마지막 여름', period: '2027. 02. 04 — 2027. 03. 28', room: '2층 전시실', seed: 'kg-ex-u3' },
]

const past: Show[] = [
  { category: '개인전', artist: '김아타', title: 'ON-AIR — 사라지는 것들', period: '2026. 04. 09 — 2026. 06. 21', room: '1–2층 전시실', seed: 'kg-ex-p1' },
  { category: '기획전', artist: '단체', title: '흑백의 온도: 한국 다큐멘터리 사진 40년', period: '2026. 01. 22 — 2026. 03. 29', room: '1–2층 전시실', seed: 'kg-ex-p2' },
  { category: '아트페어', artist: '화랑 부스', title: '파리 포토 2025 — Booth C-17', period: '2025. 11. 13 — 2025. 11. 16', room: 'Grand Palais Éphémère', seed: 'kg-ex-p3' },
  { category: '개인전', artist: '강홍구', title: '사라진 마을', period: '2025. 09. 04 — 2025. 10. 26', room: '1층 전시실', seed: 'kg-ex-p4' },
  { category: '개인전', artist: '권오상', title: 'Deodorant Type — 재구성', period: '2025. 06. 12 — 2025. 08. 17', room: '2층 전시실', seed: 'kg-ex-p5' },
  { category: '기획전', artist: '단체', title: '첫 개인전: 신진 사진가 6인', period: '2025. 03. 20 — 2025. 05. 25', room: '1–2층 전시실', seed: 'kg-ex-p6' },
]

export default function Exhibitions() {
  return (
    <div className={styles.page}>
      <SiteHeader siteName={SITE_NAME} navItems={galleryNavItems} dark />

      {/* ── Page Header ──────────────────────────────── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageTitle}>전시</h1>
          <p className={styles.pageSubtitle}>1998년 개관 이래 214회의 전시</p>
        </div>
        <nav className={styles.filterNav} aria-label="전시 유형">
          {filters.map((f, i) => (
            <a
              key={f}
              href="#/exhibitions"
              className={[styles.filterTab, i === 0 ? styles.filterTabActive : ''].filter(Boolean).join(' ')}
            >
              {f}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Current ──────────────────────────────────── */}
      <section className={styles.current}>
        <p className={styles.sectionLabel}>현재 전시</p>
        <article className={styles.currentCard}>
          <a href="#/exhibitions" className={styles.currentLink}>
            <div className={styles.currentImageWrap}>
              <img
                src={`https://picsum.photos/seed/${current.seed}/1200/800?grayscale`}
                alt={`${current.artist} — ${current.title}`}
                className={styles.currentImage}
              />
              <span className={styles.currentBadge}>NOW ON</span>
            </div>
            <div className={styles.currentText}>
              <p className={styles.currentCategory}>{current.category}</p>
              <p className={styles.currentArtist}>{current.artist}</p>
              <h2 className={styles.currentTitle}>{current.title}</h2>
              <div className={styles.currentMeta}>
                <p className={styles.currentPeriod}>{current.period}</p>
                <p className={styles.currentRoom}>{current.room} · {current.works}</p>
              </div>
              <p className={styles.currentDesc}>{current.desc}</p>
              <span className={styles.currentMore}>전시 상세</span>
            </div>
          </a>
        </article>
      </section>

      {/* ── Upcoming ─────────────────────────────────── */}
      <section className={styles.upcoming}>
        <p className={styles.sectionLabel}>예정 전시</p>
        <div className={styles.upcomingGrid}>
          {upcoming.map(show => (
            <article key={show.seed} className={styles.upcomingCard}>
              <a href="#/exhibitions" className={styles.upcomingLink}>
                <div className={styles.upcomingImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${show.seed}/800/600?grayscale`}
                    alt={`${show.artist} — ${show.title}`}
                    className={styles.upcomingImage}
                  />
                </div>
                <div className={styles.upcomingText}>
                  <p className={styles.upcomingCategory}>{show.category}</p>
                  <p className={styles.upcomingArtist}>{show.artist}</p>
                  <h3 className={styles.upcomingTitle}>{show.title}</h3>
                  <p className={styles.upcomingPeriod}>{show.period}</p>
                  <p className={styles.upcomingRoom}>{show.room}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Past ─────────────────────────────────────── */}
      <section className={styles.past}>
        <p className={styles.sectionLabel}>지난 전시</p>
        <div className={styles.pastGrid}>
          {past.map(show => (
            <article key={show.seed} className={styles.pastCard}>
              <a href="#/exhibitions" className={styles.pastLink}>
                <div className={styles.pastImageWrap}>
                  <img
                    src={`https://picsum.photos/seed/${show.seed}/600/450?grayscale`}
                    alt={`${show.artist} — ${show.title}`}
                    className={styles.pastImage}
                  />
                </div>
                <div className={styles.pastText}>
                  <p className={styles.pastCategory}>{show.category}</p>
                  <p className={styles.pastArtist}>{show.artist}</p>
                  <h3 className={styles.pastTitle}>{show.title}</h3>
                  <p className={styles.pastPeriod}>{show.period}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
        <div className={styles.pastMore}>
          <a href="#/exhibitions" className={styles.pastMoreLink}>전시 아카이브 전체 보기 (1998–)</a>
        </div>
      </section>

      <GroupNav currentSite="kim" />
    </div>
  )
}
